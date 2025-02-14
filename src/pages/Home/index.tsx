import React, { useEffect } from 'react'
import { scroller } from 'react-scroll'
import Hero from '../../components/Home/Hero'
import About from '../../components/Home/About'
import Contact from '../../components/Home/Contact'
import { useLocation } from 'react-router-dom'
import Project from '../../components/Home/Project'
import Service from '../../components/Home/Service'
import Fade from '../../components/Utils/animation/Fade'

const Home: React.FC = (): JSX.Element => {
  const location = useLocation()

  useEffect(() => {
    const hash = window.location.hash.substring(1)

    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        })
      }, 0)
    }
  }, [location])

  useEffect(() => {
    document.title = 'Building Advanced Solution'
  }, [])

  return (
    <Fade>
      <div id="home" className="pb-px"></div>
      <Hero />
      <div id="about" className="pb-px"></div>
      <About />
      <div id="service" className="pb-px"></div>
      <Service />
      <div id="project" className="pb-px"></div>
      <Project />
      <div id="contact" className="pb-px"></div>
      <Contact />
    </Fade>
  )
}

export default Home
