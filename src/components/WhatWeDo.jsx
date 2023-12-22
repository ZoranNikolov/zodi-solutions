import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img from "../assets/images/workspace.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
		}
	}, [inView]);

	return (
		<Container fluid className="py-5 justify-content-center width-80">
			<Row className="justify-content-center">
				<Col lg="6" className="pr-5 justify-content-center">
					<h3 className="font-weight-bold text-uppercase pb-4 mb-0">
						Какво правим?
					</h3>
					<div className="mb-3">
						<p>
							Надеждност и прецизност във всеки етап от процеса на разработка.
							Ние сме тук, за да ви подкрепим във вашия онлайн път. Независимо
							дали стартирате нов бизнес или желаете да подобрите съществуващия
							си уеб сайт, можем да ви предложим интегрирани и ефективни уеб
							решения. Доверете ни със създаването на уеб пространство, което не
							само привлича внимание, но и осигурява устойчив и успешен
							дигитален път за вашия бизнес.
						</p>
					</div>
					<Link to={"/what-we-do"}>
						<button className="btn-lg mt-4">Научете повече</button>
					</Link>
				</Col>
				<Col lg="6">
					<div
						ref={ref}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							// transform: inView ? "translateX(0)" : "translateX(40%)",
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

export default WhatWeDo;
