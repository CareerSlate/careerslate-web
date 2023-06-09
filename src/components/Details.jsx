import Info from "./Info"
import FacilitiesCard from "./FacilitiesCard"
import * as galleryImg from "../assets/gallery"
import { MdLocationOn } from "react-icons/md"
import { extractSchoolInfo } from "../utils/helper"

const Details = ({ schoolInfo }) => {
  const { name, soc_name, address, district, region, state, pincode, n_medium, n_school_type, n_category, status, year_found, princi_name, ph_no, off_ph_no, email, website, p_area_meter, p_area_acre, p_area_playground, p_health_cert } = schoolInfo
  const { board, facilitiesOptions, images } = extractSchoolInfo(schoolInfo)

  return (
    <div>
      {/* School Summary */}
      <div id="summary" className="bg-white px-4 py-6 rounded-md shadow-md scroll-mt-20">
        {/* heading */}
        <h1 className="pb-0.5 font-bold text-2xl capitalize text-secondary hover:text-primary">{name ? name?.toLowerCase() : "N/A"}</h1>
        <h3 className="capitalize">
          {district && `${district?.toLowerCase()}, `} {region && `${region?.toLowerCase()}, `} {state?.toLowerCase()}
        </h3>
        {/* detail */}
        <div className="pt-4 flex flex-col gap-0.5">
          <Info label="category" info={status} labelStyle="lg:!w-[30%]" />
          <Info label="phone" href={`tel:${off_ph_no}`} info={`${"9876".includes(off_ph_no?.slice(0, 1)) ? " +91" : ph_no} ${off_ph_no}`} labelStyle="lg:!w-[30%]" />
          <Info label="email" href={`mailto:${email ? email?.toLowerCase() : ""}`} info={email} labelStyle="lg:!w-[30%]" />
          <Info label="website" href={website ? website?.toLowerCase() : ""} info={website} labelStyle="lg:!w-[30%]" />
          <Info label="principle" info={princi_name} labelStyle="lg:!w-[30%]" />
        </div>
      </div>

      {/* School Information */}
      <div id="information" className="my-6 bg-white px-4 py-6 rounded-md shadow-md scroll-mt-20">
        {/* heading */}
        <div className="relative">
          <h2 className="font-bold text-2xl text-primary relative">School Information</h2>
          <div className="absolute top-0 left-[-16px] bg-secondary w-1 h-7" />
        </div>
        {/* details */}
        <div className="w-full pt-3 grid grid-cols-1 lg:grid-cols-2 gap-0.5">
          <Info label="since" info={year_found} />
          <Info label="board" info={board} infoStyle="!uppercase" />
          <Info label="Classification" info={n_category} />
          <Info label="Medium" info={n_medium} />
          <Info label="School Level" info={status} />
          <Info label="Management" info={n_school_type} />
          <Info label="Campus Area" info={p_area_playground && `${p_area_meter?.toLowerCase()} Sq.Meter`} />
          <Info label="Playground Area" info={p_area_playground && `${p_area_playground?.toLowerCase()} Sq.Meter`} />
          <Info label="Parent Institute" info={soc_name} containerStyle="lg:col-span-2" labelStyle="lg:!w-[15%]" />
        </div>
      </div>

      {/* Facilities & Activites */}
      <div id="facilities" className="my-6 bg-white px-4 py-6 rounded-md shadow-md scroll-mt-20">
        {/* heading */}
        <div className="relative">
          <h2 className="font-bold text-2xl text-primary relative">Facilities & Activites</h2>
          <div className="absolute top-0 left-[-16px] bg-secondary w-1 h-7" />
        </div>
        {/* details */}
        {facilitiesOptions.map(facilities => {
          return <FacilitiesCard key={facilities.title} facilities={facilities} />
        })}
      </div>

      {/* Location */}
      <div id="location" className="my-6 bg-white px-4 py-6 rounded-md shadow-md scroll-mt-20">
        {/* heading */}
        <div className="relative">
          <h2 className="font-bold text-2xl text-primary relative">Location</h2>
          <div className="absolute top-0 left-[-16px] bg-secondary w-1 h-7" />
        </div>
        {/* location */}
        <div className="py-4">
          <div className="pb-5 flex items-center gap-2">
            <span className=" text-blue-500">
              <MdLocationOn size={20} />
            </span>
            <p className="flex-1 capitalize ">
              {address && `${address?.toLowerCase()}, `}
              {district && `${district?.toLowerCase()}, `}
              {/* {region && `${region?.toLowerCase()}, `} */}
              {state && `${state?.toLowerCase()}, `}
              {pincode}
            </p>
          </div>
          {/* google map */}
          {/* <iframe className="w-full h-[250px]" src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112260.56798918646!2d76.94301588041941!3d28.44511292070949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a942b79d9b%3A0x1347dbfad493a7d3!2s${district}%2C%20${state}%20${pincode}!5e0!3m2!1sen!2sin!4v1688207319032!5m2!1sen!2sin`}></iframe> */}
        </div>
      </div>

      {/* Gallery */}
      <div id="gallery" className="my-6 bg-white px-4 py-6 rounded-md shadow-md scroll-mt-20">
        {/* heading */}
        <div className="relative">
          <h2 className="font-bold text-2xl text-primary relative">Gallery</h2>
          <div className="absolute top-0 left-[-16px] bg-secondary w-1 h-7" />
        </div>
        {/* images */}
        <div className="py-4">
          {images.length === 0 ? (
            <p className="text-slate-500">No Image Available</p>
          ) : (
            <div className="py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden ">
              {images.map(img => {
                return (
                  <div key={img.id} className="w-full h-[200px] ">
                    <img src={galleryImg[img.url]} alt="" className="w-full h-full object-cover" />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Details
