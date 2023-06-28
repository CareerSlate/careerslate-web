import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFilterOption, removeFilterOption } from "../store/filterSlice"

const Checkbox = ({ title, checkboxTitle }) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()

  const handleCheckboxChange = e => {
    if (isChecked) {
      dispatch(removeFilterOption([title, checkboxTitle]))
    } else {
      dispatch(addFilterOption([title, checkboxTitle]))
    }
    setIsChecked(prev => !prev)
  }
  return (
    <div className="flex items-center gap-1.5">
      <input type="checkbox" id={checkboxTitle} name={checkboxTitle} value={checkboxTitle} checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor={checkboxTitle}>{checkboxTitle}</label>
    </div>
  )
}

export default Checkbox
