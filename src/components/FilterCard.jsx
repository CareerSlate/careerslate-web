// import { useState } from "react"
import Checkbox from "./Checkbox"

const FilterCard = ({ title, options }) => {
  // const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="pb-4 border-b">
      <h4 className="font-medium  pb-0.5">{title}</h4>
      <div data-testid="filter-checkbox">
        {options?.map(option => {
          return <Checkbox key={option} title={title} checkboxTitle={option} />
          // return <Checkbox key={option} title={title} checkboxTitle={option} isChecked={isChecked} setIsChecked={setIsChecked} />
        })}
      </div>
    </div>
  )
}

export default FilterCard
