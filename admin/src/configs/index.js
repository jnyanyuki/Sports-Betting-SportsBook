const url = process.env.REACT_APP_API_URL

const Config = {
  /**
   * api
   */
  SignIn: 'v3/users/admin/signin',
  SignOut: 'v3/users/admin/signout',
  Users: 'v3/users/admin/',
  Online: 'v3/users/session/',
  Permissions: 'v3/users/permission/',
  LoginHistory: 'v3/users/history/',

  GamesProviders: 'v3/games/providers/',
  GamesLists: 'v3/games/lists/',
  GamesHistory: 'v3/games/games/',

  SportsBets: 'v3/sports/bets/',
  SportsLists: 'v3/sports/lists/',
  SportsResult: 'v3/sports/result/',
  SportsMatchs: 'v3/sports/matchs/',
  SportsLeagues: 'v3/sports/leagues/',
  SportsBettings: 'v3/sports/bettings/',
  SportsFixMatchs: 'v3/sports/fixmatchs/',
  SportsEndMatchs: 'v3/sports/endmatchs/',
  SportsResettle: 'v3/sports/resettle/',

  BracketsBets: 'v3/brackets/bets/',
  BracketsMatchs: 'v3/brackets/matchs/',

  Payments: 'v3/payments/payments/',
  Balances: 'v3/payments/balances/',
  Currencies: 'v3/payments/currency/',
  UpdateBalance: 'v3/payments/updateBalance',
  BalanceHistory: 'v3/payments/balancehistory/',
  GetAdminBalance: 'v3/payments/getAdminBalance',

  Reports: 'v3/reports/',
  ReportUser: 'v3/reports/user',
  ReportProfit: 'v3/reports/c-profit',

  Word: 'v3/languages/',
  LanguageWord: 'v1/languages/word/',
  LanguageWords: 'v3/languages/words/',
  Language: 'v3/languages/language/',
  Languages: 'v3/languages/languages/',

  Files: 'v3/files/',

  Advertisements: 'v3/advertisements/',

  Socket: null,
  apiUrl: `${url}/api/`,
  domain: `${url}/`,

  app: {
    appName: 'BoiBook',
    appLogoImage: require('@src/assets/images/logo/logo.png').default,
    appLogoImage1: require('@src/assets/images/logo/logo-1.png').default
  },
  layout: {
    isRTL: false,
    skin: 'dark',
    routerTransition: 'fadeIn',
    type: 'vertical',
    contentWidth: 'full',
    menu: {
      isHidden: false,
      isCollapsed: false
    },
    navbar: {
      type: 'floating',
      backgroundColor: 'white'
    },
    footer: {
      type: 'static'
    },
    customizer: false,
    scrollTop: true
  }
}

export default Config