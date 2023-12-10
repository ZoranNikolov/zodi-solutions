import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import WebSolutionsForYou from "../components/WebSolutionsForYou";
import WhatWeDo from "../components/WhatWeDo";
import WebDesignAndDevelopment from "../components/WebDesignAndDevelopment";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container fluid className="px-0">
			<Row className="justify-content-center px-0 pt-5 first-color">
				<Row lg="8" className="px-0 pt-5 pb-5 mt-5 width-80">
					<h1 className="font-weight-bold">
						Стъпка в правилната посока за Вашия бизнес
					</h1>
					<div className="mb-5"></div>
					<Row className="mb-4">
						<Col lg="6">
							<p className="h5">
								Модерни решения за изграждане и развитие на всеки бизнес.
							</p>
							<div className="border-bottom w-25 mb-4"></div>
							<p className="h5">Не използваме готови шаблони/темплейти.</p>
							<div className="border-bottom w-25 mb-4"></div>
							<p className="h5">Безкомпромисни спрямо поетите ангажименти.</p>
							<div className="border-bottom w-25 mb-4"></div>
							<p className="h5">Гарантиран срок за изпълнение.</p>
						</Col>
					</Row>
					<Link to="/contact-us">
						<Button className="btn-lg btn-dark mt-4">Свържете се с нас</Button>
					</Link>
				</Row>
			</Row>
			<Row>
				<WebSolutionsForYou />
			</Row>
			<Row>
				<WhatWeDo />
			</Row>
			<Row>
				<WebDesignAndDevelopment />
			</Row>
			{/* Add additional components here */}
		</Container>
	);
};

export default Home;
