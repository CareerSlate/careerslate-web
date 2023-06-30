import style from "../style"
import { SHIMMER_WIDGET_CARDS, SHIMMER_ASIDE_CARDS } from "../utils/constants"

const ShimmerBlock = ({ width, height }) => {
  // console.log("width: ", width, " | height: ", height)

  // const lineStyle = `w-[${width}%] h-[${height}px] bg-slate-200 rounded-sm`
  // const lineStyle2 = `w-[100%] h-[16px] bg-slate-200 rounded-sm`
  // console.log("-----------")
  // console.log(lineStyle)
  // console.log(lineStyle2)
  // console.log("-----------")

  // return <div className={lineStyle} />
  // return <div className={lineStyle2} />
  return <div className={`w-[100%] h-[16px] bg-slate-200 rounded-sm`} />
  // return <div className={`w-[${width}%]  h-[${height}px]  bg-slate-200 rounded-sm`} />
  // return <div className={`${width ? ` w-[${width}%] ` : "w-full "} ${height ? ` h-[${height}px] ` : " h-[16px] "}  bg-slate-200 rounded-sm`} />
}

const ShimmerCard = () => {
  return (
    <div className=" px-4 py-6 bg-slate-100 border flex gap-4">
      {/* image section */}
      <div className="w-[25%]">
        <div className="w-full h-full bg-slate-200 rounded-sm " />
      </div>
      {/* description section */}
      <div className="flex-1 flex flex-col items-start gap-3">
        <ShimmerBlock height={20} width={100} />
        <ShimmerBlock height={20} width={100} />
        <ShimmerBlock height={20} width={80} />
        <ShimmerBlock height={20} width={80} />
      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <section data-testid="shimmer" className="w-full flex justify-center items-start">
      <div className={`${style.boxWidth}  mt-10 px-6 rounded-sm ${style.flexStart} flex-col gap-6`}>
        {/* header */}
        <div className="w-full h-[100px] px-6 py-18 border rounded-sm bg-slate-100 flex justify-center items-center ">
          <div className="w-[90%] lg:w-[70%] h-[40px] bg-slate-200 rounded-sm" />
        </div>

        {/* body */}
        <div className="w-full px-6 py-10 border rounded-sm flex justify-center items-start  gap-4">
          {/* aside */}
          <div className="hidden lg:flex flex-col rounded-sm gap-6 w-[30%] px-6 py-6 bg-slate-100 border">
            {Array(SHIMMER_ASIDE_CARDS)
              .fill("")
              .map((ele, index) => {
                return <ShimmerBlock key={index} height={20} width={100} />
              })}
          </div>

          {/* main */}
          <div className="rounded-sm flex-1 flex flex-col gap-4">
            {Array(SHIMMER_WIDGET_CARDS)
              .fill("")
              .map((ele, index) => {
                return <ShimmerCard key={index} />
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shimmer
