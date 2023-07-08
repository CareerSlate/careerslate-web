import { createSlice } from "@reduxjs/toolkit"

const SchoolDetailSlice = createSlice({
  name: "schoolDetail",
  initialState: {
    isSidebarOpen: false,
    schoolInfo: {},
    activeMenuOption: "summary"
  },
  reducers: {
    setIsSidebarOpen(state) {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    setSchoolInfo(state, action) {
      state.schoolInfo = action.payload
    },
    setActiveMenuOption(state, action) {
      state.activeMenuOption = action.payload
    },
    resetActiveMenuOption(state, action) {
      state.activeMenuOption = "summary"
    }
  }
})

export const { setIsSidebarOpen, setSchoolInfo, setActiveMenuOption, resetActiveMenuOption } = SchoolDetailSlice.actions
export default SchoolDetailSlice.reducer
