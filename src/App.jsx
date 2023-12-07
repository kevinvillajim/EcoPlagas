/* eslint-disable react/jsx-no-target-blank */
import Home from "./Home.jsx";
import About from "./About.jsx";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

function App() {
  const [site, setSite] = useState("home");

  return (
    <div className="total-container">
      <Header
        text={
          <div>
            <a href="#" className="nav-text">
              {" "}
              Residenciales
            </a>
            <a href="#" className="nav-text">
              Comerciales
            </a>
            <a className="nav-text" onClick={() => setSite("about")}>
              Sobre Nosotros
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=593995031066&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
              target="_blank"
              className="nav-text"
            >
              Contáctanos
            </a>{" "}
          </div>
        }
      />
      <div className="border-total-container">
        <main>
          {site == "home" ? <Home /> : <About />}
          <a
            id="whatsapp-link"
            href="https://api.whatsapp.com/send?phone=593995031066&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
            target="_blank"
          >
            <div id="whatsapp-btn">
              <WhatsAppIcon
                sx={{ width: "45px", height: "45px", color: "#fff" }}
              />
            </div>
          </a>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
