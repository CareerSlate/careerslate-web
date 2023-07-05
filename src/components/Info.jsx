import { Link } from "react-router-dom"

const Info = ({ label, info, labelWidth, href, containerStyle, labelStyle, infoStyle }) => {
  const labelWidthStyle = labelWidth ? labelWidth : ""
  return (
    <div className={`flex items-start gap-2 ${containerStyle} `}>
      <span className={`w-[40%] xs:w-[30%] lg:w-[35%] xl:w-[30%] ${labelStyle} text-slate-500 capitalize`}>{label}: </span>
      {href ? (
        <Link to={href} target="_blank" className={` ${infoStyle}  flex-1 hover:underline`}>
          {info ? info?.toLowerCase() : "N/A"}
        </Link>
      ) : (
        <p className={` ${infoStyle} flex-1 capitalize`}>{info ? info?.toLowerCase() : "N/A"}</p>
      )}
    </div>
  )
}

export default Info
