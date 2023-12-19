import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="width-100 bg-dark text-white">
			<Container className="pl-0 pr-0 width-60">
				<Row className="justify-content-around align-items-center">
					<Col className="justify-content-center mt-3">
						<Row className="justify-content-center">
							<Col>
						<p className="text-align-center">&copy; 2023 ZODI90 Ltd. All rights reserved.</p>
							</Col>
						</Row>
					</Col>
					<Col className="">
						<div className="d-flex justify-content-end">
							<a href="#" className="text-white me-4">
								<FaFacebook fontSize="20px" />
							</a>
							<a href="#" className="text-white me-4">
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
