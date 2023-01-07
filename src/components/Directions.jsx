import './style/Directions.css'

function Directions() {
    return (
        <div>
            <p id="title">Directions to Home Pitch</p>
            <iframe id="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.0287047863192!2d-73.19441778726231!3d42.71999303877614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba24cd4777f3%3A0xc6381270f2569fa9!2sMen&#39;s%20Rugby%20Pitch!5e0!3m2!1sen!2sus!4v1671733329503!5m2!1sen!2sus" width="675" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div id="address">
                <a href="https://goo.gl/maps/P5maKy3nTqs3A6wS8" class="">Men's Rugby Pitch, Stetson Rd, Williamstown, MA 01267</a>
            </div>

        </div>
    )
}

export default Directions;