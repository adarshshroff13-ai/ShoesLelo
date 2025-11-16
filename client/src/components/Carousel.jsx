import React from 'react'
import Slider from "react-slick";
import { arr } from "../assets/imageExport"

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
};

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div style={{ bottom: "20px" }}>
                <ul className="flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 mt-2">
            </button>
        )
    };

    const slides = [
        { img: arr[0], title: "Premium Collection", subtitle: "Step into Style" },
        { img: arr[1], title: "Sports Edition", subtitle: "Performance Meets Design" },
        { img: arr[2], title: "Casual Comfort", subtitle: "All-Day Wear" },
        { img: arr[3], title: "Limited Edition", subtitle: "Exclusive Designs" },
        { img: arr[4], title: "New Arrivals", subtitle: "Fresh Styles Daily" }
    ];

    return (
        <div className='xs:max-w-[95%] md:max-w-[90%] mx-auto my-6 rounded-lg overflow-hidden shadow-xl'>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <div className="relative w-full xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
                            <img 
                                src={slide.img} 
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Text overlay */}
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="xs:text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
