import React from "react";
import "./style/Contact.css";
import importantPeople from "./files/currContacts.jsx";
function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item);});
    return images;
}

const images = importAll(require.context('./images/roster', false, /\.jpeg/));


class Person extends React.Component {
    render() {
        const last = this.props.name.split(" ")[1] + ".jpeg";
        console.log(last)

        return (
            <div id="aperson">
                <img id="pic" src={images[last]} alt={last}/>
                <div id="ainfo">
                    <p id="name">{this.props.name}</p>
                    <p>{this.props.onField}</p>
                    <p>{this.props.offField}</p>
                    <p>{this.props.job}</p>
                    <p>{this.props.email}</p>

                </div> 
            </div>
        )
    }
}
 
function Contact() {
        const pres = <Person name={importantPeople[0][0]} onField={importantPeople[0][1]} offField={importantPeople[0][2]} job={importantPeople[0][3]} email={importantPeople[0][4]} />
        const alum = <Person name={importantPeople[1][0]} onField={importantPeople[1][1]} offField={importantPeople[1][2]} job={importantPeople[1][3]} email={importantPeople[1][4]} />
        const chief = <Person name={importantPeople[2][0]} onField={importantPeople[2][1]} offField={importantPeople[2][2]} job={importantPeople[2][3]} email={importantPeople[2][4]} />
        const web = <Person name={importantPeople[3][0]} onField={importantPeople[3][1]} offField={importantPeople[3][2]} job={importantPeople[3][3]} email={importantPeople[3][4]} />
        const dev = <Person name={importantPeople[4][0]} onField={importantPeople[4][1]} offField={importantPeople[4][2]} job={importantPeople[4][3]} email={importantPeople[4][4]} />

        return (
            <div className="whole">
                <p id="title">Contact</p>
                {pres}
                {alum}
                {chief}
                {web}
                {dev}
                {/* <Person name={importantPeople[][0]} onField={importantPeople[][1]} offField={importantPeople[][2]} job={importantPeople[][3]} /> */}
            </div>
        )
    }


export default Contact;