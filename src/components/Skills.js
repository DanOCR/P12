import "./Skills.css"
import Collapse from "./Collapse"
import France from "../images/France.png"
import England from "../images/England.png"
import Spain from "../images/Spain.png"
import Poland from "../images/poland.png"
import HTML from "../images/html.png"
import Css from "../images/css.png"
import Js from "../images/javascript.png"
import React from "../images/react.png"
import Sing from "../images/singer.png"
import Dance from "../images/dancing.png"
import Laugh from "../images/laugh.png"
import Cocktail from "../images/cocktail.png"

export default function Skills () {
    return (
        
        <div id="skills" className="skills">
            {/* <h1> Compétences </h1> */}
            <div className="collapses">
            <Collapse label="Front-end">
                <ul>
                    <li> <img src={HTML}/> </li>
                    <li> <img src={Css}/> </li>
                    <li> <img src={Js}/> </li>
                    <li> <img src={React}/> </li>
                    
                </ul>
            </Collapse>
            <article> En étudiant le développement grâce à OpenClassrooms, j'ai pu apprendre les langages fondamentaux que sont HTML, CSS et JavaScript.
                De plus, il m'a été permis de coder divers projets avec React, ainsi que Redux qui est encore pour moi tout récent. Je ne compte bien sûr
                pas en rester là, et souhaite en apprendre davantage.
            </article>
            <Collapse label="Langues">
                <ul>
                    <li> <img src={France} /> </li>
                    <li> <img src={England} /> </li>
                    <li> <img src={Spain} /> </li>
                    <li> <img src={Poland} className="poland"/> </li>
                </ul>
            </Collapse>
            <article> En plus du français, je maîtrise l'espagnol de niveau scolaire, et parfaitement l'anglais. C'est un avantage donc je peux tirer partie
                afin de communiquer sans difficulté avec une clientèle internationale. L'apprentissage du polonais est mon prochain objectif.
            </article>
            <Collapse label="Relationnel">
                <ul>
                    <li> <img src={Sing}/> </li>
                    <li> <img src={Dance}/> </li>
                    <li> <img src={Laugh}/> </li>
                    <li> <img src={Cocktail}/> </li>
                </ul>
            </Collapse>
            <article> La programmation c'est génial, mais je pense que les qualités humaines et les hobbies sont au moins aussi importants pour entretenir
                de bonnes relations avec les collègues ! De nature très sociable, je m'intègre facilement et
                m'intéresse à toutes sortes de sujets !
            </article>
            </div>
            

        </div>
    
    )
}