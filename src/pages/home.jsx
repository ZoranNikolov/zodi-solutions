import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebSolutionsForYou from "../components/WebSolutionsForYou";
import WhatWeDo from "../components/WhatWeDo";
import WebDesignAndDevelopment from "../components/WebDesignAndDevelopment";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container fluid className="px-0 width-100">
			<Row className="justify-content-center mx-0 px-0 pt-5 first-color">
				<Row lg="8" className="px-0 pt-5 pb-5 mt-5 width-80 mx-0">
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
					<Col>
						<Link to="/contact-us">
							<button className="btn-lg mt-4">
								Свържете се с нас
							</button>
						</Link>
					</Col>
				</Row>
			</Row>
			<Row className="mx-auto px-0 width-80">
				<WebSolutionsForYou />
			</Row>
			<Row className="mx-auto first-color px-0">
				<WhatWeDo />
			</Row>
			<Row className="mx-auto px-0 width-80">
				<WebDesignAndDevelopment />
			</Row>
		</Container>
	);
};

export default Home;
