import PropTypes from "prop-types";

function Services({ imag, alt, title, content }) {
  return (
    <>
      <div className="caption-style-4">
        <div className="li">
          <img
            src={imag}
            alt={alt}
          />
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
