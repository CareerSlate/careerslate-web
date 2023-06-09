import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import { Error, School, SchoolDetails } from "./pages"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store/store"
import "./utils/server.js"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <School />
      },
      {
        path: "school/:id",
        element: <SchoolDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={appConfig} />
  </Provider>
  // </React.StrictMode>
)
