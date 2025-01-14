import Navbar from "../Navbar"
import Banner from "../Banner"
import FreeBook from "../FreeBook"
import Footer from "../Footer"

const Home = () => {
    return (
        <>
            <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
            <Navbar />
            <Banner />
            <FreeBook />
            <Footer />
            </div>
        </>
    )
}

export default Home  