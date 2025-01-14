import { Link } from "react-router-dom"
import list from "../../public/list.json"
import Card from "./Cards"

const Course = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white text-black dark:bg-slate-900 dark:text-white">
                <div className="mt-16 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl pt-16">We're delighted to have you {" "}
                        <span className="text-pink-500">here!</span>
                    </h1>
                    <p className="mt-12">
                        Explore a wide variety of courses designed for all learning levels. Whether you're starting fresh,
                        upskilling professionally, or exploring a passion, we have something for you. From technology and
                        programming to arts, business, and personal growth, our expert instructors deliver an engaging
                        learning experience. Start your journey today and unlock your potential. Don’t just learn—thrive!
                    </p>
                    <Link to={"/"}>
                        <button className="bg-pink-500 text-white mt-3 px-2 py-1 rounded-md hover:bg-pink-700 duration-300">Back</button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
                    {
                      list.map(book => <Card key={book.id} book={book} />) 
                    }
                </div>
            </div>
        </>
    )
}

export default Course