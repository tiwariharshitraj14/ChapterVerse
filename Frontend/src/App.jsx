import Home from "./components/home/Home"
import Courses from "./components/courses/Courses"
import {Routes, Route} from "react-router-dom"
import SignUp from "./components/SignUp"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
