import "./CV.css"
import Curriculum from "../images/Curriculum.png"
import NavBar from "./NavBar"
import House from "../images/House.jpg"

const Home = () => {
    window.location.href = '/';
  }

 const Pdf = () => {
    
 }

export default function CV() {
    return (
    <>
    <div className="page">
        <div>
            <img src={House} onClick={Home} />
        </div>
        <img src={Curriculum} />
    </div>
    </> ) }