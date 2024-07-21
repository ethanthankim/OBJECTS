// Filename - Details.jsx
import React, { useEffect, useState, useRef, useReducer } from "react"
import Navbar from "./Navbar"
import Layout from "./layouts/Layout"
import playImage from "../images/play.png"
import pauseImage from "../images/pause.png"

export default function Details(props) {
    function findSelected(objArray) {
        for (let i = 0; i < objArray.length; i++) {
            if (objArray[i].isSelected) {
                return objArray[i]
            }
        }
    }

    const selected = findSelected(props.objects)
   
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/stories/${selected.story}`)
        .then((response) => response.text())
        .then((data) => setFileContent(data))
        .catch((error) => console.error('Error fetching file:', error));
    }, []);

    console.log(fileContent)
    
    const paragraphs = fileContent.split("\n").map(para =>{
        return (<p className="story--paragraph">{para}</p>)
    })
    
    const [isPlaying, setIsPlaying] = useState(false);
    const audioFile = `${process.env.PUBLIC_URL}/audio/${selected.audio}`;
    const audioRef = useRef(new Audio(audioFile))

    function togglePlay(id) {
        const audio = audioRef.current
        const button = document.getElementById(id);
        const buttonText = button.querySelector("#button--text");
        const buttonImage = button.querySelector(".audio--image");

        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);
            buttonText.innerHTML = "pause audio";
            buttonImage.src = pauseImage;
        } else {
            audio.pause();
            setIsPlaying(false);
            buttonText.innerHTML = "play audio";
            buttonImage.src = playImage;
        }
    };

    return (
        <div>
            <Navbar darkmode={false}/>
            <div className="details">
                <img 
                    className="details--image"
                    src={require(`../images/${selected.url}`)} 
                    alt={selected.label} 
                />
                {/* Conditionally render audio button and quote section if they exist */}
                { selected.audio &&
                <button className="audio--button" id="audio--play" onClick={() => togglePlay("audio--play")}>
                    <img src={playImage} className="audio--image" />
                    <span id="button--text">play audio</span>
                </button>
                }
                {selected.quote &&
                <section className="details--quote">
                    <h2 className="details--headings">Quotes and Highlights</h2>
                    <div className="quote--body">
                        <img src={require("../images/quote.png")} className="quote--mark" />
                        <p>"{selected.quote}"</p>
                    </div>
                </section>
                }
                <h2 className="details--headings">{selected.title}</h2>
                <Layout owner={selected.owner} story={paragraphs} />
                <p className="details--author">by {selected.author}</p>
                <br/>
                <img 
                    className="details--illustration"
                    src={require(`../illustrations/${selected.illustration}`)} 
                />
            </div>
        </div>
    )
}