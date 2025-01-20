import Home from "./components/home/Home"
import Courses from "./components/courses/Courses"
import {Routes, Route, Navigate} from "react-router-dom"
import SignUp from "./components/SignUp"
import Contact from "./components/Contact"
import About from "./components/about/About"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("NavData",authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={ authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
