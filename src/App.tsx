import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Movie from "./pages/Movie"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
