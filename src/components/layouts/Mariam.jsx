import React from "react";

export default function Mariam(props) {
    const {story} = props
    return (
        <section>
            <div className="section--fulltext">
                {story}
            </div>
        </section>
    )
}