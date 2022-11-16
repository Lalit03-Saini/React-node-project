import { useState, useEffect } from "react";
import { sliderDate } from "./silder-date";
import "./slider.css"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const sliderLength = sliderDate.length;
    
    const autoScroll = true;

    let sliderInterval;
    let intervaltime = 3000;

    const nextSlide = () =>{
        setCurrentSlide( currentSlide === sliderLength -1 ? 0 : currentSlide + 1);
    }
    // const prevSlide = () =>{
    //     setCurrentSlide( currentSlide === 0 ? sliderLength : currentSlide - 1); 
    // }

    function auto (){
        sliderInterval = setInterval(nextSlide,intervaltime )
    };

    useEffect(()=>{
        setCurrentSlide(0)
    },[]);
    useEffect(()=>{
        if (autoScroll){
            auto();
        }
        return () => clearInterval(sliderInterval)
    },[currentSlide]);

    return (
        <>
            <div className="slider">
                {sliderDate.map((slide, index) => {
                    return (
                        <>
                        <div className={index === currentSlide ? "silde current" : "slide"} key={0}>
                            {index === currentSlide && (
                                <>
                                    <a href="./home/home1" style={{ textDecoration: "none" }}>
                                        <div className="">
                                            <img className="top0" src={slide.image} alt="Road-image" />
                                            <div className="qoute1">
                                                <h3>{slide.heading}</h3>
                                                <p>{slide.desc}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            )}
                        </div>
                        <div className={index === currentSlide ? "silde current" : "slide"} key={1}>
                            {index === currentSlide && (
                                <>
                                    <a href="./home/home2" style={{ textDecoration: "none" }}>
                                        <div className="">
                                            <img className="top0" src={slide.image1} alt="Mountain-image" />
                                            <div className="qoute1">
                                                <h3>{slide.heading1}</h3>
                                                <p>{slide.desc1}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            )}
                        </div>
                        <div className={index === currentSlide ? "silde current" : "slide"} key={2}>
                            {index === currentSlide && (
                                <>
                                    <a href="./home/home3" style={{ textDecoration: "none" }}>
                                        <div className="">
                                            <img className="top0" src={slide.image2} alt="Lakha-image" />
                                            <div className="qoute1">
                                                <h3>{slide.heading2}</h3>
                                                <p>{slide.desc2}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            )}
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Slider;