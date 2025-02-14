import { Mosaic } from 'react-loading-indicators'

const LoadingPage: React.FC = (): JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Mosaic color="#3c883c" size="small" />
    </div>
  )
}

export default LoadingPage
