import { useEffect, useState } from "react"
// import { API_FETCH_SCHOOLS } from "../utils/requests"
import { SCHOOL_DETAIL } from "../utils/config"

import { useDispatch } from "react-redux"
import { setSchools } from "../store/schoolSlice"

const useFetchSchools = () => {
  // console.log("useFetchSchools ran ...")
  const [serverError, setServerError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("useFetchSchools:useEffect also ran ...")
    const fetchSchools = async () => {
      try {
        // const response = await fetch(API_FETCH_SCHOOLS)
        // const jsonData = await response.json()
        const jsonData = SCHOOL_DETAIL
        dispatch(setSchools(jsonData))
      } catch (error) {
        console.log("serverError: ", serverError)
        setServerError(error.message)
      }
    }
    fetchSchools()
  }, [])

  return { serverError }
}

export default useFetchSchools
