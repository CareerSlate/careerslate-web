import { useEffect, useState } from "react"
import style from "../style"
import { searchSchool } from "../utils/helper"
import { useDispatch, useSelector } from "react-redux"
import { updateSchools, resetDisplaySchools } from "../store/schoolSlice"
import { Link } from "react-router-dom"
import { setSearchCache } from "../store/searchCacheSlice"

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const [searchFocus, setSearchFocus] = useState(false)

  const dispatch = useDispatch()
  const displaySchool = useSelector(store => store.school.displaySchools)
  const schools = useSelector(store => store.school.totalSchools)
  const searchCache = useSelector(store => store.search.searchCache)

  useEffect(() => {
    /* debouncing 200ms */
    const timer = setTimeout(() => {
      let searchedSchool
      if (searchCache[searchText]) {
        /* first check in cache */
        searchedSchool = searchCache[searchText]
      } else {
        /* if data not found, the call API */
        searchedSchool = searchSchool(schools, searchText)
        dispatch(setSearchCache({ [searchText]: searchedSchool }))
      }
      dispatch(updateSchools(searchedSchool))
      dispatch(resetDisplaySchools())
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchText])

  return (
    <div data-testid="search" className={`w-full ${style.flexStart} bg-primary `}>
      <div className={`${style.boxWidth}  ${style.marginX} py-6 flex flex-col justify-center items-center`}>
        <div className="w-full lg:w-[70%] relative">
          <input type="search" name="school" value={searchText} onChange={e => setSearchText(e.target.value)} onFocus={() => setSearchFocus(true)} placeholder="search schools by name ..." autoComplete="off" className="w-full py-4 px-8 rounded-md capitalize" />
          <div className={`${(!searchText || !searchFocus) && "hidden "} absolute w-full z-[300] left-0 top-0 mt-14  bg-white rounded-md p-4 shadow-2xl`}>
            {displaySchool?.length === 0 ? (
              <div className="w-full flex justify-center text-red-500">No Match Found</div>
            ) : (
              <ul>
                {displaySchool?.map(school => {
                  return (
                    <Link to={`/school/${school?.aff_no}`} key={school?.aff_no} onClick={() => setSearchFocus(false)}>
                      <li className="p-2 border-b hover:text-blue-600  hover:bg-slate-200">{school.name}</li>
                    </Link>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
