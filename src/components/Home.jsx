// Filename - Home.jsx
import React from "react";
import Navbar from "./Navbar"
import { Link } from "react-router-dom";

export default function Home() {
    // // Typewriter effect
    // const typewriterText = "What objects hold meaning to you?";
    // let i = 0;
    // let j = typewriterText.length;
    // const typewriterSound = document.getElementById('typewriter-sound');

    // function typeWriter() {
    //     if (i < typewriterText.length) {
    //         document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 100); // Adjust typing speed here
    //     } else {
    //         setTimeout(deleteText, 2000); // Wait before starting to delete text
    //     }
    // }

    // function deleteText() {
    //     if (j > 0) {
    //         document.getElementById("typewriter").innerHTML = typewriterText.substring(0, j - 1);
    //         j--;
    //         setTimeout(deleteText, 100); // Adjust deleting speed here
    //     } else {
    //         setTimeout(showMainContent, 1000); // Wait before showing the main content
    //     }
    // }

    // function showMainContent() {
    //     typewriterSound.pause();
    //     typewriterSound.currentTime = 0;
    //     document.getElementById("preloader").style.display = "none";
    // }

    // // Function to start the typewriter effect and play the sound
    // window.addEventListener('load', () => {
    //     // Try to play the sound after a short delay
    //     setTimeout(() => {
    //         typewriterSound.play().catch(error => {
    //             console.log('Playback prevented:', error);
    //         });
    //         typeWriter();
    //     }, 500); // Adjust delay as needed
    // });

    return (
        <div className="home">
            <Navbar />
            <Link to="/Main" className="home--link">
                <button className="home--button">
                    &lt; explore the treasure box &gt;
                </button>
            </Link>
        </div>
    )
}
