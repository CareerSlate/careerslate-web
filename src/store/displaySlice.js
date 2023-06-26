import { createSlice } from "@reduxjs/toolkit"

const displaySlice = createSlice({
  name: "display",
  initialState: {
    displaySchools: []
  },
  reducers: {
    setDisplaySchools: (state, action) => {
      state.displaySchools = action.payload
    },
    resetDisplaySchools: state => {
      state.displaySchools = action.payload
    }
  }
})

export const { setDisplaySchools, resetDisplaySchools } = displaySlice.actions
export default displaySlice.reducer
