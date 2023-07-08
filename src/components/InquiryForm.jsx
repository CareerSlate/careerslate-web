import { useState } from "react"
import { useDispatch } from "react-redux"
import { setIsSidebarOpen } from "../store/schoolDetailSlice"
import { AiOutlineClose } from "react-icons/ai"

const InquiryForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const dispatch = useDispatch()

  function handleToggle() {
    dispatch(setIsSidebarOpen())
  }

  function handleForm(e) {
    e.preventDefault()
    alert("Thank you for your interest. Our team will contact you shortly.")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    dispatch(setIsSidebarOpen())
  }
  return (
    <div className="w-[100%] sm:w-[60%] lg:w-full h-full lg:h-auto p-5 rounded-sm bg-white flex flex-col ">
      {/* heading */}
      <div className="w-full pb-4 mb-2  border-b flex justify-between items-center">
        <h3 className="font-medium ">Admission Inquiry</h3>
        <div className="lg:flex lg:items-center lg:gap-2 ">
          <span onClick={handleToggle} className="lg:hidden">
            <AiOutlineClose size={28} />
          </span>
        </div>
      </div>

      {/* Inquiry form */}
      <form onSubmit={handleForm} className="py-4 flex flex-col gap-4 overflow-scroll lg:overflow-hidden scrollbar-hide">
        <input onChange={e => setName(e.target.value)} value={name} type="text" name="name" id="name" placeholder="Name" className=" rounded-sm border border-slate-300 py-2 px-3 placeholder:text-slate-500 placeholder:text-sm" required />
        <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Email" className=" rounded-sm border border-slate-300 py-2 px-3 placeholder:text-slate-500 placeholder:text-sm" required />
        <input onChange={e => setPhone(e.target.value)} value={phone} type="phone" name="phone" id="phone" placeholder="Phone Number" className=" rounded-sm border border-slate-300 py-2 px-3 placeholder:text-slate-500 placeholder:text-sm" required />
        <textarea onChange={e => setMessage(e.target.value)} value={message} type="text" name="message" id="message" placeholder="Your message" rows="3" className=" rounded-sm border border-slate-300 py-2 px-3 placeholder:text-slate-500 placeholder:text-sm" required />
        <div className="pt-2 flex flex-col gap-4">
          <input type="submit" value="Sumbit" className="p-2 rounded-sm border border-secondary bg-secondary text-white hover:bg-slate-50  hover:text-primary hover:border-primary" />
          <p className="text-xs text-slate-600">By submitting this form, you agree to our Terms and Privacy Policy.</p>
        </div>
      </form>
    </div>
  )
}

export default InquiryForm
