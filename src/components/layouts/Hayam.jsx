import React from "react";

export default function Hayam(props) {
    const {story} = props
    return (
        <section>
            <div className="section">
                <div className="section--text">
                    {story}
                </div>
                <div className="section--gallery">
                    <img 
                        src={require("../../photos/Hayam/Hayam1.png")} 
                        alt="sewing-machine-top" 
                        className="section--photo"
                    />
                    <img 
                        src={require("../../photos/Hayam/Hayam2.png")} 
                        alt="sewing-machine-side" 
                        className="section--photo"
                    />
                </div>
            </div>
        </section>
    )
}