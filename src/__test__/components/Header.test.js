import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StaticRouter } from "react-router-dom/server"
import { Header } from "../../components"

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  )
  const logo = header.getByTestId("logo")
  expect(logo.src).toBe("http://localhost/dummyLogo.png")
})

test("Navbar should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  )
  const navbar = header.getByTestId("navbar")
  expect(navbar.children.length).toBe(3)
})

test("Hamburger should toggle on navbar after rendering header", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  )
  const navbarMobile = header.getByTestId("navbar-mobile")
  expect(navbarMobile.className).toContain("hidden")
  //   expect(navbarMobile).toHaveStyle("display:block")

  const hamburger = header.getByTestId("hamburger-menu")
  fireEvent.click(hamburger)

  expect(navbarMobile.className).toContain("block")
})
