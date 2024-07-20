import React from "react";

export default function Jado(props) {
    const {story} = props
    return (
        <section>
            <div className="section">
                <div className="section--text">
                    {story.slice(0,3)}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/Jado/Jado1.png")} className="section--photo"/>
                    <a 
                        className="details--author" 
                        href="https://www.veterans.gc.ca/en/remembrance/memorials/canadian-virtual-war-memorial/detail/2098691">Kenneth Manning Smith
                    </a>
                </div>
            </div>
            <div className="section--fulltext">
                {story.slice(3,5)}
            </div>
            <div className="section">
                <div className="section--gallery">
                    <img src={require("../../photos/Jado/Jado2.png")} className="section--photo"/>
                </div>
                <div className="section--text">
                    {story[5]}
                </div>
            </div>
            <div className="section--fulltext">
                {story.slice(6)}
            </div>
        </section>
    )
}