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
				"service_n4kjhbf",
				"template_5hdvgub",
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
					id="user_name"
					name="user_name"
					placeholder="Име*"
					variant="filled"
					isRequired
				/>
			</FormControl>
			<FormControl>
				{/* <FormLabel htmlFor="user_name">Your Name</FormLabel> */}
				<Input
					type="text"
					id="user_name"
					name="user_name"
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
					id="user_email"
					name="user_email"
					placeholder="Email*"
					variant="filled"
					isRequired
				/>
			</FormControl>

			<FormControl>
				{/* <FormLabel htmlFor="user_email">Email</FormLabel> */}
				<Input
					type="email"
					id="user_email"
					name="user_email"
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

			<Button type="submit" colorScheme="teal">
				Изпрати
			</Button>
		</VStack>
	);
}
