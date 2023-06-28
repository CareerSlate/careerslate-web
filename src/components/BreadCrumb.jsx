import { Link } from "react-router-dom"
import style from "../style"

const BreadCrumb = ({ options }) => {
  return (
    <div className={`w-full ${style.flexStart} bg-white border-b`}>
      <div className={`${style.boxWidth}  ${style.marginX} p-3`}>
        <div className="flex items-center gap-1 capitalize text-xs">
          {options.map((option, index) => {
            return (
              <span key={option.name} className="flex items-center gap-1">
                <Link to={option.link} className={`capitalize ${index !== options.length - 1 ? "text-primary hover:underline" : "text-slate-500"}`}>
                  {option.name}
                </Link>
                {index !== options.length - 1 && ">"}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
