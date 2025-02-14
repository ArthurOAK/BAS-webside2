import { useTranslation } from 'react-i18next'
import Image from '../Utils/Image'
import { getServiceImage } from '../../lib/service'

export interface IService {
  title: string
  image: string
  description: {
    en: string
    th: string
  }
  type: string
  isFeatured: boolean
}

type Props = {
  filteredService: IService[]
}

const Card: React.FC<Props> = ({ filteredService }: Props): JSX.Element => {
  const { i18n } = useTranslation()

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-10">
      {filteredService.map((service, i) => (
        <div
          key={i}
          className="w-full rounded-lg border border-white/20 bg-gradient-to-b from-[#141414]/50 to-[#141414]/30 shadow-lg lg:w-[400px]"
        >
          <div>
            {service.image && (
              <Image
                className="h-[200px] w-full rounded-t-lg object-cover object-center"
                src={getServiceImage(service.title)}
                alt={service.title}
              />
            )}
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold">{service.title}</div>
            <p className="mt-2 font-extralight">
              {i18n.language === 'en' ? service.description.en : service.description.th}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
