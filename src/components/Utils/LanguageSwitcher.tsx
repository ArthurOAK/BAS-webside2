import { useEffect } from 'react'
import { LANGUAGE } from '../../constants/local-storage'
import { useTranslation } from 'react-i18next'
import { FaEarthAmericas, FaEarthAsia } from 'react-icons/fa6'
// import { Theme, useTheme } from '../../lib/context/theme/theme'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  // const { theme, toggleTheme } = useTheme()

  const currentLanguage = localStorage.getItem(LANGUAGE)

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage)
    } else {
      localStorage.setItem(LANGUAGE, 'th')
    }
  }, [currentLanguage, i18n])

  const switchLanguage = () => {
    i18n.changeLanguage(currentLanguage === 'en' ? 'th' : 'en')
    localStorage.setItem(LANGUAGE, currentLanguage === 'en' ? 'th' : 'en')
  }

  return (
    <div>
      <button onClick={switchLanguage} className="flex items-center justify-center gap-2">
        {currentLanguage === 'en' ? <FaEarthAmericas /> : <FaEarthAsia />}
        {currentLanguage === 'en' ? 'English' : 'ภาษาไทย'}
      </button>
      {/* <button onClick={toggleTheme} className="py-2 px-4 border rounded-md bg-blue-400 text-blue-950">
        {theme === Theme.light ? t('theme.light') : t('theme.dark')}
      </button> */}
    </div>
  )
}

export default LanguageSwitcher
