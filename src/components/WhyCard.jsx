import PropTypes from "prop-types";
import {useState} from "react";

export function WhyCard({img, img2, title, text}) {
	const [showDetails, setShowDetails] = useState(true);
	const [currentImg, setCurrentImg] = useState(img);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
		setCurrentImg(showDetails ? img2 : img);
	};

	return (
		<>
			<div className="why-card" onClick={toggleDetails}>
				<div className="why-img-container">{currentImg}</div>
				{showDetails && (
					<>
						<h4 className="why-title">{title}</h4>
						<span className="why-text">{text}</span>
					</>
				)}
			</div>
		</>
	);
}

WhyCard.propTypes = {
	img: PropTypes.node.isRequired,
	img2: PropTypes.node,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
