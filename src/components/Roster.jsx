import React from "react";
import "./style/Roster.css";
import allPeople from "./files/roster.jsx";
function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item);});
    return images;
}

const images = importAll(require.context('./images/roster', false, /\.png/));


class Person extends React.Component {
    render() {
        const last = this.props.name.split(" ")[1] + ".png";
        console.log(last)

        return (
            <div id="person">
                <img className="pic" src={images[last]} alt={last}/>
                <div id="info">
                    <p id="name">{this.props.name}</p>
                    <p>{this.props.onField}</p>
                    <p>{this.props.offField}</p>
                    <p>{this.props.major}</p>

                </div> 
            </div>
        )
    }
}
function build() {
    var all = [];
    for (var i = 0; i < allPeople.length; i++) {
        all.push(<Person name={allPeople[i][0]} onField={allPeople[i][1]} offField={allPeople[i][2]} major={allPeople[i][3]} />)
    }
    return (all);
}
function Roster() {
    
    return (
        <div>
            <p id="title">Current Roster</p>
            {build()}
        </div>
    )
}

export default Roster;