import "./Card.css";
import "../responsive/Card-mobile.css";
import Carousel from "./Carousel/Carousel"
import Close from "../images/Close.png"

// export const Card = ({ title, cover, id }) => {

import { useState } from "react";

export const Card = ({ title, cover, description}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const GitHub = () => {
    window.open("https://github.com/DanOCR?tab=repositories");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img src={cover} />
        <h1> {title} </h1>
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="slider">
                <img src={cover} onClick={GitHub} />
                
              </div>
              <h1> {title} </h1>
              <p> {description} </p>
             
              <button src={Close} onClick={toggleModal} className="close-modal">
                {" "}
                X{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
