import React from "react"

const Checkbox = ({ title }) => {
  return (
    <div className="flex items-center gap-1.5">
      <input type="checkbox" name="" id={title} />
      <label htmlFor={title}>{title}</label>
    </div>
  )
}

export default Checkbox
