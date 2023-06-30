import { useNavigate } from "react-router-dom"
import Button from "./Button"

const ServerError = () => {
  const navigate = useNavigate()

  function handleRetry() {
    navigate("/")
  }
  return (
    <div className="fixed top-0 left-0 z-[1000] w-full h-screen flex justify-center items-center pt-[100px] bg-black/50 text-white">
      <div className="p-6 flex flex-col items-start items-center justify-center gap-6">
        <h3 className="text-2xl font-semibold capitalize">Failed to load the data. Try Again Later.</h3>
        <Button name="Retry" handleClick={() => handleRetry()} style="  px-4 py-2 font-medium text-base uppercase " />
        {/* <button onClick={handleRetry} className="px-5 py-2 rounded-md bg-secondary text-white hover:bg-primary">
          Retry
        </button> */}
      </div>
    </div>
  )
}

export default ServerError
