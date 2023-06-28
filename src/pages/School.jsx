import { useSelector } from "react-redux"
import { SchoolCard, Search, BreadCrumb, Intro, Sort, LoadMore, Filter, BackToTop, BottomFilterSortButton } from "../components"
import useFetchSchools from "../utils/useFetchSchools"
import { sortOptions, filterMenu, introDetail, breadCrumbOptions } from "../utils/constants"
import style from "../style"

const School = () => {
  const { serverError } = useFetchSchools()
  if (serverError) {
    console.log("serverError: ", serverError)
  }

  const totalSchoolCount = useSelector(store => store.school.totalSchoolCount)
  const schoolCount = useSelector(store => store.school.schoolCount)
  const displayIndex = useSelector(store => store.school.displayIndex)
  const displaySchools = useSelector(store => store.school.displaySchools)

  if (totalSchoolCount === 0) {
    return "...Loading"
  }
  return (
    <section id="school" className={`w-full bg-slate-200/40 relative`}>
      <Search />

      <BreadCrumb options={breadCrumbOptions} />

      <Intro intro={introDetail} />

      {/* schools */}
      <div className={`w-full ${style.flexStart}`}>
        <div className={`${style.boxWidth}  ${style.marginX} flex justify-between items-start gap-4 py-4`}>
          {/* filter menu*/}
          <Filter filterMenu={filterMenu} />

          <main className="bg-whit flex-1  py-4 rounded-sm flex flex-col gap-2">
            {/* school menu */}
            <div className="flex justify-between items-center pb-2">
              <h3 className="font-semibold">{schoolCount} schools found</h3>
              <Sort sortOptions={sortOptions} />
            </div>

            {/* school list */}
            <div className="flex flex-col gap-5">
              {displaySchools?.map(schoolData => {
                return <SchoolCard key={schoolData.aff_no} schoolData={schoolData} />
              })}
            </div>

            {/* Load More */}
            {displayIndex < schoolCount && <LoadMore />}
          </main>
        </div>
      </div>

      {/* fixed bottom menu */}
      <div className={`fixed left-0 bottom-6  z-10 w-full ${style.flexStart} bg-transparent`}>
        <div className={`${style.boxWidth} mx-6 flex justify-between lg:justify-end items-center `}>
          {/* mobile version - filter & sort */}
          <BottomFilterSortButton />

          {/* fixed - back to top */}
          <BackToTop linkId={"school"} />
        </div>
      </div>
    </section>
  )
}

export default School
