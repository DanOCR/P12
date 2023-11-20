import "./Gallery.css";
import "../responsive/Gallery-mobile.css";
import { Card } from "./Card";

export default function Gallery({ data }) {

  return (
    <div id="portfolio" className="gallery">
      {data?.map((element, index) => (
        <div key={index} className="card-container">
          {" "}
          <Card
            title={element.title}
            id={element.id}
            cover={element.cover}
            description={element.description}
          />{" "}
        </div>
      ))}
    </div>
  );
}
