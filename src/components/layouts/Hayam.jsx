import React from "react";

export default function Hayam(props) {
    const {story} = props
    return (
        <section>
            <div className="section--fulltext">
                {story}
            </div>
        </section>
    )
}