import { createSlice } from "@reduxjs/toolkit"

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    schoolList: []
    // displaySchoolList: []
  },
  reducers: {
    addSchools: (state, action) => {
      state.schoolList = action.payload
      // state.displa ySchoolList = action.payload
    }
    // setDisplaySchools: (state, action) => {
    //   state.displaySchoolList = action.payload
    // },
    // resetDisplaySchools: state => {
    //   state.displaySchoolList = state.schoolList
    // }
  }
})

// export const { addSchools, setDisplaySchools, resetDisplaySchools } = schoolSlice.actions
export const { addSchools } = schoolSlice.actions
export default schoolSlice.reducer
