import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../assets/images/web-designer-office-working.jpg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
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
					<h3 className="font-weight-bold text-uppercase pt-3 pb-4 mb-0">
						Нашите сайтове са персонални
					</h3>
					<p>
						Точно както Вие не искате да изглеждате и звучите като всеки друг
						бизнес, ние не вярваме в шаблонните решения. Има много начини за
						проектирате и изграждане на невероятен, уникален сайт, който да
						постигне целите Ви. Ние ще работим в тясно сътрудничество с Вас, за
						да намерим най-доброто решение, което отговаря на нуждите Ви и е в
						рамките на Вашия бюджет.
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
