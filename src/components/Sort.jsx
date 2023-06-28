import { sortSchool } from "../utils/helper"
import { useSelector, useDispatch } from "react-redux"
import { updateSchools, resetDisplaySchools } from "../store/schoolSlice"

const Sort = ({ sortOptions }) => {
  const allSchools = useSelector(store => store.school.totalSchools)
  const dispatch = useDispatch()

  function handleSort(e) {
    const sortedSchools = sortSchool(allSchools, e.target.value)
    dispatch(updateSchools(sortedSchools))
    dispatch(resetDisplaySchools())
  }
  return (
    <form className={`flex items-center gap-2`}>
      <label htmlFor="sort">Sort By </label>
      <select name="sort" id="sort" onChange={handleSort} className="pl-2 pr-4 py-2 bg-white text-slate-800 outline-red-500 ">
        {sortOptions?.map(sortOption => {
          return (
            <option key={sortOption} value={sortOption}>
              {sortOption}
            </option>
          )
        })}
      </select>
    </form>
  )
}

export default Sort
