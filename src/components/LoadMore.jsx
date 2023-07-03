import { useDispatch } from "react-redux"
import { loadDisplaySchools } from "../store/schoolSlice"
import { BsArrowDownUp } from "react-icons/bs"

const LoadMore = () => {
  const dispatch = useDispatch()

  function handleLoadMore() {
    dispatch(loadDisplaySchools())
  }
  return (
    <div className="w-full my-4 py-6 bg-white border rounded-sm shadow-lg flex justify-center items-center  ">
      <button data-testid="loadmore" onClick={handleLoadMore} className="px-4 py-2 rounded-md font-medium whitespace-nowrap flex gap-2 justify-center  items-center capitalize text-secondary border border-secondary hover:bg-secondary hover:text-white ">
        Load More
        <BsArrowDownUp />
      </button>
    </div>
  )
}

export default LoadMore
