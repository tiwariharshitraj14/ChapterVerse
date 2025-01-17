import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from "./Cards";

const FreeBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get("http://localhost:4001/book")
                setBooks(response.data.filter((data) => data.category === "Free"));   
            } catch (error) {
                console.log(error);
            }
        }
        getBooks();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white text-black dark:bg-slate-900 dark:text-white">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p>Check out our free courses for all levels of learners!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default FreeBook;