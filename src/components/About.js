import "./About.css";
import "../responsive/About-mobile.css";
import Photo from "../images/Moi.jpg"
import Remote from "../images/Remote.png"
import Movie from "../images/pop-corn.png"
import Metal from "../images/heavy-metal.png"
import Gallery from "./Gallery";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";
import NavBar from "./NavBar";
import OCR from "../images/Logo_OpenClassrooms.png";


export default function About () {

const navigate = useNavigate();
const Ocr = () => {
  window.open("https://openclassrooms.com/fr/");
}
    
    return (
      <header>
        <NavBar />
        <section>
          <div className="polaroid">
            <img src={Photo} />
          </div>
          <div className="about">
            <h1> GUZ Danovan </h1>
            <h2> Formé en développement web chez OpenClassrooms, je suis un nouveau passionné
              prêt à tout pour apprendre et progresser dans ce nouveau milieu. </h2>
          </div>


        </section>
      </header>



    )
}