import React from "react"

export default function Title(props) {
    
    const style= {
        color: props.color
    }
    return (
        <div id="home--title" className={`fade-in ${props.vis ? 'visible' : ''}`}style={style}>
            <h3>natsukashii</h3>
            <hr />
            <h3>objects holding moments in time</h3>
        </div>
    )
}