import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Skills from "../components/Skills";
import Image from "../images/IMG.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("logements.json");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <About />
      <Gallery data={data} />
      <Skills />
      <Contact />
    </div>
  );
}
