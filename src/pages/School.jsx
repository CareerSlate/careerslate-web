import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { SchoolCard, FilterCard } from "../components"
import useFetchSchools from "../utils/useFetchSchools"
import { filterOptions, sortOptions } from "../utils/constants"
import style from "../style"
import { BiSolidUpArrow } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

const School = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { serverError } = useFetchSchools()
  const displaySchools = useSelector(store => store.display.displaySchools)
  // console.log("displaySchools: ", displaySchools)

  if (serverError) {
    console.log("serverError: ", serverError)
  }

  if (displaySchools.length === 0) {
    return "...Loading"
  }

  const handleFilterToggle = () => {
    setIsFilterOpen(prev => !prev)
  }

  const handleSort = () => {
    alert("sort form")
    return
  }

  const handleLoadMore = () => {
    alert("load more")
    return
  }

  return (
    <section id="school" className={`w-full bg-slate-200/40 relative`}>
      {/* banner */}
      <div className={`w-full ${style.flexStart} bg-primary `}>
        <div className={`${style.boxWidth}  ${style.marginX} py-6 flex justify-center items-center`}>
          <input type="search" name="school" id="school-search" placeholder="search schools by name ..." className="py-4 px-8 w-[70%] rounded-md capitalize" />
        </div>
      </div>

      {/* bread crum */}
      <div className={`w-full ${style.flexStart} bg-white border-b`}>
        <div className={`${style.boxWidth}  ${style.marginX} p-3`}>
          <div className="flex gap-2 capitalize text-xs">
            <Link to="">home</Link>/<Link to="">schools</Link>/<Link to="">india</Link>/<Link to="">CBSE</Link>
          </div>
        </div>
      </div>

      {/* intro */}
      <div className={`w-full ${style.flexStart} bg-white`}>
        <div className={`${style.boxWidth}  ${style.marginX} py-10`}>
          <h1 className="font-bold text-3xl text-slate-800 pb-4">List of Top CBSE Schools in 2023 Ranking</h1>
          <p className="leading-[25px]">Checkout list of Top CBSE Schools in 2023 offering CBSE board curriculum. Find below the complete list of CBSE Schools in offering CBSE Curriculum with information on Fees, Admission procedure, Ranking, Rating & Reviews, Curriculum, Facilities, Contact Details and address. This list of Top Best CBSE Schools in covers CBSE affiliated Schools in .</p>
        </div>
      </div>

      {/* schools */}
      <div className={`w-full ${style.flexStart}`}>
        <div className={`${style.boxWidth}  ${style.marginX} flex justify-between items-start gap-4 py-4`}>
          {/* filter menu*/}
          <aside className={`${isFilterOpen ? "block" : "hidden lg:flex"} fixed lg:relative top-0 right-0 z-[100] w-full lg:w-[25%] h-screen lg:h-auto bg-black/50 flex justify-end`}>
            <div className="w-[100%] sm:w-[60%] lg:w-full h-full lg:h-auto p-5 rounded-sm bg-white flex flex-col">
              {/* filter heading */}
              <div className="w-full pb-2 mb-2  border-b flex justify-between items-center">
                <h3 className="font-semibold ">Filters</h3>
                <div>
                  <button className="hidden lg:block px-2 py-1 text-sm border border-primary hover:text-white hover:bg-secondary hover:border-secondary">Reset All</button>
                  <span onClick={handleFilterToggle} className="lg:hidden">
                    <AiOutlineClose size={28} />
                  </span>
                </div>
              </div>
              {/* filter form */}
              <form className="flex flex-col gap-4 overflow-scroll lg:overflow-hidden">
                {filterOptions?.map(filterOption => {
                  return <FilterCard key={filterOption.id} {...filterOption} />
                })}
              </form>
              {/* submit form */}
              <div className="pt-4 flex items-center gap-4 lg:hidden">
                <button className="px-2 py-1 text-sm border border-primary hover:text-white hover:bg-secondary hover:border-secondary">Reset All</button>
                <button className="px-2 py-1 text-sm border hover:border-primary hover:bg-primary text-white bg-secondary border-secondary">Submit</button>
              </div>
            </div>
          </aside>

          <main className="bg-whit flex-1  py-4 rounded-sm flex flex-col gap-2">
            {/* sort menu */}
            <div className="flex justify-between items-center pb-2">
              <h3 className="font-semibold">2562 schools found</h3>
              {/* sort */}
              <form className={`flex items-center gap-2`}>
                <label htmlFor="sort">Sort By </label>
                <select name="" id="sort" onChange={handleSort} className="pl-2 pr-4 py-2 bg-white text-slate-800 outline-red-500 ">
                  {sortOptions?.map(sortOption => {
                    return (
                      <option key={sortOption} value={sortOption}>
                        {sortOption}
                      </option>
                    )
                  })}
                </select>
              </form>
            </div>

            {/* school list */}
            <div className="flex flex-col gap-5">
              {displaySchools?.map(schoolData => {
                return <SchoolCard key={schoolData.aff_no} schoolData={schoolData} />
              })}
            </div>

            {/* Load More */}
            <div className="w-full my-4 py-6 bg-white border rounded-sm shadow-lg flex justify-center items-center  ">
              <button onClick={handleLoadMore} className="px-4 py-2  rounded-sm capitalize text-secondary border border-secondary hover:bg-secondary hover:text-white ">
                Load More
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* fixed bottom menu */}
      <div className={`fixed left-0 bottom-6  z-10 w-full ${style.flexStart} bg-transparent`}>
        <div className={`${style.boxWidth} mx-6 flex justify-between lg:justify-end items-center `}>
          {/* mobile version - filter & sort */}
          <div className=" bg-primary/80 text-white rounded-3xl flex justify-center items-center gap-1 lg:hidden">
            <a href="#sort" className="pl-5 py-3 ">
              Sort
            </a>
            <span>/</span>
            <button onClick={handleFilterToggle} className="pr-5 py-3">
              Filter
            </button>
          </div>
          {/* fixed - back to top */}
          <a href="#school">
            <div className="z-10 bg-primary/70 text-white text-xl p-3 lg:p-3 rounded-full flex justify-center items-center">
              <BiSolidUpArrow />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default School
