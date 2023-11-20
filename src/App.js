import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import NavBar from "./components/NavBar";
import Erreur from "./pages/Erreur";
import Footer from "./components/Footer";
import Apartment from "./pages/Apartment";
import About from "./components/About";
import CV from "./components/CV";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/apartment/:id" element={<Apartment />} />
      </Routes>
    </div>
  );
}

export default App;
