import { Suspense, lazy, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import io from 'socket.io-client'
import Config from '@config'
import { useRouterTransition } from '@hooks/useRouterTransition'
import { useLayout } from '@hooks/useLayout'
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayout from '@src/layouts/VerticalLayout'
import LayoutWrapper from '@layouts/components/layout-wrapper'
import HorizontalLayout from '@src/layouts/HorizontalLayout'
import { DefaultRoute, Routes } from './routes'
const Router = () => {
  const dispatch = useDispatch()
  const { isAuth, token } = useSelector(state => state.auth)
  const [layout, setLayout] = useLayout()
  const [transition, setTransition] = useRouterTransition()
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout }
  const currentActiveItem = null
  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes = []
    const LayoutPaths = []
    if (Routes) {
      Routes.filter(route => {
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }
    return { LayoutRoutes, LayoutPaths }
  }

  useEffect(() => {
    if (isAuth) {
      Config.Socket = io(Config.domain, { query: { auth: token } })
      Config.Socket.on('logout', () => {
        dispatch({ type: 'LOGOUT' })
      })
      Config.Socket.on('reload', () => {
        window.location.reload()
      })
    }
    return () => {
      if (Config.Socket) {
        Config.Socket.off('logout')
        Config.Socket.off('reload')
      }
    }
  }, [token, isAuth, dispatch])

  useEffect(() => {
    const title = Routes.find(e => e.path === window.location.pathname)
    if (title?.title) {
      document.title = title?.title
    } else {
      document.title = 'Boibook User Report'
    }
  }, [window.location])

  const Login = lazy(() => import('@src/views/authentication/Login'))
  const Error = lazy(() => import('@src/views/Error'))

  const FinalRoute = props => {
    const route = props.route
    let action, resource
    if (route.meta) {
      action = route.meta.action ? route.meta.action : null
      resource = route.meta.resource ? route.meta.resource : null
    }
    if (
      (!isAuth && route.meta === undefined) ||
      (!isAuth && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
    ) {
      return <Redirect to='/login' />
    } else if (route.meta && route.meta.authRoute && isAuth) {
      return <Redirect to='/dashboard' />
    } else {
      return <route.component {...props} />
    }
  }

  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const LayoutTag = Layouts[layout]
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)
      const routerProps = {}
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            routerProps={routerProps}
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
            <Switch>
              {LayoutRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={props => {
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta
                      })
                      return (
                        <Suspense fallback={null}>
                          <LayoutWrapper
                            layout={DefaultLayout}
                            transition={transition}
                            setTransition={setTransition}
                          >
                            <FinalRoute route={route} {...props} />
                          </LayoutWrapper>
                        </Suspense>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to={DefaultRoute} />
          }}
        />
        <Route
          path='/login'
          render={props => (
            <Layouts.BlankLayout>
              <Login />
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}
        <Route path='*' component={Error} />/
      </Switch>
    </AppRouter>
  )
}

export default Router