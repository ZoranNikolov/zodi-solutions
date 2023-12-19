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
		<Container>
			<Form
				ref={form}
				onSubmit={sendEmail}
				className="contact-form"
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
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
				/>

				<Button
					type="submit"
					style={{
						backgroundColor: "#557373",
						border: "none",
						width: "25%",
						margin: "0 auto",
					}}
					className="mb-3"
				>
					Изпрати
				</Button>
			</Form>
		</Container>
	);
}
