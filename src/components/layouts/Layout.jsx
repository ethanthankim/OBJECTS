import React from "react";
import KaWai from "./KaWai";
import Dione from "./Dione";
import Jado from "./Jado"

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
}