import { lazy } from 'react'
const Title = 'BoiBook Admin'
const DefaultRoute = '/dashboard'

const Routes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: lazy(() => import('../../views/dashboard')),
    exact: true
  },
  {
    path: '/advertisement',
    title: 'Advertisement',
    component: lazy(() => import('../../views/advertisement')),
    exact: true
  },
  {
    path: '/user',
    title: 'Users',
    component: lazy(() => import('../../views/users/user'))
  },
  {
    path: '/report/:userId',
    title: 'Report',
    component: lazy(() => import('../../views/users/report'))
  },
  {
    path: '/history',
    title: 'Login History',
    component: lazy(() => import('../../views/users/history'))
  },
  {
    path: '/online',
    title: 'Online Users',
    component: lazy(() => import('../../views/users/online'))
  },
  {
    path: '/permission',
    title: 'Permission',
    component: lazy(() => import('../../views/users/permission'))
  },
  {
    path: '/sports-lists',
    title: 'Sports Lists',
    component: lazy(() => import('../../views/sports/lists'))
  },
  {
    path: '/sports-leagues',
    title: 'Sports Leagues',
    component: lazy(() => import('../../views/sports/leagues'))
  },
  {
    path: '/brackets-history',
    title: 'Brackets History',
    component: lazy(() => import('../../views/brackets/history'))
  },
  {
    path: '/brackets-matchs',
    title: 'Brackets Matchs',
    component: lazy(() => import('../../views/brackets/matchs'))
  },
  {
    path: '/sports-bets-history',
    title: 'Bets History',
    component: lazy(() => import('../../views/sports/betsHistory'))
  },
  {
    path: '/sports-betting-history',
    title: 'Betting History',
    component: lazy(() => import('../../views/sports/bettingHistory'))
  },
  {
    path: '/sports-available',
    title: 'Matchs Available',
    component: lazy(() => import('../../views/sportsmatchs/available'))
  },
  {
    path: '/sports-finished',
    title: 'Matchs Finished',
    component: lazy(() => import('../../views/sportsmatchs/finished'))
  },
  {
    path: '/sports-error',
    title: 'Matchs Error',
    component: lazy(() => import('../../views/sportsmatchs/error'))
  },
  {
    path: '/currency',
    title: 'Currency',
    component: lazy(() => import('../../views/payment/currency'))
  },
  {
    path: '/balance',
    title: 'Balance',
    component: lazy(() => import('../../views/payment/balance'))
  },
  {
    path: '/balance-history',
    title: 'Balance History',
    component: lazy(() => import('../../views/payment/balancehistory'))
  },
  {
    path: '/payment',
    title: 'Payment History',
    component: lazy(() => import('../../views/payment/history'))
  },
  {
    path: '/providers',
    title: 'Game Provider',
    component: lazy(() => import('../../views/games/providers'))
  },
  // {
  //   path: '/game-lists',
  //   title: 'Game Lists',
  //   component: lazy(() => import('../../views/games/lists'))
  // },
  {
    path: '/game-history',
    title: 'History',
    component: lazy(() => import('../../views/games/history'))
  },
  {
    path: '/language-v',
    title: 'Language',
    component: lazy(() => import('../../views/language'))
  },
  {
    path: '/language-words-v',
    title: 'Language Add',
    component: lazy(() => import('../../views/language/words'))
  },
  {
    path: '/login',
    title: 'Login',
    component: lazy(() => import('../../views/authentication/Login')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    title: 'Error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, Title, Routes }
