// Filename - Details.jsx
import React, { useEffect, useState, useRef, useReducer } from "react"
import Navbar from "./Navbar"
import Layout from "./layouts/Layout"

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
        fetch(`/stories/${selected.story}`)
        .then((response) => response.text())
        .then((data) => setFileContent(data))
        .catch((error) => console.error('Error fetching file:', error));
    }, []);
    
    const paragraphs = fileContent.split("\n").map(para =>{
        return (<p className="story--paragraph">{para}</p>)
    })
    
    const [isPlaying, setIsPlaying] = useState(false);
    const audioFile = `/audio/${selected.audio}`;
    const audioRef = useRef(new Audio(audioFile))

    const togglePlay = () => {
        const audio = audioRef.current
        if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
        } else {
        audio.pause();
        setIsPlaying(false);
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
                <button className="audio--button" onClick={togglePlay}>
                    <img src={require("../images/play.png")} className="audio--image"></img>
                    play audio
                </button>
                <section className="details--quote">
                    <h2 className="details--headings">Quotes and Highlights</h2>
                    <div className="quote--body">
                        <img src={require("../images/quote.png")} className="quote--mark" />
                        <p>"{selected.quote}"</p>
                    </div>
                </section>
                <h2 className="details--headings">{selected.title}</h2>
                <Layout owner={selected.owner} story={paragraphs} />
                {/* <KaWai story={paragraphs} /> */}
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