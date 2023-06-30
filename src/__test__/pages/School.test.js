import School from "../../pages/School"
import { DISPLAY_SCHOOL_OFFSET } from "../../utils/constants"

import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../store/store"
import { toHaveValue } from "@testing-library/jest-dom/matchers"

test("Search should load on rendering school", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  const search = school.getByTestId("search")
  expect(search).toBeInTheDocument()
})

test("Breadcrumb should load on rendering school", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  const breadcrumb = school.getByTestId("breadcrumb")
  expect(breadcrumb.children.length).toBe(4)
})

test("Intro should load on rendering school", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  const intro = school.getByTestId("intro")
  expect(intro.children.length).toBe(2)
})

test("Schools should load on rendering school", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  const schoolCard = school.getByTestId("school-card")
  expect(schoolCard.children.length).toBe(DISPLAY_SCHOOL_OFFSET)
})

test("Load more should load next school on school page", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  const loadMore = school.getByTestId("loadmore")
  fireEvent.click(loadMore)

  const schoolCard = school.getByTestId("school-card")
  expect(schoolCard.children.length).toBe(DISPLAY_SCHOOL_OFFSET * 2)
})

test("Filter on the basis of school level on school page", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  /* select the checkbox:middle-school from the filter list */
  const filter = school.getAllByTestId("filter-checkbox")
  expect(filter[0].children.length).toBe(5)
  expect(filter[1].children.length).toBe(3)
  expect(filter[2].children.length).toBe(4)
  expect(filter[3].children.length).toBe(2)
  expect(filter[4].children.length).toBe(3)

  const checkbox_middle_school = filter[4].children[0].children[0]
  expect(checkbox_middle_school.checked).toBeFalsy()
  fireEvent.change(checkbox_middle_school, {
    target: {
      checked: true
    }
  })
  expect(checkbox_middle_school.checked).toBeTruthy()
  /* Submit the filter form */
  const filterButtons = school.getByTestId("filter-buttons")
  const submitButton = filterButtons.children[1]
  /* verify filter result */
  const schoolCard = school.getByTestId("school-card")
  // expect(schoolCard.children.length).toBe("1")

  /* Checking the reset button */
  expect(checkbox_middle_school.checked).toBeTruthy()
  const resetButton = filterButtons.children[0]
  fireEvent.click(resetButton)
  expect(checkbox_middle_school.checked).toBeFalsy()

  /* Select the checkbox:hindi-medium & verify the result */
  const checkbox_hindi_medium = filter[3].children[1].children[0]
  expect(checkbox_hindi_medium.checked).toBeFalsy()
  fireEvent.change(checkbox_hindi_medium, {
    target: {
      checked: true
    }
  })
  expect(checkbox_hindi_medium.checked).toBeTruthy()
  fireEvent.click(submitButton)
  // expect(schoolCard.children.length).toBe("2")
})

test("Sort by name in ascending & decending order after rendering school", () => {
  const school = render(
    <StaticRouter>
      <Provider store={store}>
        <School />
      </Provider>
    </StaticRouter>
  )
  //   Select the sort option "A to Z"
  const sortSelect = school.getByTestId("sort")
  fireEvent.change(sortSelect, {
    target: {
      value: "A to Z"
    }
  })
  expect(sortSelect.value).toBe("A to Z")

  //   verify sort result for "A to Z"
  let schoolNameList = school.getAllByTestId("school-name")
  expect(schoolNameList[0]).toHaveTextContent("aishwaraya public school")

  //   Select the sort option "Z to A"
  fireEvent.change(sortSelect, {
    target: {
      value: "Z to A"
    }
  })
  expect(sortSelect.value).toBe("Z to A")

  //   verify sort result
  schoolNameList = school.getAllByTestId("school-name")
  expect(schoolNameList[0]).toHaveTextContent("the krishna valley school")
})
