import qr from "./images/donateQR.png";
import "./style/Donate.css"

function Donate() {
    return (
        <div>
            <p id="dtitle">If you would like to donate to the team please venmo @johnsonaaaa.</p>
            <img src={qr} alt="Logo" id="qr"/>
            <a id="alink" className="mylink" href="https://account.venmo.com/u/johnsonaaaa">Scan the QR code or click this link</a>
            <p id="dnote">*Money donated will go to a myriad of things including social events, equipment, hosting this website,
             and making the club more accessible to all. Or reach out through out contact page for a more specific donation.</p>
        </div>
    )
}

export default Donate;
