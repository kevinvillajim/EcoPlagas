import "./App.css";
import { CardEnfoque } from "./components/CardEnfoque";

//icons

function ServiciosComerciales() {
	return (
		<>
			<div id="servicios-container">
				<div id="servicios-content">
					<h2>Servicios Comerciales</h2>
					<div className="servicios">
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales1.jpg"
							title="Restaurantes"
							text="La reputación de tu restaurante es tan valiosa como tus mejores platillos. Con nuestro servicio personalizado para restaurantes, nos aseguramos de que los clientes disfruten de una experiencia culinaria sin interrupciones. Mantenemos tu cocina y áreas de comedor libres de plagas, garantizando no solo la satisfacción de tus clientes, sino también el cumplimiento de los estándares de higiene más exigentes."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales2.jpg"
							title="Bodegas de Alimentos"
							text="En el mundo de la distribución de alimentos, la higiene lo es todo. Protege tu cadena de suministro con nuestro servicio especializado para bodegas de alimentos. Eliminamos cualquier riesgo de contaminación, asegurando la calidad y seguridad de tus productos. Nuestra atención a los detalles y métodos de control avanzados garantizan un entorno libre de plagas para mantener tus existencias en perfecto estado."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales3.jpg"
							title="Fábricas"
							text="En el corazón de la producción, las plagas no son bienvenidas. Nuestro enfoque integral para fábricas aborda los desafíos específicos de estos entornos industriales. Protegemos tus instalaciones y maquinaria, asegurando un ambiente de trabajo seguro y libre de interrupciones. La eficiencia de tu producción es nuestra prioridad."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales4.jpg"
							title="Negocios"
							text="Cada negocio tiene sus propias necesidades, y nuestro servicio adaptable se ajusta perfectamente a ellas. Ya sea una tienda pequeña o una empresa más grande, protegemos tus espacios comerciales para que puedas centrarte en lo que haces mejor. Nuestros métodos de control de plagas son discretos y efectivos, garantizando que tu negocio siga floreciendo sin contratiempos."
							textBtn="Solicitar visita técnica"
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales5.jpg"
							title="Oficinas"
							text="Un ambiente de trabajo saludable es esencial para la productividad y el bienestar de tus empleados. Con nuestro servicio para oficinas, nos encargamos de eliminar cualquier distracción que las plagas puedan causar. Desde oficinas individuales hasta espacios de trabajo compartidos, creamos un entorno libre de plagas para que tu equipo se enfoque en lo importante: el éxito de tu empresa."
							textBtn="Solicitar visita técnica"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiciosComerciales;
