import PropTypes from "prop-types";

export function WhyCard({ img, title, text }) {
  return (
    <>
      <div className="why-card">
        <div className="why-img-container">{img}</div>
        <h4 className="why-title">{title}</h4>
        <span className="why-text">{text}</span>
      </div>
    </>
  );
}

WhyCard.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
