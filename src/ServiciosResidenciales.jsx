import "./App.css";
import { CardEnfoque } from "./components/CardEnfoque";

//icons

function ServiciosResidenciales() {
	return (
		<>
			<div id="servicios-container">
				<div id="servicios-content">
					<h2>Servicios Residenciales</h2>
					<div className="servicios">
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/residenciales1.jpg"
							title="Casas"
							text="Experimenta la tranquilidad que te mereces en tu hogar. Nuestro servicio residencial está diseñado específicamente para proteger tu casa, eliminando plagas de manera efectiva y segura. Nos encargamos de mantener tu hogar libre de cualquier amenaza. Con nuestro enfoque proactivo y productos de última generación, garantizamos un entorno seguro para tu familia."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/residenciales2.jpg"
							title="Departamentos"
							text="Vivir en un departamento no debería significar convivir con plagas. Nuestros servicios están adaptados a las necesidades particulares de espacios compartidos. Con soluciones personalizadas y productos de vanguardia, nos aseguramos de que cada rincón de tu departamento esté protegido, proporcionándote la paz que mereces en tu hogar vertical."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/residenciales3.jpg"
							title="Conjuntos Habitacionales"
							text="Protege la armonía de tu comunidad con nuestro servicio especializado para conjuntos habitacionales. Entendemos la importancia de mantener áreas comunes libres de plagas, y nuestro equipo está comprometido a garantizar un ambiente limpio y seguro para todos los residentes. La prevención es clave, y nuestras soluciones van más allá, asegurando la tranquilidad a largo plazo."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/residenciales4.jpg"
							title="Edificios"
							text="La altura no es un obstáculo para nosotros. Ofrecemos servicios integrales para edificios, desde los niveles más bajos hasta los más altos. Nuestra experiencia en el control de plagas en entornos verticales nos posiciona como líderes en el sector. Protegemos no solo los espacios habitables, sino también las áreas comunes, brindando una defensa completa contra cualquier amenaza."
							textBtn="Solicitar visita técnica"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiciosResidenciales;
