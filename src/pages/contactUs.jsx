import { Col, Container, ListGroup, Row } from "react-bootstrap";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet";

export default function ContactUs() {
	return (
		<>
			<Container fluid className="second-color text-white py-5 mb-5 pb-4">
			<Helmet>
					<title>Пишете ни</title>
					<meta
						name="description"
						content="Свържете се нас, за да направим присъствието Ви в интернет пространството значимо и успешно."
					/>
				</Helmet>
				<Row className="justify-content-center mt-5">
					<Col md="8">
						<h2 className="font-family-sans-serif font-size-5xl text-center pt-3">
							Свържете се с нас
						</h2>
					</Col>
				</Row>
			</Container>

			<Container fluid>
				<Row className="py-10 justify-content-center">
					<Col md="8">
						<Container>
							<Row>
								<Col>
									<h3 className="font-family-sans-serif font-size-3xl pt-2 pb-2">
										Защо да изберете Zodi Solutions?
									</h3>
									<p className="mb-0">
										Ние сме тук, за да направим вашите онлайн идеи реалност. Ако
										търсите персонализирано решение за уеб присъствие, уеб
										дизайн, или просто искате да освежите съществуващия си
										уебсайт, нашите експерти са готови да Ви помогнат.
									</p>
									<ListGroup className="pb-5"></ListGroup>
									<h3 className="font-family-sans-serif font-size-3xl pb-2">
										Как да се свържете с нас?
									</h3>
									<p>
										Имате въпроси, идеи или искахте да започнете проект?
										Попълнете формата по-долу и екипът ни ще Ви отговори
										възможно най-скоро.
									</p>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>

			<Container
				fluid
				className="d-flex justify-content-center align-items-center py-4 width-60"
			>
				<ContactForm />
			</Container>

			<Container fluid className="pb-4">
				<Row className="justify-content-center">
					<Col md="8">
						<p>
							Не чакайте - направете първия стъпки към успешното онлайн
							присъствие с Zodisolutions!
						</p>
						<p>Вашият успех е нашият приоритет.</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
