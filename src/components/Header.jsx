export function Header() {
  return (
    <>
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
    </>
  );
}
