import Showcase from './components/Showcase'
import { useTranslation } from 'react-i18next'
import companyPDF from 'src/data/pdf/project-referrenceBAS.pdf'
import SlideDown from '../Utils/animation/SlideDown'
import { AnimatePresence } from 'framer-motion'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { getProjects, IProject } from '../../lib/project'

const Project: React.FC = (): JSX.Element => {
  const [projects, setProject] = useState<IProject[]>([])
  const { t } = useTranslation()

  const fetchProjects = async () => {
    const res = await Promise.all(getProjects)
    setProject(res)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className="bg-background px-0 md:px-10">
      <div className="relative rounded-xl bg-[url('assets/project-bg.png')] bg-cover bg-center bg-no-repeat pb-10 sm:pb-0">
        <h1 className="pl-0 pt-20 text-center text-3xl font-bold text-white lg:text-4xl xl:pl-20 xl:text-left xl:text-5xl">
          {t('home.project.title')}
        </h1>
        <p className="p-10 text-center text-white xl:px-20 xl:text-left">{t('home.project.specializes')}</p>
        <AnimatePresence>
          <div className="flex flex-row flex-wrap justify-center gap-4 px-4">
            {projects.map((project: IProject, i: number) => (
              <SlideDown key={i} durationOffset={i}>
                <Showcase
                  image={project.image}
                  title={project.title}
                  contractValue={project.contractValue}
                  systems={project.systems}
                />
              </SlideDown>
            ))}
          </div>
        </AnimatePresence>
        <div className="mt-10 pb-10 text-center lg:mr-10 lg:text-right">
          <a href={companyPDF} target="_blank" rel="noopener noreferrer">
            <button className="rounded-full border border-white/20 bg-primary-600/20 px-4 py-2 text-white transition-colors duration-200 hover:bg-primary-600">
              {t('home.project.button')}
              <FiArrowRightCircle className="ml-2 inline-block size-[25px]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
