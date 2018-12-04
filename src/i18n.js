import { addLocaleData } from 'react-intl'

// import some locales
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

// import translations
import enTranslationMessages from './translations/en.json'
import frTranslationMessages from './translations/fr.json'

// add some locale data
addLocaleData(en)
addLocaleData(fr)

// default locale taken from env, otherwise 'en'
export const DEFAULT_LOCALE = 'en'

// export the locale
export const locale = localStorage.locale || DEFAULT_LOCALE

// export locales
export const locales = ['en','fr']

// export translation messages
export const translationMessages = {
  en: enTranslationMessages,
  fr: frTranslationMessages
}
