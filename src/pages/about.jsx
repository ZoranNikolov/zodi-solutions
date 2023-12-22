import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import WeDoTheWork from "../components/WeDoTheWork";
import OurWebsitesAreCustom from "../components/OurWebsitesAreCustom";
import WeDoItRight from "../components/WeDoItRight";

export default function About() {
	const [animateWebSolutions, setAnimateWebSolutions] = useState(false);

	return (
		<>
			<Container fluid className="second-color text-white py-5">
				<Row className="justify-content-center mt-5">
					<Col md="8">
						<h2 className="font-size-5xl text-center pt-3">
							Защо да изберете нас
						</h2>
					</Col>
				</Row>
			</Container>

			<Container fluid>
				<Row className={`slide-in ${animateWebSolutions ? "active" : ""} first-color`}>
					<WeDoTheWork />
				</Row>
				<Row className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
					<OurWebsitesAreCustom />
				</Row>
				<Row className={`slide-in ${animateWebSolutions ? "active" : ""} first-color`}>
					<WeDoItRight />
				</Row>
			</Container>

			<Container fluid className="py-5 justify-content-center">
				<Row className="justify-content-center">
					<Col md="8" lassName="justify-content-center">
						<h2 className="font-size-2xl font-weight-bold text-uppercase text-center">
							Не чакайте повече
						</h2>
						<Container className="justify-content-center">
							<Row className="justify-content-center">
								<Col md="8" className="text-center">
									{" "}
									{/* Updated class */}
									<p className="text-center">
										Свържете се с нас, за да получите своя завладяващ уебсайт за
										Вашия бизнес.
									</p>
									<Link to="/contact-us">
										<button className="btn-lg mt-4">Свържете се с нас</button>
									</Link>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
}
