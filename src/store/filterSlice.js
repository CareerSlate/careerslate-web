import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isFilterOpen: false,
    filterOption: {}
  },
  reducers: {
    setIsFilterOpen: state => {
      try {
        state.isFilterOpen = !state.isFilterOpen
      } catch (error) {
        console.log("Error[Redux]: ", error)
      }
    },
    addFilterOption: (state, action) => {
      try {
        const key = action.payload[0],
          value = action.payload[1]
        state.filterOption[key] ? state.filterOption[key]?.push(value) : (state.filterOption[key] = [value])
      } catch (error) {
        console.log("Error [Redux]: ", error)
      }
    },
    removeFilterOption: (state, action) => {
      try {
        const key = action.payload[0],
          value = action.payload[1],
          index = state.filterOption[key]?.indexOf(value)
        if (state.filterOption[key]) {
          state.filterOption[key].splice(index, 1)
        }
      } catch (error) {
        console.log("Error [Redux]: ", error)
      }
    },
    resetFilterOption: state => {
      try {
        state.filterOption = {}
      } catch (error) {
        console.log("Error [Redux]: ", error)
      }
    }
  }
})

export const { setIsFilterOpen, addFilterOption, removeFilterOption, resetFilterOption } = filterSlice.actions
export default filterSlice.reducer
