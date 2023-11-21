import "./Card.css";
import "../responsive/Card-mobile.css";

import { useState } from "react";

export const Card = ({ title, cover, description }) => {
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
    if (cover === "./OhMyFood.png") {
      window.open("https://github.com/DanOCR/ohmyfood");
    } else if (cover === "./Kasa.png") {
      window.open("https://github.com/DanOCR/Kasa");
    } else {
      window.open(
        "https://docs.google.com/presentation/d/1hpd1u0CdDPobAY2GFtserFJ3dLYXPmqM6708W8cHkFI/edit#slide=id.g228deeb73c6_1_24"
      );
    }
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img src={cover} alt="" />
        <h1> {title} </h1>
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="slider">
                <img src={cover} onClick={GitHub} alt="" />
              </div>
              <h1> {title} </h1>
              <p> {description} </p>

              <button onClick={toggleModal} className="close-modal">
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
