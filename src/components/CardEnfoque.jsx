import PropTypes from "prop-types";

export function CardEnfoque({
	img,
	title,
	text,
	textBtn,
	link,
	setSite,
	scrollToReference,
	site,
}) {
	return (
		<>
			<div className="clientes">
				<img src={img} className="clientes-img"></img>
				<h3 className="clientes-title">
					<strong>{title}</strong>
				</h3>
				<span className="clientes-text">{text}</span>
				<a href={link} target="_blank" rel="noreferrer">
					<button
						className="clientes-btn"
						onClick={() => {
							setSite(site);
							scrollToReference("top");
						}}
					>
						{textBtn}
					</button>
				</a>
			</div>
		</>
	);
}

CardEnfoque.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	textBtn: PropTypes.string.isRequired,
	link: PropTypes.string,
	setSite: PropTypes.func,
	site: PropTypes.string,
	scrollToReference: PropTypes.func,
};
