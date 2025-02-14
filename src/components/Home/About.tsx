import React from 'react'
import Image from '../Utils/Image'
import { useTranslation } from 'react-i18next'
import aboutImage from 'src/data/core/about-image.webp'
import IncreasingNumber from '../Utils/animation/IncreasingNumber'
import { AnimatePresence } from 'framer-motion'
import SlideDown from '../Utils/animation/SlideDown'
import SlideLeft from '../Utils/animation/SlideLeft'
import { calculateYears } from '../../lib/time'
import projectsData from '../../data/projects/project.json'

const About: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const year = calculateYears()

  const portfolioSummary: { topic: number; details: string }[] = [
    {
      topic: year,
      details: t('home.about.portfolio.experience'),
    },
    {
      topic: projectsData.successful,
      details: t('home.about.portfolio.project'),
    },
  ]

  const renderExperienceContent = portfolioSummary.map((item: { topic: number; details: string }, i: number) => (
    <div key={i} className="flex items-center gap-2 text-left">
      <IncreasingNumber number={item.topic} years={i === 0} />
      <p className="text-sm text-white lg:text-base" dangerouslySetInnerHTML={{ __html: item.details }} />
    </div>
  ))

  return (
    <AnimatePresence>
      <div className="min-h-screen gap-10 overflow-x-hidden bg-[url('assets/about-bg.png')] bg-cover bg-center bg-no-repeat p-10 md:py-0 md:text-left">
        <div className="mb-10 hidden flex-col justify-center gap-4 sm:flex-row md:mb-0 md:flex md:justify-start md:pt-20">
          {renderExperienceContent}
        </div>
        <div className="flex flex-row items-center justify-center md:min-h-[70vh]">
          <div className="flex flex-col justify-center gap-[50px] md:flex-row md:items-start">
            <div className="relative">
              <Image
                src={aboutImage}
                alt="image"
                className="pointer-events-none relative z-10 h-[400px] w-full select-none object-cover object-center md:size-[300px] lg:size-[400px]"
              />
              <div className="absolute -bottom-4 -right-4 h-[400px] w-full bg-[#61fa87]/50 md:size-[300px] lg:size-[400px]" />
            </div>
            <div className="text-sm md:w-1/2">
              <SlideDown>
                <h1 className="mb-6 text-3xl font-semibold text-primary-600 md:text-4xl lg:text-5xl">
                  {year.toFixed(0)} Years
                  <br />
                  <span className="text-white">of Experience!</span>
                </h1>
              </SlideDown>
              <SlideLeft>
                <p
                  className="text-md text-white md:text-lg"
                  dangerouslySetInnerHTML={{ __html: t('home.about.description') }}
                />
              </SlideLeft>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default About
