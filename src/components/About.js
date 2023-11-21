import "./About.css";
import "../responsive/About-mobile.css";
import Photo from "../images/Moi.jpg";

import NavBar from "./NavBar";
import OCR from "../images/Logo_OpenClassrooms.png";

export default function About() {
  const Ocr = () => {
    window.open("https://openclassrooms.com/fr/");
  };

  return (
    <header>
      <NavBar />
      <section>
        <div className="polaroid">
          <img src={Photo} alt="" />
        </div>
        <div className="about">
          <h1> GUZ Danovan </h1>
          <h2>
            {" "}
            Formé en développement web chez OpenClassrooms, je suis un nouveau
            passionné prêt à tout pour apprendre et progresser dans ce nouveau
            milieu.{" "}
          </h2>
          <img src={OCR} onClick={Ocr} alt="" />
        </div>
      </section>
    </header>
  );
}
