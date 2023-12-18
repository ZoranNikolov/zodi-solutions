import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="py-6 bg-dark text-white">
			<Container>
				<Row className="justify-content-around align-items-center">
					<Col className="justify-content-start mt-3">
						<p>&copy; 2023 ZODI90 Ltd. All rights reserved.</p>
					</Col>
					<Col className="mt-3">
						<div className="d-flex justify-content-end">
							<a href="#" className="text-white me-2">
								<FaFacebook fontSize="20px" />
							</a>
							<a href="#" className="text-white me-2">
								<FaTwitter fontSize="20px" />
							</a>
							<a href="#" className="text-white">
								<FaInstagram fontSize="20px" />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
