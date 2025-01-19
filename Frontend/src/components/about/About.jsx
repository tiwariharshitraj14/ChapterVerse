import AboutUs from "../AboutUs"
import Footer from "../Footer"
import Navbar from "../Navbar"

const About = () => {
    return (
        <>
            <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
            <Navbar />
            <div className="min-h-screen">
                <AboutUs />
            </div>
            <Footer />
            </div>
        </>
    )
}

export default About