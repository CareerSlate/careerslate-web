import { logo } from "../assets"
import { HiMenu } from "react-icons/hi"

export const logoImg = {
  img: logo,
  alt: "CareerSlate"
}

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/"
  },
  {
    id: "explore-schools",
    title: "Explore Schools",
    link: "/find-schools"
  },
  {
    id: "compare-schools",
    title: "Compare Schools",
    link: "/compare-schools"
  }
]

export const hamburger = {
  img: HiMenu
}

export const disclaimerMessage = {
  title: "Disclaimer",
  message: "Unless certified and also verified by CareerSlate please be aware that all the data provided is subject to confirmation and to the best of our knowledge and we have gathered information from respective school websites and publicly available sources. Please be aware such information can change and is subject to school polices. Schools can update their information on our Platform by contacting us.",
  button: {
    test: "Claim This School",
    link: "/claim-this-school-form"
  }
}

export const footerDisclaimerMessage = {
  title: "Disclaimer",
  message: "We try to show the right information, but does not take responsibility for the genuineness and authenticity of the content."
}
