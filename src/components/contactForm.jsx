import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
	Button,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Textarea,
	VStack,
} from "@chakra-ui/react";

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
		<VStack
			as="form"
			ref={form}
			onSubmit={sendEmail}
			className="contact-form"
			spacing={4}
			align="stretch"
			width="60%"
		>
			<HStack>
				<FormControl>
					{/* <FormLabel htmlFor="user_name">Your Name</FormLabel> */}
					<Input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="Име*"
						variant="filled"
						isRequired
					/>
				</FormControl>
				<FormControl>
					{/* <FormLabel htmlFor="user_name">Your Name</FormLabel> */}
					<Input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Фамилия*"
						variant="filled"
						isRequired
					/>
				</FormControl>
			</HStack>

			<HStack>
				<FormControl>
					{/* <FormLabel htmlFor="user_email">Email</FormLabel> */}
					<Input
						type="email"
						id="userEmail"
						name="userEmail"
						placeholder="Email*"
						variant="filled"
						isRequired
					/>
				</FormControl>

				<FormControl>
					{/* <FormLabel htmlFor="user_email">Email</FormLabel> */}
					<Input
						type="tel"
						id="userPhoneNumber"
						name="userPhoneNumber"
						placeholder="Телефон"
						variant="filled"
						isRequired
					/>
				</FormControl>
			</HStack>

			<FormControl>
				{/* <FormLabel htmlFor="message">Message</FormLabel> */}
				<Textarea
					id="message"
					name="message"
					placeholder="Вашето съобщение"
					variant="filled"
					isRequired
				/>
			</FormControl>

			<Button
				type="submit"
				bg={"#557373"}
				fontSize={"md"}
				_hover={{
					bg: "#272401",
					color: "#dfe5f3",
					transform: "scale(1.05)",
					transition: "all 0.325s ease-in-out",
				}}
				width="25%"
				margin="0 auto"
			>
				Изпрати
			</Button>
		</VStack>
	);
}
