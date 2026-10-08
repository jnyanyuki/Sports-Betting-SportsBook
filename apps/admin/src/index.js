import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/storeConfig/store'
import { ThemeContext } from './utility/context/ThemeColors'
import { IntlProviderWrapper } from './utility/context/Internationalization'
import Spinner from './@core/components/spinner/Fallback-spinner'
import * as serviceWorker from './serviceWorker'
import Loading from '@loading/loading'
import LoadingContextProvider from '@loading'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'jsoneditor-react/es/editor.min.css'
import 'prismjs/components/prism-jsx.min'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@styles/react/libs/toastify/toastify.scss'
import '@styles/react/apps/app-users.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import './@core/components/ripple-button'
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'

const LazyApp = lazy(() => import('./App'))
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Suspense fallback={<Spinner />}>
        <LoadingContextProvider>
          <ThemeContext>
            <IntlProviderWrapper>
              <LazyApp />
              <ToastContainer newestOnTop />
            </IntlProviderWrapper>
          </ThemeContext>
          <Loading />
        </LoadingContextProvider>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()