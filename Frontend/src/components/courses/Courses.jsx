import Course from "../Course"
import Footer from "../Footer"
import Navbar from "../Navbar"

const courses = () => {
    return (
        <>
            <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
            <Navbar />
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
            </div>
        </>
    )
}

export default courses