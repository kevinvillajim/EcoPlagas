import PropTypes from "prop-types";

export function Header({ text }) {
  return (
    <>
      <div className="sticky-container">
        <a
          href="/EcoPlagas/"
          className="navbar-brand"
        >
          <img
            className="logo"
            alt="logo-eco-plagas"
            src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/public/logo2.png"
          ></img>
        </a>
        <nav
          id="cont-header"
          className="navbar-fixed"
        >
          <div id="nav-text-container">{text}</div>
        </nav>
      </div>
    </>
  );
}

Header.propTypes = {
  text: PropTypes.element.isRequired,
};
