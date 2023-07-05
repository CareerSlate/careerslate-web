import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSchools } from "../store/schoolSlice"

const useFetchSchools = () => {
  const [serverError, setServerError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("api/schools")
        const jsonData = await response.json()
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
