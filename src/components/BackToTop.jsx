import { BiSolidUpArrow } from "react-icons/bi"

const BackToTop = ({ linkId }) => {
  return (
    <a href={`#${linkId}`}>
      <div className="z-10 bg-primary/70 text-white text-xl p-3 lg:p-3 rounded-full flex justify-center items-center">
        <BiSolidUpArrow />
      </div>
    </a>
  )
}

export default BackToTop
