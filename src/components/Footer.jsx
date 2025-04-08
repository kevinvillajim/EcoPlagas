import PropTypes from "prop-types";
export function Footer({text}) {
	return (
		<>
			<div className="footer-container">
				<img
					src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/logoEcoPlagasNegro.png"
					alt="logo-eco-plagas-fondo-negro"
					className="logoFooter"
				/>
				<footer className="footer-distributed">
					<div className="footer-left">
						<div className="footer-links">{text}</div>
						<p id="footer-company" className="footer-company-name">
							Eco Plagas © 2023
						</p>
					</div>
					<div className="footer-center">
						<div>
							<i className="fa fa-map-marker"></i>
							<p>
								Av. las Palmeras y El Inca <br />
								Quito, Ecuador
							</p>
						</div>
						<div>
							<i className="fa fa-phone"></i>
							<p>+593 99 107 9118</p>
						</div>
						<div>
							<i className="fa fa-envelope"></i>
							<a id="contact-mail" href="mailto:info@eco-plagas.net">
								<p>support@ecoplagas-ec.com</p>
							</a>
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
								<i className="fa fa-github">
									<img
										className="face"
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoInstagram.png"
									/>
								</i>
							</a>
							<a href="#">
								<i className="fa fa-github">
									<img
										className="face"
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoEmail.png"
									/>
								</i>
							</a>
							<a href="#">
								<i className="fa fa-github">
									<img
										className="face"
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoWhatsapp.png"
									/>
								</i>
							</a>
						</div>
					</div>
					<div className="by">
						Website by{" "}
						<a href="https://kevinvillajim.github.io/Portfolio/">
							kevinvillajim
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}

Footer.propTypes = {
	text: PropTypes.element.isRequired,
};
