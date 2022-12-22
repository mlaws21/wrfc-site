import SimpleImageSlider from "react-simple-image-slider";
import './style/Home.css';
import img1 from './images/1.jpg';
import img2 from './images/2.png';
import img3 from './images/3.png';
import news from './files/news.jsx';
import image from './files/newsImage.png';


const images = [
    img1, img2, img3,
    // { url: "images/4.jpg" },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];

function Home() {
    return (
        <body>
            <p id='title'>Williams College Rugby Football Club</p>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            <div id='news'>
                <p id='newsHead'>Recent News</p>
                <img src={image} alt='Coach Tim and Flat Daddy' id='newsImage'></img>
                <p id='newsBody'>{news}</p>
            </div>
        </body>

    )
}

export default Home;