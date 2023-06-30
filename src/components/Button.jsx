const Button = ({ name, handleClick, isLightTheme, style }) => {
  const lightTheme = "border-primary bg-white text-slate-950 hover:bg-primary hover:border-primary hover:text-white"
  const darkTheme = "border-secondary bg-secondary text-white hover:bg-primary hover:border-primary"
  return (
    <button onClick={() => handleClick()} className={`text-sm px-2 py-1 rounded-sm border ${isLightTheme ? lightTheme : darkTheme} ${style}`}>
      {name}
    </button>
  )
}

export default Button
