import { useTranslation } from 'react-i18next'
import serviceData from '../../data/services/service.json'
import { useEffect, useState } from 'react'
import Filter from '../../components/Service/Filter'
import Card, { IService } from '../../components/Service/Cards'
import Image from '../../components/Utils/Image'
import Banner from 'src/data/services/images/banner.webp'
import SlideDown from '../../components/Utils/animation/SlideDown'
import Fade from '../../components/Utils/animation/Fade'

const Service: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IService[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const { t } = useTranslation()

  useEffect(() => {
    setData(serviceData)
    scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const typeMap = new Map<string, boolean>()
    data.forEach((service) => {
      typeMap.set(service.type, true)
    })

    const uniqueTypes = Array.from(typeMap.keys())
    setTypes(uniqueTypes)
  }, [data])

  useEffect(() => {
    setSelectedType(types[0])
  }, [types])

  const filteredService = data.filter((service) =>
    selectedType ? service.type === selectedType : service.type === types[0],
  )

  return (
    <Fade>
      <div className="min-h-screen bg-background text-white">
        <div className="relative mt-[60px]">
          <div className="absolute inset-x-0 bottom-0 z-20 h-[300px] bg-gradient-to-t from-black via-transparent to-transparent" />
          <Image src={Banner} alt="banner" className="z-10 h-[300px] w-full select-none object-cover object-center" />
          <h1 className="absolute inset-x-0 bottom-[30px] z-30 text-center text-4xl font-semibold lg:left-[30px] lg:right-auto lg:text-6xl">
            {t('service.title')}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
          <div className="w-full px-10 lg:px-0">
            <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
          </div>
          <SlideDown>
            <div className="space-y-4 px-4 py-6 lg:px-0">
              <Card filteredService={filteredService} />
            </div>
          </SlideDown>
        </div>
      </div>
    </Fade>
  )
}

export default Service
