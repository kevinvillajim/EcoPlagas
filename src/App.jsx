import PropTypes from "prop-types";
import "./App.css";

function App() {
  return (
    <>
      <div className="total-container">
        <div className="sticky-container">
          <a className="navbar-brand" href="#">
            <img
              className="logo"
              alt="logo-eco-plagas"
              src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/public/logo2.png"
            ></img>
          </a>
          <nav id="cont-header" className="navbar-fixed">
            <div id="nav-text-container">
              <a href="#" className="nav-text">
                {" "}
                Residenciales
              </a>
              <a href="#" className="nav-text">
                Comerciales
              </a>
              <a href="#" className="nav-text">
                Sobre Nosotros
              </a>
              <a href="#" className="nav-text">
                Contáctanos
              </a>
            </div>
          </nav>
        </div>
        <div className="border-total-container">
          <main>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
            >
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
                    className="d-block w-100 carrusel"
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
                      Somos los primeros en Ecuador en ofrecer garantía del 100%
                      en el exterminio de cucarachas, ninfas y sus huevos. Sin
                      afectar a tu mascotas ni al ambiente.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/ratas.png"
                    className="d-block w-100 carrusel"
                    alt="ratas"
                  />
                  <div className="carousel-caption d-md-block b infoCarrusel">
                    <h5 className="text-white carrouselText">Roedores?</h5>
                    <p className="text-white carrouselText">
                      ¡Despídete de los roedores para siempre! Nuestro servicio
                      de eliminación es rápido, seguro y eficaz. Recupera tu
                      hogar o negocio librandote de las plagas!
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/hormigas.webp"
                    className="d-block w-100 carrusel"
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
                      detenemos, las erradicamos por completo. Tu paz y
                      comodidad son nuestra prioridad.
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
                  className="carousel-control-next-icon"
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
                <img
                  src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen1.png"
                  className="imgBox"
                  alt="organismos-control-NPMA"
                ></img>
                <img
                  src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen2.jpg"
                  className="imgBox2"
                  alt="organismos-control-WHO"
                ></img>
                <img
                  src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen3.png"
                  className="imgBox2"
                  alt="organismos-control-EPA"
                ></img>
                <img
                  src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen4.png"
                  className="imgBox"
                  alt="organismos-control-Ecuador-RCVS"
                ></img>
                <img
                  src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/Imagen5.png"
                  className="imgBox"
                  alt="organismos-control-Ecuador-ministerio-de-ambiente"
                ></img>
              </div>
              <img
                src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/divisor.png"
                className="divisor"
                alt="divisor"
              ></img>
            </div>
            <div
              id="eco-container"
              className="contBot d-flex justify-content-evenly"
            >
              <div id="eco-info" className="col d-flex tituloBoton">
                <h2 className="text-center text-white">
                  ELIMINAMOS LA PLAGA CON UN TRATAMIENTO EFICAZ SIN UTILIZACIÓN
                  DE PRODUCTOS TÓXICOS
                </h2>
                <a
                  className="btn btn-light d-block mx-auto mb-4 contacto"
                  href="https://www.americanpest.es/contactanos/"
                >
                  Solicita inspección gratuita
                </a>
              </div>
              <div id="eco-icons-container" className="row iconosInfo">
                <div className="col-md-4">
                  <div className="text-center mb-4">
                    <img
                      className="img-fluid eco-icons-img"
                      src="https://www.americanpest.es/wp-content/uploads/2022/10/icono-salud-personas-y-mascotas.svg"
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
                      src="https://www.americanpest.es/wp-content/uploads/2022/10/icono-respeto-medio-ambiente.svg"
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
              <h4 className="servicios aval">Servicios profesionales</h4>
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
            <div className="card text-center">
              <div className="card-header"></div>
              <div className="card-body">
                <h5 className="card-title">Satisfacción garantizada</h5>
                <p className="card-text">
                  Ofrecemos los productos líderes en Latinoamérica, y un equipo
                  altamente capacitado para superar tus expectativas.
                  Garantizamos total satisfacción en cada servicio. <br /> Tu
                  confianza es nuestra mayor motivación.
                </p>
                <a href="#" className="btn boto">
                  Contáctanos
                </a>
              </div>
              <div className="card-footer text-body-secondary"></div>
            </div>
            <div id="enfoque-clientes-container">
              <div id="enfoque-clientes-residenciales">
                <img src="imagen1"></img>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  deleniti unde soluta minima provident facere fugiat. Eaque
                  perspiciatis commodi voluptate doloremque doloribus ut hic
                  facilis numquam, nobis id, temporibus inventore!
                </span>
                <button>Ver mas</button>
              </div>
              <div id="enfoque-clientes-comerciales">
                <img src="imagen1"></img>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  deleniti unde soluta minima provident facere fugiat. Eaque
                  perspiciatis commodi voluptate doloremque doloribus ut hic
                  facilis numquam, nobis id, temporibus inventore!
                </span>
                <button>Ver mas</button>
              </div>
            </div>
          </main>
        </div>
        <div className="footer-container">
          <img
            src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/logoEcoPlagasNegro.png"
            alt="logo-eco-plagas-fondo-negro"
            className="logoFooter"
          />
          <footer className="footer-distributed">
            <div className="footer-left">
              <p className="footer-links">
                <a className="link-1 elementosFooter" href="#">
                  Residenciales
                </a>
                <a href="#" className="elementosFooter">
                  Comerciales
                </a>
                <a href="#" className="elementosFooter">
                  Sobre Nosotros
                </a>
                <a href="#" className="elementosFooter">
                  Contáctanos
                </a>
              </p>
              <p id="footer-company" className="footer-company-name">
                Eco Plagas © 2023
              </p>
            </div>
            <div className="footer-center">
              <div>
                <i className="fa fa-map-marker"></i>
                <p>
                  <span>Diego García S8-61 y Av. Alpahuasi</span> Quito, Ecuador
                </p>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <p>+593 99 503 1066</p>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <p>
                  <a id="contact-mail" href="mailto:info@eco-plagas.net">
                    support@ecoplagas-ec.com
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-icons">
                <a href="#">
                  <i className="fa fa-facebook">
                    <img
                      className="face"
                      src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoFacebook.png"
                    />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-github">
                    <img
                      className="face"
                      src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/52b0d2691cb8e4cc71e88232b793cb9f0dce77b8/img/iconoGitHub.svg"
                    />
                  </i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

function Services({ imag, alt, title, content }) {
  return (
    <>
      <div className="caption-style-4">
        <div className="li">
          <img src={imag} alt={alt} />
          <div className="caption">
            <div className="blur"></div>
            <div className="caption-text">
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Services };

Services.propTypes = {
  imag: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
