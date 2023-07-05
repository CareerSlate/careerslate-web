import { useSelector } from "react-redux"
import InquiryForm from "./InquiryForm"

const Filter = ({ filterMenu }) => {
  const isSidebarOpen = useSelector(store => store.schoolDetail.isSidebarOpen)
  return (
    <aside className={`${isSidebarOpen ? "block" : "hidden lg:flex"} fixed lg:relative top-0 right-0 z-[100] lg:z-[0] w-full lg:w-[25%] h-screen lg:h-auto bg-black/50 flex justify-end shadow-sm lg:mt-4`}>
      {/* admission inquiry */}
      <InquiryForm />

      {/* advertisement */}
    </aside>
  )
}

export default Filter
