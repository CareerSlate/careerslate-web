import { logo, error } from "../assets"
import { HiMenu } from "react-icons/hi"

export const DISPLAY_SCHOOL_OFFSET = 10

export const SHIMMER_WIDGET_CARDS = 10
export const SHIMMER_ASIDE_CARDS = 15

// Header Component
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
  // {
  //   id: "explore-schools",
  //   title: "Explore Schools",
  //   link: "/find-schools"
  // },
  {
    id: "compare-schools",
    title: "Compare Schools",
    link: "/compare-schools"
  },
  {
    id: "register-school",
    title: "Register School",
    link: "/register-school"
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

// Error Page
export const errorImg = {
  img: error,
  alt: "404 | Page Not Found "
}

// School Page
export const sortOptions = ["Relevance", "A to Z", "Z to A", "Rating"]

export const filterMenu = [
  {
    id: "board",
    title: "Boards / Curriculum",
    options: ["CBSE", "ICSE", "State Board", "IB", "IGCSE"]
  },
  {
    id: "classification",
    title: "Classification",
    options: ["Co-educational", "Boys", "Girls"]
  },
  {
    id: "management-type",
    title: "Management Type",
    options: ["Private School", "Government School", "Kendriya Vidyalaya (KVS)", "Jawahar Navodaya (JNV)"]
  },
  {
    id: "medium",
    title: "Medium",
    options: ["English", "Hindi"]
  },
  {
    id: "school-level",
    title: "School Level",
    options: ["Middle Class", "Secondary School", "Senior Secondary"]
  }
]

// Intro
export const introDetail = {
  title: "List of top Schools in 2023-24 Ranking",
  description: "Checkout list of Top CBSE Schools in 2023 offering CBSE board curriculum. Find below the complete list of CBSE Schools in offering CBSE Curriculum with information on Fees, Admission procedure, Ranking, Rating & Reviews, Curriculum, Facilities, Contact Details and address. This list of Top Best CBSE Schools in covers CBSE affiliated Schools in ."
}

// Bread Crumb
export const breadCrumbOptions = [
  {
    name: "home",
    link: "/"
  },
  {
    name: "school",
    link: "/"
  },
  {
    name: "india",
    link: "#"
  }
]
