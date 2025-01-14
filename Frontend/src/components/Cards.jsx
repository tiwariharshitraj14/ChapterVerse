const Card = ({book}) => {
    console.log(book);

    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-base-100 w-92 h-full shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={book.img}
                            alt={book.title}
                            className="w-full h-48 object-contain" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {book.title}
                            <div className="badge badge-secondary text-white">{book.category}</div>
                        </h2>
                        <p>{book.description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${book.price}</div>
                            <div className="cursor-pointer px-2 py-1 border border-slate-400 rounded-full hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card