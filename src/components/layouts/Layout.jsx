/* Filename - Layout.jsx */
import React from "react";
import KaWai from "./KaWai";
import Dione from "./Dione";
import Jado from "./Jado"
import Jon from "./Jon"
import Hayam from "./Hayam"
import Mariam from "./Mariam"

export default function Layout(props) {
    if (props.owner === "KaWai") {
        return <KaWai story={props.story} />
    }
    if (props.owner === "Dione") {
        return <Dione story={props.story} />
    }
    if (props.owner === "Jado") {
        return <Jado story={props.story} />
    }
    if (props.owner === "Jon") {
        return <Jon story={props.story} />
    }
    if (props.owner === "Hayam") {
        return <Hayam story={props.story} />
    }
    if (props.owner === "Mariam") {
        return <Mariam story={props.story} />
    }
}