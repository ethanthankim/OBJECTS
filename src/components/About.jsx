import React from "react"
import Navbar from "./Navbar"

export default function About() {
    return (
        <div>
            <Navbar darkmode={false} />
            <div className="about">
                <h1 className="title">About Natsukashii</h1>
                <div className="about--text">
                    <p>
                        "Natsukashii" is a Japanese word used when something evokes a fond or sentimental memory from the past, which elicits a warm and poignant feeling within. Unlike "nostalgia" in English, natsukashii is not related to a feeling tinged with sadness or longing.
                    </p>
                    <p>
                        This project was created for the Digital Publishing elective course (SS2024) of the Master of Digital Media Program at Toronto Metropolitan University. We hope to create a digital "treasure box", through collecting and telling stories of memorable objects from different people, guide you through an unique experience of resonance, reflection and empowerment.
                    </p>

                    <h4>Our Team:</h4>
                    <ul className="about--team">
                        <li>Writing & Editing - Crystal Chan, Maha Toeima</li>
                        <li>Photography - Crystal Chan</li>
                        <li>Illustration - Julie Wu</li>
                        <li>UI/UX Design - Sam Dias, Evelyn, Jon</li>
                        <li>Web Development - Ethan Kim</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}