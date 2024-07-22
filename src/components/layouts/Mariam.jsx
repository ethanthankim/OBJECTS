import React from "react";

export default function Mariam(props) {
    const {story} = props
    return (
        <section>
            <div className="section--fulltext">
                {story.slice(0,3)}
            </div>
            <div className="section--row">
                <img 
                    src={require("../../photos/Mariam/Mariam1.png")} 
                    alt="jewelry-box-outer" 
                    className="row--photo"
                />
                <img 
                    src={require("../../photos/Mariam/Mariam2.png")} 
                    alt="jewelry-box-inner" 
                    className="row--photo"
                />
            </div>
            <div className="section--fulltext">
                {story.slice(3)}
            </div>

        </section>
    )
}