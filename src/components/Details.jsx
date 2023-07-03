import { useParams } from "react-router-dom"
import { SCHOOL_SEARCH } from "../__test__/mocks/mockDataSearch"
import Info from "./Info"
import FacilitiesCard from "./FacilitiesCard"
import { MdLocationOn } from "react-icons/md"
import * as galleryImg from "../assets/gallery"
import { getImage } from "../utils/helper"

const Details = ({ schoolData }) => {
  const { id } = useParams()

  schoolData = SCHOOL_SEARCH[id]
  const { aff_no, name, soc_name, address, district, region, state, pincode, n_medium, n_school_type, n_category, status, year_found, princi_name, ph_no, off_ph_no, email, website, p_area_meter, p_area_acre, p_area_playground, p_health_cert } = schoolData
  const { i_classrooms_no, i_composite_lab_no, i_phy_lab_no, i_chem_lab_no, i_bio_lab_no, i_biotech_lab_no, i_math_lab_no, i_cs_lab_no, i_home_lab_no, i_other_lab_no } = schoolData
  const { f_hostel, p_potable_water, i_library_no, f_swimming_pool, f_indoor_games, f_dance_rooms, f_music_rooms, f_health_checkup } = schoolData
  const board = "CBSE"
  const facilitiesOptions = [
    {
      title: "infrastructure",
      options: [
        { name: "hostel", value: f_hostel },
        { name: "AC hostels", value: false },
        { name: "Sports Academy", value: false },
        { name: "Cafeteria", value: false },
        { name: "Drinking Water", value: true },
        { name: "Toilet facilities", value: true },
        { name: "library", value: i_library_no },
        { name: "Gymnasium", value: false },
        { name: "Symposium", value: false },
        { name: "Play Area", value: true },
        { name: "health checkup", value: f_health_checkup },
        { name: "Interactive Boards", value: false },
        { name: "Wi-Fi", value: false }
      ]
    },
    {
      title: "sport & fitness",
      options: [
        { name: "swimming pool", value: f_swimming_pool },
        { name: "indoor games", value: f_indoor_games },
        { name: "yoga activity", value: false },
        { name: "dance rooms", value: f_dance_rooms },
        { name: "music rooms", value: f_music_rooms },
        { name: "aerobics", value: false }
      ]
    },
    {
      title: "facilities",
      options: [
        { name: "Counseling", value: false },
        { name: "robotics labs", value: false },
        { name: "composite lab", value: i_composite_lab_no },
        { name: "physic lab", value: i_phy_lab_no },
        { name: "chemistry lab", value: i_chem_lab_no },
        { name: "biology lab", value: i_bio_lab_no },
        { name: "biotech lab", value: i_biotech_lab_no },
        { name: "math lab", value: i_math_lab_no },
        { name: "CS lab", value: i_cs_lab_no },
        { name: "digital lab", value: false }
      ]
    }
  ]

  const images = Array(4)
    .fill("")
    .map((e, index) => {
      return { id: index, url: getImage("img", 1, 9) }
    })
  // console.log("img: ", img)

  return (
    <div>
      {/* School Summary */}
      <div id="summary" className="bg-white px-4 py-6 rounded-md shadow-md">
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
      <div id="information" className="my-6 bg-white px-4 py-6 rounded-md shadow-md">
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
      <div id="facilities" className="my-6 bg-white px-4 py-6 rounded-md shadow-md">
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
      <div id="location" className="my-6 bg-white px-4 py-6 rounded-md shadow-md">
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
              {state?.toLowerCase()}
            </p>
          </div>
          {/* google map */}
          {/* <iframe className="w-full h-[250px]" src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112260.56798918646!2d76.94301588041941!3d28.44511292070949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a942b79d9b%3A0x1347dbfad493a7d3!2s${district}%2C%20${state}%20${pincode}!5e0!3m2!1sen!2sin!4v1688207319032!5m2!1sen!2sin`}></iframe> */}
        </div>
      </div>

      {/* Gallery */}
      <div id="gallery" className="my-6 bg-white px-4 py-6 rounded-md shadow-md">
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
