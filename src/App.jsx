/* eslint-disable react/jsx-no-target-blank */
import Home from "./Home.jsx";
import About from "./About.jsx";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {useState} from "react";
import ServiciosResidenciales from "./ServiciosResidenciales.jsx";
import ServiciosComerciales from "./ServiciosComerciales.jsx";

const scrollToReference = (referenceId) => {
	const element = document.getElementById(referenceId);

	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
		});
	}
};

function App() {
	const [site, setSite] = useState("home");

	return (
		<div className="total-container" id="top">
			<Header
				text={
					<div>
						<a
							className="nav-text"
							onClick={() => setSite("serviciosResidenciales")}
						>
							{" "}
							Residenciales
						</a>
						<a
							className="nav-text"
							onClick={() => setSite("serviciosComerciales")}
						>
							Comerciales
						</a>
						<a className="nav-text" onClick={() => setSite("about")}>
							Sobre Nosotros
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=593991079118&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
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
					{site == "home" ? (
						<Home setSite={setSite} scrollToReference={scrollToReference} />
					) : site == "serviciosResidenciales" ? (
						<ServiciosResidenciales />
					) : site == "serviciosComerciales" ? (
						<ServiciosComerciales />
					) : (
						site == "about" && <About />
					)}
					<a
						id="whatsapp-link"
						href="https://api.whatsapp.com/send?phone=593991079118&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
						target="_blank"
					>
						<div id="whatsapp-btn">
							<WhatsAppIcon
								sx={{width: "45px", height: "45px", color: "#fff"}}
							/>
						</div>
					</a>
				</main>
			</div>
			<Footer
				text={
					<div>
						<a
							className="link-1 elementosFooter"
							onClick={() => {
								setSite("home");
								scrollToReference("top");
							}}
						>
							Home
						</a>
						<a
							className="elementosFooter"
							onClick={() => {
								setSite("serviciosResidenciales");
								scrollToReference("top");
							}}
						>
							Residenciales
						</a>
						<a
							className="elementosFooter"
							onClick={() => {
								setSite("serviciosComerciales");
								scrollToReference("top");
							}}
						>
							Comerciales
						</a>
						<a
							className="elementosFooter"
							onClick={() => {
								setSite("about");
								scrollToReference("top");
							}}
						>
							Sobre Nosotros
						</a>
						<a
							className="elementosFooter"
							href="https://api.whatsapp.com/send?phone=593991079118&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
							target="_blank"
						>
							Contáctanos
						</a>
					</div>
				}
			/>
		</div>
	);
}

export default App;
