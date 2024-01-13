import tenRules from "./files/rules.jsx";
import React from "react";
import "./style/Rules.css";


function build() {
    var myBuild = []
    for (var i = 0; i < tenRules.length; i++) {
        myBuild.push(<li>{tenRules[i]}</li>)
    }
    return myBuild;
}
function Rules() {
    return (
        <div>
            <p id="title">Rules</p>
            <ol id="dnote">{build()}</ol>
            <a id="dnote" className="mylink" href="https://www.world.rugby/the-game/laws/home">Link to full Laws of Rugby</a> 
        </div>
    )
}

export default Rules;