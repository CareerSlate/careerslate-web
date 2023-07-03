import { Link } from "react-router-dom"
// import { school } from "../assets"
import school from "../assets/campus.svg"
import { getImage } from "../utils/helper"
import * as schoolImg from "../assets/schools"

const SchoolCard = ({ schoolData }) => {
  // console.log(name)
  const { aff_no, name, region, district, pincode, state, status, n_medium, soc_name, year_found, princi_name, off_ph_no, n_school_type } = schoolData
  const board = "CBSE"
  const img = getImage("img", 1, 19)
  return (
    <div className="w-full border rounded-sm bg-white flex sm:flex-row flex-col justify-between shadow-md hover:shadow-xl ">
      {/* school image */}
      <div className="sm:w-[30%] m-4 border rounded-sm bg-slate-50  relative flex justify-center items-center group:">
        <Link to={`school/${aff_no}`} className="inline-block w-[100%] h-[100%] lg:max-h-[160px] overflow-hidden flex justify-center items-center">
          <img src={n_school_type === "Independent" ? schoolImg[img] : school} alt="" className="w-[100%] object-cover hover:scale-105" />
        </Link>
        {/* <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center">
          <p className="text-slate-50 text-sm border rounded-3xl opacity-90 p-2">Read More</p>
        </div> */}
      </div>

      {/* school detail */}
      <div className={"flex-1 p-4 "}>
        <Link to={`school/${aff_no}`}>
          <h3 data-testid="school-name" className="font-semibold text-lg text-primary hover:text-secondary capitalize">
            {name ? name?.toLowerCase() : "N/A"}
          </h3>
        </Link>
        <h4 className="capitalize">
          {district && district?.toLowerCase() + ", "}
          {state && state.toLowerCase() + ", "} India
        </h4>

        <div className="w-full pt-3 grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex items-start gap-2">
            <span className="w-[40%] xs:w-[30%] lg:w-[35%] xl:w-[30%]  text-slate-500">Category: </span>
            <p className="flex-1 capitalize ">{status ? status?.toLowerCase() : "N/A"}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-[40%] xs:w-[30%] lg:w-[25%] xl:w-[20%]  text-slate-500">Board: </span>
            <p className="flex-1 capitalize ">{board ? board : "N/A"}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-[40%] xs:w-[30%] lg:w-[35%] xl:w-[30%]  text-slate-500">Medium:</span>
            <p className="flex-1 capitalize ">{n_medium ? n_medium?.toLowerCase() : "N/A"}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-[40%] xs:w-[30%] lg:w-[25%] xl:w-[20%]  text-slate-500">Since:</span>
            <p className="flex-1 capitalize ">{year_found ? year_found : "N/A"}</p>
          </div>
        </div>

        <Link to={`school/${aff_no}`} className="inline-block mt-4 py-1 px-2  text-sm rounded-sm border text-primary  border-primary hover:text-white hover:bg-secondary hover:border-secondary  ">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default SchoolCard
