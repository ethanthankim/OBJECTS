import React from "react";

export default function KaWai(props) {
    const {story} = props;
    return (
        <section>
            <div className="section">
                <div className="section--text">
                    {story.slice(0,3)}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/KaWai/KaWai1.png")} className="section--photo"/>
                </div>
            </div>
            <div className="section--fulltext">
                {story.slice(3,5)}
            </div>
            <div className="section">
                <div className="section--gallery">
                    <img src={require("../../photos/KaWai/KaWai2.png")} className="section--photo"/>
                    <img src={require("../../photos/KaWai/KaWai3.png")} className="section--photo"/>
                </div>
                <div className="section--text">
                    {story.slice(5,9)}
                </div>
            </div>
            <div className="section">
                <div className="section--text">
                    {story.slice(9,11)}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/KaWai/KaWai4.png")} className="section--photo"/>
                </div>
            </div>
        </section>
    )
}