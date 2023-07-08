//  function to sort schools
export function sortSchool(schools, sortOption) {
  try {
    const compareFun = {
      "A to Z": (a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        return nameA < nameB ? -1 : 1
      },
      "Z to A": (a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        return nameA === nameB ? 0 : nameA < nameB ? 1 : -1
      },
      Relevance: (a, b) => {
        //   return a.rating - b.rating || a.name.localeCompare(b.name)
        return b.year_found - a.year_found || a.n_school_type.localeCompare(b.n_school_type) || a.name.localeCompare(b.name)
      },
      Rating: (a, b) => a.rating - b.rating
    }
    return schools.slice().sort(compareFun[sortOption])
  } catch (error) {
    console.log("Error: ", error)
  }
}

//  function to filter schools
export function filterSchool(schools, filterOption) {
  try {
    // if filteroption object is empty, return
    const filterOptionKeys = Object.keys(filterOption)
    if (filterOptionKeys.length === 0) return schools

    const schoolKeyMap = {
      "Boards / Curriculum": "board",
      Classification: "n_category",
      "Management Type": "n_school_type",
      Medium: "n_medium",
      state: "state",
      "School Level": "status"
    }

    /* 
    - Remove filterOption keys whose values are empty &
    - Convert filterOption "values" from array to "lowercase string"
    - Modify keys of "filterOption" as per "school" keys &
    */
    const filtersOptionsLowerCase = {}
    filterOptionKeys.forEach(key => {
      if (filterOption[key].length > 0) {
        const renamedFilterKey = schoolKeyMap[key]
        filtersOptionsLowerCase[renamedFilterKey] = filterOption[key]?.toString().toLowerCase()
      }
    })

    // if filteroption object has keys, but there values are empty, return
    if (Object.keys(filtersOptionsLowerCase).length === 0) return schools

    // filter school on the basis of filterOption
    const filteredSchool = schools.filter(school => {
      return Object.keys(filtersOptionsLowerCase).some(key => {
        return filtersOptionsLowerCase[key]?.includes(school[key]?.toLowerCase())
      })
    })

    return filteredSchool
  } catch (error) {
    console.log("Error: ", error)
  }
}

export function searchSchool(schools, searchText) {
  return schools.filter(school => {
    return school?.name?.split(" ")[0]?.toLowerCase()?.includes(searchText.toLowerCase())
  })
}

//  function to get random image name
export function getImage(prefix, start, end) {
  return prefix + Math.floor(start + Math.random() * (end - start + 1))
}

// extract school info
export function extractSchoolInfo(schoolData) {
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

  return { board, facilitiesOptions, images }
}
