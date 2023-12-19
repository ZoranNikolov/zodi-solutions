import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import img from "../assets/images/responsive-web-design.jpg";

const WeDoItRight = () => {
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
					<h3 className="font-weight-bold text-uppercase pt-3">
						Знаем какво правим
					</h3>
					<p>
						Ако не сте в сферата на уеб разработката, може да не знаете какво се
						е променило в областта през последните месеци или години. Ние от
						Зодисълюшънс ще се погрижим вашият уебсайт да се зарежда бързо и да
						е лесен за навигация. Също така ще се погрижим вашият сайт да работи
						на всички формати и устройства, от смартфони.
					</p>
					<p>
						Свържете се с нас, за да получите подробна информация за нашите
						услуги.
					</p>
					<Link to={"/web-solutions"}>
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

export default WeDoItRight;
