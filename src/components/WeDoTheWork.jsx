import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/images/people-discuss-website-project.jpg";
import { useInView } from "react-intersection-observer";

const WeDoTheWork = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	useEffect(() => {
		// Add any additional logic you want to run when the component is in view
	}, [inView]);

	return (
		<Container fluid className="py-5 width-80">
			<Row className="justify-content-center">
				<Col lg="6" className="pr-5 justify-content-center">
					<h3 className="font-weight-bold text-uppercase pt-3">Личен контакт</h3>
					<p>
						Когато се свържете с нас, същите хора, с които разговаряте, са тези,
						които ще работят по изграждането на вашия уебсайт. Ние сме малък
						екип, който работи директно с нашите клиенти по техните текущи нужди.
					</p>
					<Link to={"/personal-contact"}>
					<button className="btn-lg mt-4">
							Научете повече
						</button>
					</Link>
				</Col>
				<Col lg="6">
					<div
						ref={ref}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							transform: inView ? "translateX(0)" : "translateX(40%)",
							transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
							opacity: inView ? 1 : 0,
						}}
					>
						<Image
							src={img}
							rounded
							alt="the-future-is-here"
							style={{ maxHeight: "300px", objectFit: "cover" }}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default WeDoTheWork;
