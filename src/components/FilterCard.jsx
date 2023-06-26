import React from "react"
import Checkbox from "./Checkbox"

const FilterCard = ({ title, options }) => {
  return (
    <div className="pb-4 border-b">
      <h4 className="font-medium  pb-0.5">{title}</h4>
      <div>
        {options?.map(option => {
          return <Checkbox key={option} title={option} />
        })}
      </div>
    </div>
  )
}

export default FilterCard
