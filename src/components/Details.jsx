// Filename - Details.jsx
import React from "react"

export default function Details(props) {
    function findSelected(objArray) {
        for (let i = 0; i < objArray.length; i++) {
            if (objArray[i].isSelected) {
                return objArray[i]
            }
        }
    }
    const selected = findSelected(props.objects)
    console.log(selected)
    return (
        <div className="details">
            <img 
                className="details--image"
                src={require(`../images/${selected.url}`)} 
                alt={selected.label} 
            />
        </div>
    )
}