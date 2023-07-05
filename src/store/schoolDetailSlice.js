import { createSlice } from "@reduxjs/toolkit"

const SchoolDetailSlice = createSlice({
  name: "schoolDetail",
  initialState: {
    isSidebarOpen: false,
    activeMenuOption: "summary"
  },
  reducers: {
    setIsSidebarOpen(state) {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    setActiveMenuOption(state, action) {
      state.activeMenuOption = action.payload
    },
    resetActiveMenuOption(state, action) {
      state.activeMenuOption = "summary"
    }
  }
})

export const { setIsSidebarOpen, setActiveMenuOption, resetActiveMenuOption } = SchoolDetailSlice.actions
export default SchoolDetailSlice.reducer
