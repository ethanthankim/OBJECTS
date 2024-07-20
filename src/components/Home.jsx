// Filename - Home.jsx
import React, {useState, useEffect} from "react";
import Navbar from "./Navbar"
import Title from "./Title"
import { Link } from "react-router-dom";

export default function Home() {

    const [visible, setVisible] = useState(false);
    const sentences = [
        "Every time we travel somewhere else, we think about what items are most important when we pack.",
        "What items are most important to you?",
        "In exploring this question, we interviewed people about their most valuable object to learn more about the people around us."
    ]
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [textVis, setTextVis] = useState(false);
    const [initialDelay, setInitialDelay] = useState(true); // State for initial delay
    const [titleColor, setTitleColor] = useState("transparent")
    const [titleVis, setTitleVis] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setVisible(true);
        }, 100);
    
        return () => clearTimeout(timeoutId);
      }, []);


    useEffect(() => {
        // Set an initial delay before starting the sentence cycle
        if (initialDelay) {
            const delayTimer = setTimeout(() => {
                setInitialDelay(false);
                setText(sentences[0]);
                setTextVis(true);
            }, 2000); // Initial delay duration

            return () => clearTimeout(delayTimer);
        }
    }, [initialDelay, sentences]);

    useEffect(() => {
        if (!initialDelay && index < sentences.length) {
            setTextVis(false)
            const fadeOutTimer = setTimeout(() => {
                setText(sentences[index])
                setTextVis(true)
            }, 1000);
          
            const displayTimer = setTimeout(() => {
                setTextVis(false);
                setIndex(prevIndex => prevIndex + 1)
                if (index === sentences.length - 1) {
                    setTitleColor("white")
                    setTitleVis(true)
                }
            }, 6000)
            return () => {
                clearTimeout(fadeOutTimer);
                clearTimeout(displayTimer);
            }
        }
    }, [index, text])

    function changeColor(id) {
        document.getElementById(id).style.animation = "toYellow 1s"
        document.getElementById(id).style.animationFillMode = "forwards"
    }
    function changeBack(id) {
        document.getElementById(id).style.animation = "toTrans 1s"
    }

    return (
        <div id="home" className={`fade-in ${visible ? 'visible' : ''}`}>
            <Navbar darkmode={true}/>
            <Title color={titleColor} vis={titleVis}/>
            <Link to="/Main" className="link">
                <button 
                    className="home--button"
                    id="explore"
                    onMouseOver={() => changeColor("explore")}
                    onMouseLeave={() => changeBack("explore")}
                >
                    &lt; explore the treasure box &gt;
                </button>
            </Link>
            <h3 id="home--text" className={`fade ${textVis ? 'visible' : ''}`}>{text}</h3>
        </div>
    )
}
