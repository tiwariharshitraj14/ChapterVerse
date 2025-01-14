import Home from "./components/home/Home"
import Courses from "./components/courses/Courses"
import {Routes, Route} from "react-router-dom"

const App = () => {

  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  )
}

export default App
