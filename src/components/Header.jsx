import React from "react"

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-3">
      <img src="./src/assets/logo.png" alt="CareerSlate" className="w-[160px]" />
      <ul className="flex items-center gap-6">
        <li>Home</li>
        <li>Schools</li>
      </ul>
    </nav>
  )
}

export default Header
