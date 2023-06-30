import Button from "./Button"

import { useSelector, useDispatch } from "react-redux"
import { resetDisplaySchools, updateSchools } from "../store/schoolSlice"
import { setIsFilterOpen, resetFilterOption } from "../store/filterSlice"

import FilterCard from "./FilterCard"
import { filterSchool } from "../utils/helper"
import { AiOutlineClose } from "react-icons/ai"

const Filter = ({ filterMenu }) => {
  const dispatch = useDispatch()
  const totalSchools = useSelector(store => store.school.totalSchools)
  const isFilterOpen = useSelector(store => store.filter.isFilterOpen)
  const filterOption = useSelector(store => store.filter.filterOption)

  function handleFilterToggle() {
    dispatch(setIsFilterOpen())
  }

  function handleFilter(e) {
    const filteredSchools = filterSchool(totalSchools, filterOption)
    dispatch(updateSchools(filteredSchools))
    dispatch(resetDisplaySchools())
    dispatch(setIsFilterOpen())
  }

  function resetFilter() {
    dispatch(resetFilterOption())
    dispatch(updateSchools(totalSchools))
    dispatch(resetDisplaySchools())
    dispatch(setIsFilterOpen())
  }

  return (
    <aside className={`${isFilterOpen ? "block" : "hidden lg:flex"} fixed lg:relative top-0 right-0 z-[100] w-full lg:w-[25%] h-screen lg:h-auto bg-black/50 flex justify-end shadow-sm `}>
      <div className="w-[100%] sm:w-[60%] lg:w-full h-full lg:h-auto p-5 rounded-sm bg-white flex flex-col ">
        {/* filter heading */}
        <div className="w-full pb-2 mb-2  border-b flex justify-between items-center">
          <h3 className="font-semibold ">Filters</h3>
          <div data-testid="filter-buttons" className="lg:flex lg:items-center lg:gap-2 ">
            <Button name="Reset" handleClick={resetFilter} isLightTheme={true} style=" hidden lg:block " />
            <Button name="Submit" handleClick={handleFilter} style=" hidden lg:block " />
            <span onClick={handleFilterToggle} className="lg:hidden">
              <AiOutlineClose size={28} />
            </span>
          </div>
        </div>
        {/* filter form */}
        <form className="flex flex-col gap-4 overflow-scroll lg:overflow-hidden scrollbar-hide">
          {filterMenu?.map(filterOption => {
            return <FilterCard key={filterOption.id} {...filterOption} />
          })}
        </form>
        {/* submit form */}
        <div className="pt-4 flex items-center gap-4 lg:hidden">
          <Button name="Reset" handleClick={resetFilter} isLightTheme={true} />
          <Button name="Submit" handleClick={handleFilter} />
        </div>
      </div>
    </aside>
  )
}

export default Filter
