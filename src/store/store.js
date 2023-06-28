import { configureStore } from "@reduxjs/toolkit"
import schoolSlice from "./schoolSlice"
import filterSlice from "./filterSlice"

const store = configureStore({
  reducer: {
    school: schoolSlice,
    filter: filterSlice
  }
})

export default store
