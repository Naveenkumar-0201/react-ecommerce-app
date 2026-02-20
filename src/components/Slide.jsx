import { useState, useEffect } from "react";


const images = [
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
    "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    "https://images.unsplash.com/photo-1607082349566-187342175e2f"
];

const CarouselBanner = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <img src={images[current]} alt="banner" className="banner-image" />

            <button className="arrow left" onClick={prevSlide}>❮</button>
            <button className="arrow right" onClick={nextSlide}>❯</button>


            <div className="glass-card">
                <h2>🔥 Big Billion Sale</h2>
                <p>Up to 50% OFF on Electronics</p>
                <button onClick={() => window.scrollBy({
                    top: window.innerHeight * 0.6,
                    behavior: "smooth"
                })}>
                    Shop Now
                </button>
            </div>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={current === index ? "dot active" : "dot"}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CarouselBanner;