import "./App.css";
import {WhyCard} from "./components/WhyCard";

//icons
import AirIcon from "@mui/icons-material/Air";
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";
import WarningIcon from "@mui/icons-material/Warning";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

function About() {
	return (
		<>
			<div id="about-container">
				<div id="about-content">
					<img
						src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/cucaracha1.jpg"
						alt="especializados_en_cucarachas"
						className="about-img"
					/>
					<h1 className="title1 title-main-about">
						¡AHORA EN ECUADOR! ECOPLAGAS
					</h1>
					<h5 className="title2 sub-title-main-about">
						La primera empresa especializada en el exterminio total de
						cuacrachas.
					</h5>
					<p>
						Somos una empresa que cuenta con más de 10 años de experiencia
						especializada en el control de cucarachas, gracias a nuestro equipo
						de investigación e ingeniería hemos desarrollado una poderosa
						formulación patentada, siendo esta una{" "}
						<strong>suspensión encapsulada</strong> en base agua, conformada por{" "}
						<i>millones de diminutas microcápsulas</i>, de ingrediente activo
						que es absorbido por los materiales presentes en la construcción,
						como madera, paredes, cerámicas planchas de acero, vidrio, etc.
						Presentes a nivel domiciliario, restaurantes, hoteles, cocinas de
						patios de comidas, etc. Esta{" "}
						<strong>permanece activa por tres meses</strong> , para atacar por
						contacto e ingestión a la plaga objetivo, y ellos a su vez,
						retrasmiten al resto de la población que se encuentra en sus
						refugios , de esta manera{" "}
						<strong>
							garantizamos el exterminio del 100% de esta indeseada plaga.
						</strong>
						<br />
						<br />
						<strong>Dicha formula:</strong>
						<br />
						<div className="why-container">
							<WhyCard
								img={
									<AirIcon
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
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why5.png"
									/>
								}
								title="No huele"
								text=""
							/>
							<WhyCard
								img={
									<FormatColorResetIcon
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
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why6.png"
									/>
								}
								title="No mancha las paredes ni materiales"
								text=""
							/>
							<WhyCard
								img={
									<WarningIcon
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
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why7.png"
									/>
								}
								title="No es tóxico para seres humanos ni mascotas"
								text=""
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
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/why8.png"
									/>
								}
								title="Es amigable con el medio ambiente"
								text=""
							/>
						</div>
					</p>
				</div>
				<div id="about-content-text">
					<h2 className="title1">
						Cucaracha alemana: resistencia y técnicas de control
					</h2>
					<h4 className="title2">
						En Ecuador, la cucaracha Alemana es por lejos la especie más
						propagada
					</h4>
					<img
						src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/cucaracha2.jpg"
						alt="especializados_en_cucarachas_2"
						className="about-img"
					/>
					<p>
						La cucaracha alemana ─cuyo nombre científico es Blatella germanica─
						es un insecto que vive altamente asociado a las actividades humanas,
						es una plaga sinantrópica es decir, que ha evolucionado para
						adaptarse a entornos urbanos, y por desgracia, es una de las plagas
						más difíciles de controlar. Estos animales representan un gran
						peligro para la salud, ya que transmiten microbios y virus
						patógenos, además de estar vinculadas al síndrome asmático de muchas
						personas. La evolución de la cucaracha alemana y el uso de diversos
						grupos químicos de insecticidas, que hemos utilizado durante décadas
						para su control, han tenido como consecuencia, debido a su alta
						adaptabilidad, una fuerte resistencia a los insecticidas, aumentando
						aún más la dificultad para eliminarlas. Para su combate eficaz es
						necesario estrategias de control, como parte de un plan para Manejo
						Integrado de Plagas (MIP), el control químico es una parte
						fundamental, pero al integrarlo junto a diferentes modos de acción y
						tipos de formulación garantizan la erradicación en las poblaciones
						plaga, en lugar de utilizar una sola formulación o único modo de
						acción lo cual suele ser ineficaz o en el mejor de los casos
						controlando por un tiempo, pero nunca logrando la eliminación total
						de la plaga.
					</p>
					<h3 className="title3">
						<strong>Sabías que…</strong>
					</h3>
					<p>
						La cucaracha alemana mide de 10 a 15 mm de longitud, su cuerpo es
						aplanado ventralmente, lo que le facilita refugiarse en grietas y
						huecos con facilidad. Su cuerpo está dividido en 3 tagmas o
						regiones, que son característicos de los insectos: cabeza, tórax y
						abdomen. Presentan dos pares de alas en el tórax, pero no les sirven
						para volar. Tienen 3 pares de patas y son muy ágiles para correr y
						trepar en diversas superficies, aún en las lisas. En cuanto a su
						alimentación, pueden desdoblar la celulosa de la materia vegetal por
						los microorganismos simbiontes en su sistema digestivo, pero por su
						adaptación evolutiva, son omnívoras, por lo cual cualquier desecho
						orgánico de tipo vegetal o animal sirve para su alimentación.
						Incluso existen entre ellas el canibalismo (alimentarse de su propia
						especie), la coprofagia (alimentarse de heces fecales de ellas y de
						otros organismos), la emetofagia (alimentarse de vómito, tanto de
						ellas como de otras especies) y la necrofagia (alimentarse de
						cadáveres, tanto de ellas como de otras especies), es decir las
						adultas llegan a comerse a las ninfas y las ninfas pequeñas se
						alimentan del excremento de las adultas o ninfas mayores y tanto
						adultas como ninfas se alimentan de los cadáveres de sus congéneres.
						La cucaracha alemana es muy muy prolífera. La hembra de esta
						especie, dependiendo de la cantidad y calidad de la proteína
						ingerida, puede producir durante su vida 5 a 8 Ootecas (Koehler PG,
						Castner JL,1994), que son las cápsulas en las que maduran los huevos
						o embriones a su primer estadio ninfal.
					</p>
					<p>
						Cada ooteca puede contener de 30 a 40 huevos (Koehler PG, Castner
						JL,1994), lo que explica su rápida propagación. Es decir una sola
						cucaracha puede producir entre 150 y 320 nuevas criaturas. Pueden
						existir de 6 a 7 estadios ninfales y estos se desarrollan más rápido
						en temperaturas entre 30° y 40°C, muy comunes en cocinas, áreas de
						la maquinaria en producción industrial y en las regiones cercanas a
						las costas. La cucaracha alemana puede vivir de 3 a 6 meses en
						ambientes con un clima de 25ºC, pero los machos suelen ser menos
						longevos que las hembras.
					</p>
					<h3 className="title3">
						<strong>¿Cómo puedo controlarla?</strong>
					</h3>
					<p>
						Para prevenir o corregir una infestación de cucaracha alemana, el
						punto principal (aplicable a cualquier plaga) es la HIGIENE, es
						decir, las medidas sanitarias. Durante la inspección de las
						instalaciones, el especialista en plagas identifica los puntos
						débiles para una infestación de cucarachas e informa al cliente como
						implementar medidas sanitarias, tales como remover restos de comida,
						proteger los alimentos, vaciar diariamente los contenedores de la
						basura, lavarlos y mantenerlos tapados, desechar empaques de cartón
						corrugado. Todas son acciones higiénicas que marcan el éxito de la
						prevención o la corrección de las infestaciones de plagas. Otra
						estrategia importante es la exclusión, es decir, evitar el ingreso
						de la plaga, pero también su dispersión si ya está presente en las
						instalaciones. También se deben evitar el acceso a grietas y huecos
						estructurales o del mobiliario, que podrían funcionar como refugios
						ideales para la reproducción de cucaracha alemana (Blatella
						germanica), por lo cual es importante el correcto sellado o
						calafateo de grietas, hendiduras y oquedades. Los drenajes también
						son sitios de infestación y dispersión de las plagas, no se pueden
						sellar, pero sí realizar mejoras colocando los aditamentos de
						algunas marcas comerciales a prueba de insectos. El control químico
						se suma a las estrategias anteriores, sobre todo cuando el cliente
						tiene la urgencia de resolver el problema, además de la causa raíz .
						Con los productos especializados de ECOPLAGAS es muy sencillo
						realizar el Manejo Integrado de la Plaga, incorporando diferentes
						tipos de formulación y modos de acción, logrando controlar incluso
						poblaciones de cucarachas resistentes a algunos insecticidas.
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
