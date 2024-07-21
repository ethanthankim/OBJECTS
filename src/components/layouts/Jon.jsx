import React from "react";

export default function Jon(props) {
    const {story} = props
    return (
        <section>
            <div className="section" >
                <div className="section--text">
                    {story.slice(0,3)}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/Jon/Jon1.png")} />
                </div>
            </div>
            <div className="section--fulltext">
                {story.slice(3,6)}
            </div>
            <div className="section" >
                <div className="section--text">
                    <img src={require("../../photos/Jon/Jon2.png")} />
                    {story.slice(6)}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/Jon/Jon3.png")} />
                </div>
            </div>
        </section>
    )
}