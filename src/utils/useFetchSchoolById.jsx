import { useEffect, useState } from "react"
import { getImage } from "../utils/helper"

const useFetchSchoolById = id => {
  const [schoolData, setSchoolData] = useState({})
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(`/api/schools/${id}`)
        const jsonData = await response.json()
        setSchoolData(jsonData)
      } catch (error) {
        console.log("serverError: ", serverError)
        setServerError(error.message)
      }
    }
    fetchSchools()
  }, [])

  const { i_composite_lab_no, i_phy_lab_no, i_chem_lab_no, i_bio_lab_no, i_biotech_lab_no, i_math_lab_no, i_cs_lab_no } = schoolData
  const { f_hostel, i_library_no, f_swimming_pool, f_indoor_games, f_dance_rooms, f_music_rooms, f_health_checkup } = schoolData
  const board = "CBSE"
  //   mock facilitiesOptions
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

  //   mock Images
  const images = Array(2)
    .fill("")
    .map((e, index) => {
      return { id: index, url: getImage("img", 1, 9) }
    })

  return { schoolData, board, facilitiesOptions, images, serverError }
}

export default useFetchSchoolById
