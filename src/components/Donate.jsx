import qr from "./images/donateQR.png";
import "./style/Donate.css"

function Donate() {
    return (
        <div>
            <p id="title">If you would like to donate to the team please venmo @Matt-Laws-11.</p>
            <img src={qr} alt="Logo" id="qr"/>
            <a id="alink" href="https://venmo.com/code?user_id=3061446455853056721">Scan the QR code or click this link</a>
            <p id="note">*Money donated will go to a myriad of things including equipment, hosting this website,
             and making the club more accessible to all. Or reach out through out contact page for a more specific donation.</p>
        </div>
    )
}

export default Donate;
