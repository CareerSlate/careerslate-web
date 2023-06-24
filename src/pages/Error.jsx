import { Link, useRouteError } from "react-router-dom"
import style from "../style"
import { errorImg } from "../utils/constants"

const Error = () => {
  const error = useRouteError()
  // console.log("error.status: ", error.status)
  // console.log("error.statusText: ", error.statusText)
  // console.log("error.error.message: ", error.error.message)
  return (
    <div data-testid="error-container" className="w-full h-full min-h-[600px] flex justify-center items-center">
      <div className={`${style.boxWidth} ${style.paddingX} py-10 w-screen h-full flex flex-col justify-center lg:flex-row lg:items-center gap-10`}>
        <div className="w-full md:w-[80%] lg:w-[60%]  ">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl pb-4">Ooh! Looks like someone’s in trouble...</h1>
          <h3 className="text-base sm:text-lg pb-4 text-slate-700 max-w-[80%]">The page you are looking for was moved, removed, renamed or might never existed.</h3>
          <p className="text-sm sm:text-base pb-4 text-slate-500">
            Error {error.status} | {error.statusText}{" "}
          </p>
          <Link to="/" className="inline-block bg-red-500 text-white text-sm px-3 py-2 sm:text-base  sm:px-4 md:py-3 rounded-md hover:bg-red-600">
            Go to HomePage
          </Link>
        </div>

        <div className="w-full lg:w-[40%] flex justify-end">
          <img src={errorImg.img} alt={errorImg.alt} className="w-[70%] lg:w-[100%] object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Error
