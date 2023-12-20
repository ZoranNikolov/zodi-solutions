import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_r2joftb",
				"template_7hfn9zh",
				form.current,
				"vu-iLvSTPOKJQ0ckO"
			)
			.then(
				(result) => {
					console.log(result.text);
					resetForm();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const resetForm = () => {
		form.current.reset();
	};

	return (
		<Container className="px-0">
			<Form ref={form} onSubmit={sendEmail} className="contact-form px-0">
				<Row className="mb-3">
					<Col>
						<Form.Control
							type="text"
							id="firstName"
							name="firstName"
							placeholder="Име*"
							required
						/>
					</Col>
					<Col>
						<Form.Control
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Фамилия*"
							required
						/>
					</Col>
				</Row>

				<Row className="mb-3">
					<Col>
						<Form.Control
							type="email"
							id="userEmail"
							name="userEmail"
							placeholder="Email*"
							required
						/>
					</Col>
					<Col>
						<Form.Control
							type="tel"
							id="userPhoneNumber"
							name="userPhoneNumber"
							placeholder="Телефон"
							required
						/>
					</Col>
				</Row>

				<Form.Control
					as="textarea"
					id="message"
					name="message"
					placeholder="Вашето съобщение"
					required
					className="mb-3"
					style={{ minHeight: "100px" }}
				/>

				<button type="submit" className="btn-lg mt-1">
					Изпрати
				</button>
			</Form>
		</Container>
	);
}
