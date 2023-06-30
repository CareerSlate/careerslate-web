import { useDispatch, useSelector } from "react-redux"
import { addFilterOption, removeFilterOption } from "../store/filterSlice"

const Checkbox = ({ title, checkboxTitle }) => {
  const dispatch = useDispatch()
  const filterOption = useSelector(store => store.filter.filterOption)
  const isChecked = filterOption[title] && filterOption[title]?.includes(checkboxTitle) ? true : false

  const handleCheckboxChange = e => {
    if (isChecked) {
      dispatch(removeFilterOption([title, checkboxTitle]))
    } else {
      dispatch(addFilterOption([title, checkboxTitle]))
    }
  }
  return (
    <div className="flex items-center gap-1.5">
      <input type="checkbox" id={checkboxTitle} name={checkboxTitle} value={checkboxTitle} checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor={checkboxTitle}>{checkboxTitle}</label>
    </div>
  )
}

export default Checkbox
