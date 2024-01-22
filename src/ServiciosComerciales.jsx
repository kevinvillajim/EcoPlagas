import "./App.css";
import {CardEnfoque} from "./components/CardEnfoque";

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
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20restaurant."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales2.jpg"
							title="Bodegas de Alimentos"
							text="En el mundo de la distribución de alimentos, la higiene lo es todo. Protege tu cadena de suministro con nuestro servicio especializado para bodegas de alimentos. Eliminamos cualquier riesgo de contaminación, asegurando la calidad y seguridad de tus productos. Nuestra atención a los detalles y métodos de control avanzados garantizan un entorno libre de plagas para mantener tus existencias en perfecto estado."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20bodega."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales3.jpg"
							title="Fábricas"
							text="En el corazón de la producción, las plagas no son bienvenidas. Nuestro enfoque integral para fábricas aborda los desafíos específicos de estos entornos industriales. Protegemos tus instalaciones y maquinaria, asegurando un ambiente de trabajo seguro y libre de interrupciones. La eficiencia de tu producción es nuestra prioridad."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20fábrica."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales4.jpg"
							title="Negocios"
							text="Cada negocio tiene sus propias necesidades, y nuestro servicio adaptable se ajusta perfectamente a ellas. Ya sea una tienda pequeña o una empresa más grande, protegemos tus espacios comerciales para que puedas centrarte en lo que haces mejor. Nuestros métodos de control de plagas son discretos y efectivos, garantizando que tu negocio siga floreciendo sin contratiempos."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20negocio."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales5.jpg"
							title="Oficinas"
							text="Un ambiente de trabajo saludable es esencial para la productividad y el bienestar de tus empleados. Con nuestro servicio para oficinas, nos encargamos de eliminar cualquier distracción que las plagas puedan causar. Desde oficinas individuales hasta espacios de trabajo compartidos, creamos un entorno libre de plagas para que tu equipo se enfoque en lo importante: el éxito de tu empresa."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20oficina."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales6.jpg"
							title="Hospitales y Clínicas"
							text="En el ámbito delicado de la salud, la presencia de plagas no tiene cabida. Nuestro servicio para hospitales y clínicas va más allá de la eliminación; es un compromiso con la seguridad sanitaria. Comprendemos la importancia de mantener instalaciones médicas impecables. Desde salas de espera hasta áreas de tratamiento, nos encargamos de cada detalle. Con productos seguros y enfoques especializados, creamos un escudo confiable para pacientes y personal médico, garantizando un entorno de atención sin amenazas."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20hospital%20o%20clínica."
						/>
						<CardEnfoque
							img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/comerciales7.jpg"
							title="Clínicas dentales"
							text="La precisión y la esterilidad son esenciales en el mundo dental, y en tu clínica, garantizamos que cada rincón esté protegido. Nos aseguramos de que las plagas no representen ninguna amenaza para tu entorno, desde la sala de espera hasta las áreas de tratamiento. Cumplimos con los estándares más rigurosos de higiene, brindando la confianza necesaria para que tus pacientes reciban atención dental en un ambiente libre de preocupaciones."
							textBtn="Solicitar visita técnica"
							link="https://api.whatsapp.com/send?phone=593991079118&text=Hola,%20me%20gustaría%20solicitar%20una%20visita%20técnica%20para%20mi%20clínica%20dental."
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiciosComerciales;
