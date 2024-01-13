import SimpleImageSlider from "react-simple-image-slider";
import './style/Home.css';
import img1 from './images/slideshow/1.jpg';
import img2 from './images/slideshow/2.jpg';
import img3 from './images/slideshow/3.jpg';
import img4 from './images/slideshow/4.jpg';
import news from './files/news.jsx';
import image from './images/newsImage.png';


const images = [
    img1, img2, img3, img4,
    // { url: "images/4.jpg" },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];

function Home() {
    return (
        <body>
            <p id='title'>Williams Rugby Football Club</p>
                <div id="slider">
                    <SimpleImageSlider
                    width={"60vw"}
                    height={"35vw"}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    />
                </div>
                
            <div id='news'>
                <p id='newsHead'>Recent News</p>
                <img src={image} alt='Coach Tim and Flat Daddy' id='newsImage'></img>
                <p id='newsBody'>{news}</p>
            </div>
        </body>

    )
}

export default Home;