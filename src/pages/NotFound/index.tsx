import { useNavigate } from 'react-router-dom'
import { BASE_PATH } from '../../constants/routes'
import { useEffect } from 'react'

const NotFound: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'BAS | Not Found'
  }, [])

  return (
    <>
      <div className="flex w-full grow items-center justify-center bg-background">
        <div className="text-center text-white">
          <h1 className="text-3xl">Oops! That page can’t be found.</h1>
          <p className="mt-4">It looks like nothing was found at this location.</p>
          <div className="mt-10 flex flex-row justify-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="rounded-lg bg-primary-600 px-4 py-2 transition-colors duration-200 hover:bg-primary-700"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => navigate(BASE_PATH, { replace: true })}
              className="rounded-lg bg-white px-4 py-2 text-black transition-colors duration-200 hover:bg-gray-200"
            >
              กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
