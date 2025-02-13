const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-3 my-10 bg-white text-black dark:bg-slate-900 dark:text-white">
                <div className="w-full md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
                    <div className="space-y-9">
                        <h1 className="text-4xl font-bold">
                            Hello, welcome here to learn something {" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                                new everyday!!!
                            </span>
                        </h1>
                        <p className="text-lg">
                            Dive into a world of endless knowledge and captivating stories.
                            Whether you're exploring timeless classics, uncovering new adventures,
                            or expanding your skills, this is the place to ignite your curiosity
                            and embrace learning like never before.
                        </p>

                    </div>
                    <div className="mt-10">
                    <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow outline-none bg-transparent" placeholder="Email" />
                    </label>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 px-2 py-2 rounded-md mt-3 text-white duration-300">Subscribe</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-12 md:mt-24 order-1 md:order-2">
                    <video className="w-full h-auto rounded-lg shadow-lg"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="./src/assets/sideVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}
export default Banner