import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Image from '../Utils/Image'
import { useEffect, useState } from 'react'
import { getPartners } from '../../lib/partner'

const Partner: React.FC = (): JSX.Element => {
  const [partners, setPartners] = useState<string[]>([])

  const { t } = useTranslation()

  const fetchPartners = async () => {
    const res = await Promise.all(getPartners)
    setPartners(res)
  }

  useEffect(() => {
    fetchPartners()
  }, [])

  return (
    <div className="py-40">
      <h1 className="text-center text-3xl font-bold text-white">{t('home.partner')}</h1>
      <div className="relative mx-auto mt-10 w-full overflow-hidden sm:w-3/4 lg:w-1/2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"></div>

        <div className="flex gap-10">
          <motion.div
            className="flex shrink-0 gap-10"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }}
          >
            {partners.map((partner, i) => (
              <Image
                src={partner}
                alt="partner"
                key={i}
                className="h-[50px] select-none opacity-50 transition-all duration-200 hover:opacity-100"
              />
            ))}
          </motion.div>
          <motion.div
            className="flex shrink-0 gap-10"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }}
          >
            {partners.map((partner, i) => (
              <Image
                src={partner}
                alt="partner"
                key={i}
                className="h-[50px] select-none opacity-50 transition-all duration-200 hover:opacity-100"
              />
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  )
}

export default Partner
