import { useState, createContext, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import Api from '@api'
import Spinner from '@src/@core/components/spinner/Fallback-spinner'
import { useDispatch, useSelector } from 'react-redux'

const Context = createContext()

const IntlProviderWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const { locale } = useSelector(store => store.auth)
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState({})

  useEffect(() => {
    setLoading(true)
    Api.LanguageWord({ id: locale ? locale : 'en' }).then(({ data }) => {
      setMessages(data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
    })
  }, [locale])

  const switchLanguage = lang => {
    dispatch({ type: 'LOCALE', data: lang })
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <Context.Provider value={{ locale, switchLanguage }}>
        <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale='en' onError={() => {}}>
          {children}
        </IntlProvider>
      </Context.Provider>
    )
  }
}

export { IntlProviderWrapper, Context as IntlContext }