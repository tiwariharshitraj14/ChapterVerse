import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Card from "./Cards";

const FreeBook = () => {
    const freeBooks = list.filter(book => book.category === "Free")
    // console.log(freeBooks);
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
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p>Check out our free courses for all levels of learners!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {freeBooks.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default FreeBook;