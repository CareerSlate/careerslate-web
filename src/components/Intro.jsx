import style from "../style"

const Intro = ({ intro }) => {
  return (
    <div className={`w-full ${style.flexStart} bg-white`}>
      <div className={`${style.boxWidth}  ${style.marginX} py-10`}>
        <h1 className="font-bold text-3xl text-slate-800 pb-4 capitalize">{intro?.title}</h1>
        <p className="leading-[25px]">{intro?.description}</p>
      </div>
    </div>
  )
}

export default Intro
