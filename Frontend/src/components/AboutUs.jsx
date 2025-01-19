const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                        Welcome to ChapterVerse
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Where every page turns into an adventure
                    </p>
                </div>

                {/* Story & Mission Section - Side by Side */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white text-black dark:bg-slate-900 dark:text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 border dark:border">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="text-purple-600 dark:text-purple-400 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </span>
                            Our Story
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Founded with a passion for literature, ChapterVerse is more than just a bookstore – 
                            it's a haven for book lovers and knowledge seekers. We believe that every book has 
                            the power to open new worlds and transform lives.
                        </p>
                    </div>

                    <div className="bg-white text-black dark:bg-slate-900 dark:text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 border dark:border">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="text-purple-600 dark:text-purple-400 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Our Mission
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            At ChapterVerse, our mission is to cultivate a love for reading by providing 
                            a carefully curated selection of books across all genres. We strive to create 
                            an inclusive space where readers of all ages can discover their next favorite book.
                        </p>
                    </div>
                </div>

                {/* What Sets Us Apart - Cards Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">What Sets Us Apart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Curated Collection", icon: "📚" },
                            { title: "Personal Recommendations", icon: "🎯" },
                            { title: "Literary Events", icon: "🎭" },
                            { title: "Competitive Prices", icon: "💎" },
                            { title: "Expert Staff", icon: "👥" },
                            { title: "Book Clubs", icon: "🤝" },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white text-black dark:bg-slate-900 dark:text-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 border dark:border">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Commitment Section */}
                <div className="bg-white text-black dark:bg-slate-900 dark:text-white p-8 rounded-xl shadow-xl mb-16 border dark:border">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Commitment</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Outstanding Service", desc: "24/7 customer support" },
                            { title: "Quick Delivery", desc: "Fast and reliable shipping" },
                            { title: "Secure Payments", desc: "Multiple payment options" },
                            { title: "Easy Returns", desc: "Hassle-free process" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="text-purple-600 dark:text-purple-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join Community Section */}
                <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 p-12 rounded-xl shadow-xl border dark:border">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
                    <p className="text-white text-lg max-w-2xl mx-auto">
                        Whether you're a casual reader or a devoted bibliophile, ChapterVerse is your 
                        destination for literary exploration. Join our community of book lovers and 
                        embark on countless adventures through the pages of our books.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;