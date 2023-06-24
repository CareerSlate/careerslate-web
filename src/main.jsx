import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import { Error } from "./pages"
import "./index.css"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appConfig} />
  </React.StrictMode>
)
