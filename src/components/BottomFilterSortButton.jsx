import { useDispatch } from "react-redux"
import { setIsFilterOpen } from "../store/filterSlice"

const BottomFilterSortButton = () => {
  const dispatch = useDispatch()

  function handleFilterToggle() {
    dispatch(setIsFilterOpen())
  }
  return (
    <div className=" bg-primary/80 text-white rounded-3xl flex justify-center items-center gap-1 lg:hidden">
      <a href="#sort" className="pl-5 py-3 ">
        Sort
      </a>
      <span>/</span>
      <button onClick={handleFilterToggle} className="pr-5 py-3">
        Filter
      </button>
    </div>
  )
}

export default BottomFilterSortButton
