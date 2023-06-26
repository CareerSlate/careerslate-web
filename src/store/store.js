import { configureStore } from "@reduxjs/toolkit"
import schoolSlice from "./schoolSlice"
import displaySlice from "./displaySlice"

const store = configureStore({
  reducer: {
    school: schoolSlice,
    display: displaySlice
  }
})

export default store
