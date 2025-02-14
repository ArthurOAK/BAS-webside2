import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type Props = {
  types: string[]
  selectedType: string | null
  setSelectedType: (type: string) => void
}

const Filter: React.FC<Props> = ({ types, selectedType, setSelectedType }: Props): JSX.Element => {
  const { t } = useTranslation()

  const i18nTextFromType = (type: string) => t('service.filter.type.' + type)

  return (
    <div className="py-6 lg:p-6">
      <h3 className="text-2xl font-semibold">{t('service.filter.title')}</h3>
      <ul className="mt-4">
        {types.map((type, i) => (
          <motion.li
            key={i}
            onClick={() => setSelectedType(type)}
            className={`${
              type === selectedType ? 'text-primary-600' : ''
            } mt-2 cursor-pointer text-lg transition-colors duration-200`}
            whileHover={{
              borderLeft: '4px solid #3c883c',
              paddingLeft: '8px',
            }}
            initial={{
              borderLeft: type === selectedType ? '4px solid #3c883c' : '0px solid transparent',
              paddingLeft: type === selectedType ? '8px' : '0px',
            }}
            animate={{
              borderLeft: type === selectedType ? '4px solid #3c883c' : '0px solid transparent',
              paddingLeft: type === selectedType ? '8px' : '0px',
            }}
            transition={{ duration: 0.2 }}
          >
            {i18nTextFromType(type)}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
