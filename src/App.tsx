import { Route, Routes, useLocation } from 'react-router-dom'
import { BASE_PATH, NOT_FOUND_PATH, SERVICE_PATH } from './constants/routes.ts'
import React, { Suspense } from 'react'
import LoadingPage from './pages/Loading/index.tsx'
import { AnimatePresence } from 'framer-motion'

const Home = React.lazy(() => import('./pages/Home'))
const Service = React.lazy(() => import('./pages/Service'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const Navbar = React.lazy(() => import('./components/Navbar'))
const Footer = React.lazy(() => import('./components/Footer'))

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className={`flex min-h-screen flex-col bg-background`}>
      <Suspense fallback={<LoadingPage />}>
        <Navbar />
        <AnimatePresence initial mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index path={BASE_PATH} element={<Home />} />

            <Route path={SERVICE_PATH} element={<Service />} />

            <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </Suspense>
    </div>
  )
}

export default App
