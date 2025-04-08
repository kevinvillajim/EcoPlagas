/* eslint-disable react/jsx-no-target-blank */
import PropTypes from "prop-types";
import {Services} from "./components/Services";
import {CardEnfoque} from "./components/CardEnfoque";
import {WhyCard} from "./components/WhyCard";
//Icons
import HandshakeIcon from "@mui/icons-material/Handshake";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
//-----
import "./App.css";

function Home({setSite, scrollToReference}) {
	return (
		<>
			<div id="carouselExampleDark" className="carousel carousel-dark slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<img
							id="carrousel-item-active-img"
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/cucarachas.jpg"
							className="d-block w-100 carrusel img-carrusel"
							alt="cucarachas"
						/>
						<div
							id="carrousel-text"
							className="carousel-caption d-md-block b infoCarrusel"
						>
							<h5
								className="text-white carrouselText
                    "
							>
								Problemas con cucarachas?
							</h5>
							<p
								className="text-white carrouselText
                    "
							>
								Somos la primera empresa en Ecuador especializada en exterminio
								del 100% de cucarachas, ninfas y sus huevecillos. No sólo
								controlamos... Las exterminamos.
							</p>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/ratas.png"
							className="d-block w-100 carrusel img-carrusel"
							alt="ratas"
						/>
						<div className="carousel-caption d-md-block b infoCarrusel">
							<h5 className="text-white carrouselText">Roedores?</h5>
							<p className="text-white carrouselText">
								¡Despídete de los roedores para siempre! Nuestro servicio de
								eliminación es rápido, seguro y eficaz. Recupera tu hogar o
								negocio librandote de las plagas!
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/hormigas.webp"
							className="d-block w-100 carrusel img-carrusel"
							alt="hormigas"
						/>
						<div className="carousel-caption d-md-block b infoCarrusel">
							<h5
								className="text-white carrouselText
                    "
							>
								Hormigas!!
							</h5>
							<p className="text-white carrouselText">
								Liberate del asedio de las hormigas. nosotros, no solo las
								detenemos, las erradicamos por completo. Tu paz y comodidad son
								nuestra prioridad.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Anterior</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon next-carrusel"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Proximo</span>
				</button>
			</div>
			<div id="aval-container">
				<img
					src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/divisorInvertido.png"
					className="divisor"
					alt="divisor"
				></img>
				<h5 className="aval">Con el aval de:</h5>
				<div className="iconos">
					<a href="https://npmapestworld.org/">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen1.png"
							className="imgBox"
							alt="organismos-control-NPMA"
						></img>
					</a>
					<a href="https://www.who.int/">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen2.jpg"
							className="imgBox2"
							alt="organismos-control-WHO"
						></img>
					</a>
					<a href="https://espanol.epa.gov/">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen3.png"
							className="imgBox2"
							alt="organismos-control-EPA"
						></img>
					</a>
					<a href="https://www.controlsanitario.gob.ec/">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen4.png"
							className="imgBox imgboxe"
							alt="organismos-control-Ecuador-RCVS"
						></img>
					</a>
					<a href="https://www.ambiente.gob.ec/">
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen5.png"
							className="imgBox"
							alt="organismos-control-Ecuador-ministerio-de-ambiente"
						></img>
					</a>
				</div>
				<img
					src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/divisor.png"
					className="divisor"
					alt="divisor"
				></img>
			</div>
			<div id="eco-container" className="contBot d-flex justify-content-evenly">
				<div id="eco-info" className="col d-flex tituloBoton">
					<h2 className="text-center text-white">
						ELIMINAMOS LA PLAGA CON UN TRATAMIENTO EFICAZ SIN UTILIZACIÓN DE
						PRODUCTOS TÓXICOS
					</h2>
					<a
						className="btn btn-light d-block mx-auto mb-4 contacto"
						href="https://api.whatsapp.com/send?phone=593991079118&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
						target="_blank"
					>
						Solicita inspección gratuita
					</a>
				</div>
				<div id="eco-icons-container" className="row iconosInfo">
					<div className="col-md-4">
						<div className="text-center mb-4">
							<img
								className="img-fluid eco-icons-img"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoMascotas.svg"
								alt="Icono salud personas y mascotas"
							/>
						</div>
						<h6 className="text-center text-white">
							Nos preocupamos por la salud de personas y mascotas
						</h6>
					</div>
					<div className="col-md-4">
						<div className="text-center mb-4">
							<img
								className="img-fluid eco-icons-img"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoPlantas.svg"
								alt="Icono respeto al medio ambiente"
							/>
						</div>
						<h6 className="text-center text-white">
							Nos preocupamos por el medio ambiente
						</h6>
					</div>
				</div>
			</div>
			<img
				src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/divisorInvertido.png"
				className="divisor"
				alt="divisor"
			></img>
			<div className="servicesContainer">
				<h3 className="servicios aval">Servicios profesionales</h3>
				<div id="services">
					<Services
						imag="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/servicios1.jpg"
						alt="ratas"
						title="Roedores"
						content="Exterminio total de Ratas, ratones y todo tipo de roedores."
					/>
					<Services
						imag="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/servicios2.jpg"
						alt="cucarachas"
						title="Cucarachas"
						content="Exterminio total de cucarachas en hogares, hoteles, negocios de alimentos y comercios."
					/>
					<Services
						imag="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/servicios3.jpg"
						alt="hormigas"
						title="Hormigas"
						content="Eficiencia y seguridad en eliminación de hormigas y todo su rastro."
					/>
					<Services
						imag="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/servicios4.jpg"
						alt="voladores"
						title="Insectos voladores"
						content="Libérate de los molestos y contaminantes insectos voladores."
					/>
					<Services
						imag="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/servicios5.jpg"
						alt="desinfeccion"
						title="Desinfección de ambientes"
						content="Para un espacio seguro y saludable solicita nuestros servicios profesionales."
					/>
				</div>
			</div>
			<img
				src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/divisor.png"
				className="divisor"
				alt="divisor"
			></img>
			<div id="why-container">
				<h3 className="sub-title">
					Por que <b className="title1">ECO PLAGAS</b> es la mejor opción?
				</h3>
				<div className="why-card-container2">
					<WhyCard
						img={
							<EmojiEventsIcon
								sx={{
									color: "rgb(77, 181, 213)",
									width: "120px",
									height: "120px",
								}}
							/>
						}
						img2={
							<img
								className="img2"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why1.jpg"
							/>
						}
						title="Beneficios de ECO PLAGAS"
						text={`1)  Obtienes el control de la plaga desde la primera aplicación. 
         2)  Productos totalmente amigables con el ambiente.
         3)  Después del servicio obtendrás un certificado de control de plagas avalada por la agencia de regulación de control sanitario para permiso de funcionamiento y Control o inspecciones sanitarias de cualquier organismo de control.`}
					/>
				</div>
				<div id="why-card-container">
					<WhyCard
						img={
							<HandshakeIcon
								sx={{
									color: "rgb(77, 181, 213)",
									width: "120px",
									height: "120px",
								}}
							/>
						}
						img2={
							<img
								className="img2"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why2.jpg"
							/>
						}
						title="Ética y Transparencia"
						text="Creemos en la honestidad y transparencia en cada paso. Te explicamos detalladamente nuestro proceso, para que estés completamente informado y tranquilo durante todo el procedimiento sin novedades, sin sorpresas."
					/>
					<WhyCard
						img={
							<MilitaryTechIcon
								sx={{
									color: "rgb(77, 181, 213)",
									width: "120px",
									height: "120px",
								}}
							/>
						}
						img2={
							<img
								className="img2"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why3.jpg"
							/>
						}
						title="Tecnología de Vanguardia"
						text="No somos solo una empresa, somos un compromiso. Garantizamos la eliminación completa de plagas molestas y peligrosas de tu hogar o negocio. Tu satisfacción es nuestra prioridad número uno."
					/>
					<WhyCard
						img={
							<LocalFloristIcon
								sx={{
									color: "rgb(77, 181, 213)",
									width: "120px",
									height: "120px",
								}}
							/>
						}
						img2={
							<img
								className="img2"
								src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why4.jpg"
							/>
						}
						title="Productos de priméra categoría"
						text="Nuestros productos son los mejores del mercado. Utilizan la última tecnología, eliminando plagas sin dañar el medio ambiente, las plantas, los animales ni a las personas. Tu seguridad es nuestra responsabilidad."
					/>
				</div>
			</div>
			<img
				id="divisor2"
				className="divisor"
				alt="divisor"
				src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/separador2.png"
			/>
			<div id="enfoque-clientes-total">
				<h3 className="sub-title">Tipos de servicio</h3>
				<div id="enfoque-clientes-container">
					<CardEnfoque
						img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/clientes1.jpg"
						title="Residenciales"
						text="En un mundo donde la tranquilidad de tu hogar es más valiosa que nunca, aquella tranquilidad es transformada en miedo, asco y más importante, un foco de enfermedades que pueden afectar a ti y los tuyos. Durante 2 años hemos sido guardianes silenciosos de hogares como el tuyo, protegiéndolos de las plagas de manera segura y efectiva. Nuestros productos son más que simples soluciones; son promesas de seguridad para tu familia, mascotas y para el medio ambiente que todos compartimos."
						textBtn="Ver mas"
						setSite={setSite}
						scrollToReference={scrollToReference}
						site={"serviciosResidenciales"}
					/>
					<CardEnfoque
						img="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/clientes2.jpg"
						title="Comerciales"
						text="En el mundo competitivo de los negocios, cada detalle cuenta.
                  La presencia de plagas no solo puede ser molesta, sino también
                  un duro golpe para la reputación de tu negocio, empresa o
                  fábrica, generando silenciosamente perdidas importantes. Somos
                  líderes en la industria del control de plagas, y estamos aquí
                  para proteger lo que has construido con tanto esfuerzo.
                  Nuestros productos son más que soluciones, son garantías de
                  seguridad para tus empleados, clientes y tu negocio en
                  general."
						textBtn="Ver mas"
						setSite={setSite}
						scrollToReference={scrollToReference}
						site={"serviciosComerciales"}
					/>
				</div>
			</div>
			<div id="card-invitation-container" className="card text-center">
				<div className="card-header"></div>
				<div className="card-body">
					<h3 className="card-title">Satisfacción garantizada</h3>
					<p className="card-text">
						Ofrecemos los productos líderes en Latinoamérica, y un equipo
						altamente capacitado para superar tus expectativas. Garantizamos
						total satisfacción en cada servicio. <br /> Tu confianza es nuestra
						mayor motivación.
					</p>
					<a
						href="https://api.whatsapp.com/send?phone=593991079118&text=Buenas%20tardes,%20me%20gustar%C3%ADa%20solicitar%20una%20visita%20t%C3%A9cnica%20para%20control%20de%20plagas."
						className="btn boto"
					>
						Contáctanos
					</a>
				</div>
				<div className="card-footer text-body-secondary"></div>
			</div>
		</>
	);
}

export default Home;

Home.propTypes = {
	setSite: PropTypes.func,
	scrollToReference: PropTypes.func,
};
