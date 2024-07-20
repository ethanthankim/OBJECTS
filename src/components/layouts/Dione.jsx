import React from "react";

export default function Dione(props) {
    const {story} = props;
    return (
        <section>
            <div className="section">
                <div className="section--text">
                    {story.slice(0,3)}
                </div>
                <img src={require("../../photos/Dione/Dione1.png")} className="section--photo"/>
            </div>
            <div className="section--fulltext" >
                {story[3]}
            </div>
            <div className="section">
                <div className="section--text">
                    <img src={require("../../photos/Dione/Dione2.png")} className="section--photo"/>
                    {story[4]}
                </div>
                <div className="section--gallery">
                    <img src={require("../../photos/Dione/Dione3.png")} className="section--photo"/>
                    <img src={require("../../photos/Dione/Dione4.png")} className="section--photo"/>
                </div>
            </div>
        </section>
    )
}