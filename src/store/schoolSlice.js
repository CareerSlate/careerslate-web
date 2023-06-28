import { createSlice } from "@reduxjs/toolkit"
import { DISPLAY_SCHOOL_OFFSET } from "../utils/constants"

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    totalSchools: [],
    totalSchoolCount: 0,
    schools: [],
    schoolCount: 0,
    displaySchools: [],
    displayIndex: 0
  },
  reducers: {
    setSchools: (state, action) => {
      try {
        state.totalSchools = action.payload
        state.totalSchoolCount = action.payload.length
        state.schools = action.payload
        state.schoolCount = action.payload.length

        state.displaySchools = action.payload.slice(0, DISPLAY_SCHOOL_OFFSET)
        state.displayIndex = DISPLAY_SCHOOL_OFFSET
      } catch (error) {
        console.log("Error[Redux]: ", error)
      }
    },
    updateSchools: (state, action) => {
      try {
        state.schools = action.payload
        state.schoolCount = action.payload.length
      } catch (error) {
        console.log("Error[Redux]: ", error)
      }
    },
    loadDisplaySchools: (state, action) => {
      try {
        const sch = state.schools.slice(state.displayIndex, state.displayIndex + DISPLAY_SCHOOL_OFFSET)
        state.displayIndex = state.displayIndex + DISPLAY_SCHOOL_OFFSET
        state.displaySchools = state.displaySchools.concat(sch)
        // TODO: if display school exceed 50, then splice the display array.
      } catch (error) {
        console.log("Error[Redux]: ", error)
      }
    },
    resetDisplaySchools: state => {
      try {
        state.displaySchools = state.schools.slice(0, DISPLAY_SCHOOL_OFFSET)
        state.displayIndex = DISPLAY_SCHOOL_OFFSET
      } catch (error) {
        console.log("Error[Redux]: ", error)
      }
    }
  }
})

export const { setSchools, updateSchools, loadDisplaySchools, resetDisplaySchools } = schoolSlice.actions
export default schoolSlice.reducer
