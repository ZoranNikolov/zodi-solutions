import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/contactForm";
import {
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";
import { MdOutlineRocketLaunch } from "react-icons/md";


export default function ContactUs() {
	return (
		<>
			<HStack
				width="100%"
				backgroundColor={"#176776"}
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<VStack align={"left"} width="80%" pt={120} pb={5}>
					<Text
						as={"h2"}
						fontFamily={"sans-serif"}
						fontSize={"5xl"}
						textAlign={"left"}
						pb={5}
						color={"white"}
					>
						Свържете се с нас
					</Text>
				</VStack>
			</HStack>
			<HStack
				spacing="5px"
				py={10}
				style={{
					display: "flex",
					justifyContent: "center",
				}}
				width="100%"
			>
				<VStack width="80%" fontFamily={"sans-serif"} pr={50}>
					<VStack
						width="100%"
						alignItems="left"
						fontSize={"md"}
						fontWeight={"normal"}
					>
						<Text as={"p"}>
							Добре дошли в раздела "Свържете се с нас" на Zodisolutions!
						</Text>
						<Text as={"p"} pb={5}>
							Ние сме тук, за да направим вашите онлайн идеи реалност. Ако
							търсите персонализирано решение за уеб присъствие, уеб дизайн, или
							просто искате да освежите съществуващия си уебсайт, нашите
							експерти са готови да ви помогнат.
						</Text>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"3xl"}
							pb={5}
						>
							Защо да изберете Zodi Solutions?
						</Text>
						<List spacing={3}>
							<ListItem>
								<ListIcon 
								as={MdOutlineRocketLaunch} 
								color="green.500" />
								<b>Персонализиран подход:</b> Всеки уебсайт, който създаваме, е
								уникален, направен специално за вас и вашия бизнес.
							</ListItem>
							<ListItem>
								<ListIcon 
								// as={MdCheckCircle} 
								color="green.500" />
								<b>Оптимизиран за Резултати:</b> Нашата цел е не само да
								създадем уебсайт, но и да ви помогнем да постигнете вашите цели
								чрез него.
							</ListItem>
							<ListItem>
								<ListIcon
								//  as={MdCheckCircle} 
								color="green.500" />
								<b>Съвременен Дизайн:</b> Използваме последните технологии и
								тенденции в уеб дизайна, за да ви осигурим модерен и впечатляващ
								външен вид.
							</ListItem>
						</List>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"3xl"}
							pb={5}
						>
							Как да се свържете с нас?
						</Text>
						<Text as={"p"}>
							Имате въпроси, идеи или искахте да започнете проект? Попълнете
							формата по-долу и екипът ни ще ви отговори възможно най-скоро.{" "}
						</Text>
					</VStack>
				</VStack>
			</HStack>
			<VStack p={100}>
				<ContactForm />
				<Text as={"p"}>
				Не чакайте - направете първия стъпки към успешното онлайн присъствие с Zodisolutions!
				</Text>
				<Text as={"p"}>
				Вашият успех е нашият приоритет.
				</Text>
			</VStack>
		</>
	);
}
