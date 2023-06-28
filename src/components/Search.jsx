import style from "../style"

const Search = () => {
  return (
    <div className={`w-full ${style.flexStart} bg-primary `}>
      <div className={`${style.boxWidth}  ${style.marginX} py-6 flex justify-center items-center`}>
        <input type="search" name="school" id="school-search" placeholder="search schools by name ..." className="py-4 px-8 w-[70%] rounded-md capitalize" />
      </div>
    </div>
  )
}

export default Search
