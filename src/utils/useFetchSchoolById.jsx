import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSchoolInfo } from "../store/schoolDetailSlice"

const useFetchSchoolById = id => {
  const [serverError, setServerError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    const fetchSchools = async () => {
      try {
        const response = await fetch(`/api/schools/${id}`)
        const jsonData = await response.json()
        dispatch(setSchoolInfo(jsonData))
      } catch (error) {
        console.log("serverError: ", serverError)
        setServerError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSchools()
  }, [id])

  return [serverError, isLoading]
}

export default useFetchSchoolById
