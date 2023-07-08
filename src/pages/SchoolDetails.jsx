import React from "react"
import { useDispatch } from "react-redux"
import { setActiveMenuOption, setIsSidebarOpen } from "../store/schoolDetailSlice"
import { BackToTop, BreadCrumb, DetailFixedMenu, DetailSideBar, Details, Search, Shimmer } from "../components"
import { breadCrumbOptions } from "../utils/constants"
import style from "../style"
import { ScrollRestoration } from "react-router-dom"

const SchoolDetails = () => {
  const dispatch = useDispatch()

  function handleSideBar() {
    dispatch(setIsSidebarOpen())
  }

  function handleFixedMenuOption() {
    dispatch(setActiveMenuOption("summary"))
  }

  if (false) {
    return <Shimmer />
  }

  return (
    <section id="school-detail" className={`w-full bg-slate-200/40 relative `}>
      <ScrollRestoration />
      <Search />
      <BreadCrumb options={breadCrumbOptions} />

      {/* school */}
      <div className={`w-full ${style.flexCenter}  flex-col relative`}>
        {/* fixed school menu */}
        <DetailFixedMenu />

        <main className={`${style.boxWidth} ${style.marginX}`}>
          <div className=" flex justify-between items-start gap-4 p-4">
            {/* school detail */}
            <div className="bg-whit flex-1  py-4 rounded-sm flex flex-col gap-2">
              <div className="flex flex-col gap-5">
                <Details />
              </div>
            </div>
            {/* side menu*/}
            <DetailSideBar />
          </div>
        </main>
      </div>

      {/* back to top  */}
      <div onClick={handleFixedMenuOption} className=" fixed  bottom-5 right-5 lg:right-10">
        <BackToTop linkId={"school-detail"} />
      </div>

      {/* mobile Inquiry form  */}
      <div className="fixed  bottom-5 left-5 lg:left-10">
        <div onClick={handleSideBar} className="lg:hidden z-10 bg-primary/70 text-white text-sm p-3 lg:p-3 rounded-full flex justify-center items-center">
          Inquiry
        </div>
      </div>
    </section>
  )
}

export default SchoolDetails
