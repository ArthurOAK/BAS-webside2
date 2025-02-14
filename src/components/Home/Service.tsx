import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SERVICE_PATH } from '../../constants/routes'
import serviceData from '../../data/services/service.json'
import { useEffect, useState } from 'react'
import { IService } from '../Service/Cards'
import { RiHomeOfficeFill } from 'react-icons/ri'
import { MdFactory, MdOtherHouses } from 'react-icons/md'
import SlideDown from '../Utils/animation/SlideDown'
import Partner from './Partner'
import { FiArrowRightCircle } from 'react-icons/fi'

const Service: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IService[]>([])
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const featuredService = serviceData.filter((service) => service.isFeatured)

    setData(featuredService)
  }, [])

  const filterTypeIcon = (type: string) => {
    switch (type) {
      case 'office':
        return <RiHomeOfficeFill size={40} className="fill-primary-100" />
      case 'factory':
        return <MdFactory size={40} className="fill-primary-100" />
      default:
        return <MdOtherHouses size={40} className="fill-primary-100" />
    }
  }

  return (
    <div className="bg-[url('assets/service-bg.png')] bg-cover bg-center bg-no-repeat py-10">
      <Partner />
      <h1 className="py-10 text-center text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
        {t('home.service.title')}
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 px-4 md:px-0">
        {data.map((service: IService, i: number) => (
          <SlideDown key={i} durationOffset={i}>
            <div className="min-h-[300px] w-full rounded-lg border border-white/20 bg-gradient-to-b from-[#141414]/50 to-[#141414]/30 p-4 text-white shadow-lg md:w-[400px]">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-600/30">
                {filterTypeIcon(service.type)}
              </div>
              <div className="text-xl font-semibold">{service.title}</div>
              <p className="mt-2">{i18n.language === 'en' ? service.description.en : service.description.th}</p>
            </div>
          </SlideDown>
        ))}
      </div>
      <div className="px-4 py-8 md:px-0">
        <p className="text-center text-white/50">{t('home.service.description')}</p>
      </div>
      <div className="mt-10 pb-10 text-center lg:mr-10">
        <Link to={SERVICE_PATH}>
          <button className="rounded-full border border-white/20 bg-foreground/20 px-4 py-2 text-white transition-colors duration-200 hover:bg-[#0a0a0a]">
            {t('home.service.button')}
            <FiArrowRightCircle className="ml-2 inline-block size-[25px]" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Service
