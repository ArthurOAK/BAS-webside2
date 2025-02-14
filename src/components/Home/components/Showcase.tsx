import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from '../../Utils/Image'
import { useTranslation } from 'react-i18next'

type Props = {
  title: string
  contractValue: string
  systems: string[]
  image: string
}

const Showcase: React.FC<Props> = ({ title, contractValue, systems, image }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => setIsHovered(false)}
      className="relative cursor-pointer rounded-xl sm:h-[400px] sm:w-[250px] lg:h-[600px] lg:w-[350px]"
    >
      <motion.div
        className="absolute inset-0 select-none rounded-xl bg-gradient-to-t from-black from-5% to-transparent to-100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <Image src={image} alt="project_image" className="size-full select-none rounded-xl object-cover" />
      <motion.div
        className="absolute inset-x-0 bottom-10 px-3 text-center text-base font-bold text-white sm:text-lg lg:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -10 : 20 }}
        transition={{ type: 'spring' }}
      >
        {title}
        <br />
        <span className="font-normal">
          {t('home.project.detail.1')}: {contractValue}
        </span>
        <br />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-normal">{t('home.project.detail.2')}:</span>
          {systems.map((system, index) => (
            <span key={index} className="rounded-md bg-white/30 px-2 py-1 text-xs text-white">
              {system}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Showcase
