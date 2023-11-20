import "./Portfolio.css"
import Fox from "../images/Fox.png"
import { useNavigate } from "react-router-dom";


export default function Portfolio () {
  const projects = [
    {
      "title": "PROJET 1",
      "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "id": "1",
      "description": "Ce projet m'a permis d'apprendre le HTML/CSS/JavaScript d'une manière optimale, me permettant d'explorer une partie du potentiel de ce dernier."

    },
    {
        "title": "PROJET 2",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        "id": "2",
        "description": "Ce projet m'a permis d'apprendre le HTML/CSS/JavaScript d'une manière optimale, me permettant d'explorer une partie du potentiel de ce dernier."
    },
    {
        "title": "PROJET 3",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        "id": "3",
        "description": "Ce projet m'a permis d'apprendre le HTML/CSS/JavaScript d'une manière optimale, me permettant d'explorer une partie du potentiel de ce dernier."
    }
]
  const navigate = useNavigate();
  const project = () => navigate(`/${works.id}`);

  

    return (
    <div id="portfolio" className="portfolio">
        <h1> Les beaux projets </h1>
        <div className="projects">
        {works.map((work, index) => (
              <span className="work" key={index} onClick={project}>
                <img src={work.image} />
                <p> {work.title} </p>
              </span>
            ))}
        </div>
    </div>
    )}