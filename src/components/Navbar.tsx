import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from './Utils/Image'
import Logo from 'src/data/core/logo.svg'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './Utils/LanguageSwitcher'
import { animateScroll } from 'react-scroll'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import { BASE_PATH } from '../constants/routes'

const Navbar: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const mainNavMenu: { name: string; destination: string }[] = [
    {
      name: t('nav.home'),
      destination: BASE_PATH,
    },
    {
      name: t('nav.about'),
      destination: `${BASE_PATH}#about`,
    },
    {
      name: t('nav.service'),
      destination: `${BASE_PATH}#service`,
    },
    {
      name: t('nav.project'),
      destination: `${BASE_PATH}#project`,
    },
  ]

  const renderMainNavMenu = mainNavMenu.map((item: { name: string; destination: string }, i: number) => (
    <div className="group relative" key={i}>
      <Link
        to={item.destination}
        replace={i === 0}
        className={`relative cursor-pointer font-semibold ${
          location.pathname === item.destination ? 'text-primary-600' : ''
        }`}
        onClick={() => {
          if (i === 0) {
            animateScroll.scrollToTop()
          }
          setIsExpanded(false)
        }}
      >
        {item.name}
      </Link>
      <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-primary-600 transition-all duration-300 group-hover:w-full" />
    </div>
  ))

  return (
    <nav>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-foreground/70 shadow-lg backdrop-blur-xl">
        <div className="flex h-16 w-full items-center justify-between gap-6 whitespace-nowrap px-8 text-lg text-white md:px-20 lg:justify-around lg:px-10">
          <Link
            to={BASE_PATH}
            className="flex h-full cursor-pointer items-center"
            onClick={() => {
              animateScroll.scrollToTop()
              setIsExpanded(false) // Close the menu on logo click
            }}
          >
            <Image src={Logo} alt="image" className="-ml-4 h-3/5 w-[150px]" />
          </Link>
          <div className="hidden flex-row items-center justify-center gap-7 lg:flex">{renderMainNavMenu}</div>
          <div className="hidden items-center justify-center gap-8 lg:flex">
            <LanguageSwitcher />
            <Link to={`${BASE_PATH}#contact`}>
              <button className="rounded-full border border-white/20 bg-primary-600/20 px-4 py-2 text-base font-semibold text-white transition duration-200 hover:bg-primary-600">
                {t('nav.contact')}
              </button>
            </Link>
          </div>
          <button className="lg:hidden" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <RxCross2 className="size-8" /> : <RxHamburgerMenu className="size-8" />}
          </button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="h-dvh py-10 text-xl text-white lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100dvh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-14">
                {renderMainNavMenu}
                <LanguageSwitcher />
                <Link
                  to={`${BASE_PATH}#contact`}
                  onClick={() => {
                    setIsExpanded(false)
                  }}
                >
                  <button className="rounded-full border border-white/20 bg-primary-600/20 px-4 py-2 text-lg font-semibold text-white transition duration-200 hover:bg-primary-600">
                    {t('nav.contact')}
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
