import logo from "./images/logo.png";
import "./style/Merch.css"
function Merch() {
    return (
        <div id="center">
            <p id="title">Buy Merch Here</p>
            <img src={logo} alt="Logo" id="logo"/>
            <a id="link" className="mylink" href="https://tytanrugby.com/collections/williams-college-rugby-football-club">Click this link</a>
        </div>
    )
}

export default Merch;