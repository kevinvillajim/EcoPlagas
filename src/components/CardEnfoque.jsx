import PropTypes from "prop-types";

export function CardEnfoque({ img, title, text, textBtn }) {
  return (
    <>
      <div className="clientes">
        <img src={img} className="clientes-img"></img>
        <h3 className="clientes-title">{title}</h3>
        <span className="clientes-text">{text}</span>
        <button className="clientes-btn">{textBtn}</button>
      </div>
    </>
  );
}

CardEnfoque.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
};
