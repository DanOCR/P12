import "./Contact.css";
import "../responsive/Contact-mobile.css";
import Mail from "../images/Email.png";
import Phone from "../images/Phone.png";
import Discord from "../images/Discord.png";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="pulse"></div>
      <div className="no"></div>
      <div className="mail">
        <img src={Mail} alt="" />
        <p> Danovan.Guz@laposte.net </p>
      </div>
      <div className="phone">
        <img src={Phone} alt="" />
        <p> 07 81 68 51 36 </p>
      </div>
      <div className="discord">
        <img src={Discord} alt="" />
        <p> Jinx#8388 </p>
      </div>
    </footer>
  );
}
