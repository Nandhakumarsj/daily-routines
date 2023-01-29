import { useState } from "react";
import './Slides.css';
const slides = [
    {
        title:"⌚ Start with Good Morning ⌛",
        message:"We should keep the daily routine balanced ⏲.It is important to have a breakfast 🍳 in the morning."
    },
    {
        title:"🍐 Stay Healthy 🍎, Know Your Diet 🍚",
        message:"It is necessary to eat healthy food and keep our diet so balanced."
    },
    {
        title:"🎽 Exercise Daily 🤸🏻‍♀️",
        message:"Keep your body fit. You can also practice exersice regularly."
    },
    {
        title:"👷🏻‍♀️ Work on Time to Work ⛹🏻‍♀️!",
        message:"It is important to work during your productive hours of the day."
    },
    {
        title:"😊 Enjoy Your Life 😆",
        message:"Do what you have to do and What you think that is right to you and your surroundings."
    },
    {
        title:"😴 Be on Correct Time to Sleep 🛌🏻",
        message:"As you may know early to bed make your next day easier to progress 😄."
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