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
