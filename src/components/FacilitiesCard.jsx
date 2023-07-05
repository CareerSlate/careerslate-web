import { BsCheckCircleFill } from "react-icons/bs"

const FacilitiesCard = ({ facilities }) => {
  return (
    <div>
      <h3 className="pt-3 font-semibold text-lg capitalize text-slate-700">{facilities?.title}</h3>
      <div className="w-full pt-3 grid grid-cols-2 lg:grid-cols-3 ">
        {facilities?.options.map(option => {
          return (
            <div key={option.name} className="flex items-center gap-2">
              <span className={option?.value ? "text-green-700" : "text-slate-300"}>
                <BsCheckCircleFill />
              </span>
              <p className={`flex-1 capitalize ${option?.value && "font-semibold text-green-700"}`}>{option?.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FacilitiesCard
