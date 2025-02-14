import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../../constants/routes'

const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-[url('src/data/core/hero-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/65 from-0% to-black/65 to-100% px-4 font-semibold text-white md:items-start md:bg-gradient-to-r md:from-black md:to-transparent md:px-20">
        <h1
          className="pb-4 text-center text-4xl sm:text-5xl md:text-left md:text-6xl lg:text-7xl"
          dangerouslySetInnerHTML={{ __html: t('home.hero.title.main') }}
        ></h1>
        <p
          className="text-center text-lg sm:text-xl md:w-1/2 md:text-left md:text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{ __html: t('home.hero.title.quote') }}
        ></p>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link to={`${BASE_PATH}#contact`}>
            <button className="w-full rounded-full border border-white/20 bg-primary-600 px-6 py-2 text-white transition duration-200 hover:bg-primary-700 sm:w-auto md:text-lg">
              {t('nav.contact')}
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 z-10 hidden translate-x-[-5%] translate-y-1/2 rounded-lg bg-primary-600 p-5 md:block lg:p-7">
          <ul className="flex list-inside flex-col gap-2 text-xs lg:text-base">
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.hero.highlights.1')}
            </li>
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.hero.highlights.2')}
            </li>
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.hero.highlights.3')}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Hero
