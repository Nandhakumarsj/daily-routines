import { useState } from "react";
import './Slides.css';
const slides = [
    {
        title:"β Start with Good Morning β",
        message:"We should keep the daily routine balanced β².It is important to have a breakfast π³ in the morning."
    },
    {
        title:"π Stay Healthy π, Know Your Diet π",
        message:"It is necessary to eat healthy food and keep our diet so balanced."
    },
    {
        title:"π½ Exercise Daily π€Έπ»ββοΈ",
        message:"Keep your body fit. You can also practice exersice regularly."
    },
    {
        title:"π·π»ββοΈ Work on Time to Work βΉπ»ββοΈ!",
        message:"It is important to work during your productive hours of the day."
    },
    {
        title:"π Enjoy Your Life π",
        message:"Do what you have to do and What you think that is right to you and your surroundings."
    },
    {
        title:"π΄ Be on Correct Time to Sleep ππ»",
        message:"As you may know early to bed make your next day easier to progress π."
    }
]


const Slide = () =>{
    const [current, setCurrent] = useState(0);
    const [restart, setRestart] = useState(false);
    const [previous, setPrevious] = useState(false);
    const [next, setNext] = useState(false);

    const nextslide = () =>{
        current === slides.length-1 ? setCurrent(current) : setCurrent(current+1);
        current === slides.length - 2? setNext(true): setNext(false);
        setPrevious(false);
        setRestart(false);

    }

    const prevslide = () =>{
        current === 0? setCurrent(current) : setCurrent(current-1);
        current === 1 || current === 0? setPrevious(true): setPrevious(false);
        setNext(false);
        setRestart(false);
    }

    const reset = () =>{
        setCurrent(0);
        setRestart(true);
        setNext(false);
    }

    return(
        <>
            <div className="BtnOutline">
                <button disabled={restart} onClick={reset}>Restart</button>
                <button disabled={previous} onClick={prevslide}>Previous</button>
                <button disabled={next} onClick={nextslide}>Next</button>
            </div>
            <div className="Slide">
                <h2>
                    {slides[current].title}
                </h2>
                <p>
                    {slides[current].message}
                </p>
            </div>
        </>
    );
}

export default Slide;