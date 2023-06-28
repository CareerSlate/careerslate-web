import { useDispatch } from "react-redux"
import { loadDisplaySchools } from "../store/schoolSlice"

const LoadMore = () => {
  const dispatch = useDispatch()

  function handleLoadMore() {
    dispatch(loadDisplaySchools())
  }
  return (
    <div className="w-full my-4 py-6 bg-white border rounded-sm shadow-lg flex justify-center items-center  ">
      <button onClick={handleLoadMore} className="px-4 py-2  rounded-sm capitalize text-secondary border border-secondary hover:bg-secondary hover:text-white ">
        Load More
      </button>
    </div>
  )
}

export default LoadMore
