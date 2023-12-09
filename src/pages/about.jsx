import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import WeDoTheWork from "../components/WeDoTheWork";
import { useState } from "react";
import OurWebsitesAreCustom from "../components/OurWebsitesAreCustom";
import WeDoItRight from "../components/WeDoItRight";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function About() {
	const [animateWebSolutions, setAnimateWebSolutions] = useState(false);

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
						Защо да изберете нас
					</Text>
				</VStack>
			</HStack>
			{/* <HStack
				spacing="5px"
				py={10}
				style={{
					display: "flex",
					justifyContent: "center",
				}}
				width="100%"
			>
				<VStack width="80%" fontFamily={"sans-serif"} pr={50}>
					<Text
						as={"h3"}
						fontSize={"3xl"}
						py={5}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						width="100%"
						textAlign={"left"}
						pt={0}
					>
						Уеб решения за вас
					</Text>
					<VStack
						width="100%"
						alignItems="left"
						fontSize={"md"}
						fontWeight={"normal"}
					>
						<Text as={"p"}>
							Нашата цел е да ви предоставим уеб решения, които не само
							изглеждат стилно и професионално, но и функционират ефективно,
							поддържайки вашия бизнес в интензивната онлайн среда. Работим в
							тясно сътрудничество с вас, за да разберем уникалните нужди и цели
							на вашия бизнес.
						</Text>
						<Text as={"p"}>
							Нашите експерти в областта на уеб дизайн и разработка се стремят
							да предоставят иновативни и индивидуални решения, които ще ви
							помогнат да се откроявате в онлайн пространството и да привличате
							нови клиенти.
						</Text>
						<Text as={"p"}>
							Вярваме, че уеб присъствието ви трябва да бъде не само естествено
							разширение на визията на вашия бранд, но и мощен инструмент за
							постигане на бизнес целите ви. С нашия фокус върху индивидуалния
							подход, разработваме уеб страници, които комбинират елегантен
							дизайн с функционалност, гарантираща потребителско удовлетворение
							и бърза навигация.
						</Text>
						<Text as={"p"}>
							Процесът на разработка на вашия уебсайт започва със задълбочено
							разбиране на вашите бизнес изисквания и цели. Използваме
							съвременни технологии и практики за уеб дизайн и разработка, за да
							осигурим уникално и иновативно решение, което отразява
							индивидуалността и стилът на вашия бизнес.
						</Text>
						<Text as={"p"}>
							Нашата екипна работа и отдаденост към проекта ви гарантират, че
							получавате не само професионален уебсайт, но и дългосрочен
							партньор, готов да ви подкрепи в развитието и поддържането на
							вашия онлайн присъствие. Без значение дали сте стартъп, малък
							бизнес или голяма компания, ние сме тук, за да ви помогнем да
							постигнете успех в онлайн пространството.
						</Text>
						<Text as={"p"}>
							Задайте ни своите въпроси, споделете своите идеи и дайте ни
							възможност да ви помогнем да създадете уебсайт, който не само
							отговаря на вашия текущ бизнес модел, но и подготвя вашия бранд за
							бъдещите предизвикателства. Стремим се да бъдем вашите партньори
							във всеки етап от вашия дигитален път.
						</Text>
					</VStack>
				</VStack>
			</HStack> */}

			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WeDoTheWork />
			</div>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<OurWebsitesAreCustom />
			</div>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WeDoItRight />
			</div>
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
					<Text
						as={"h2"}
						fontSize={"2xl"}
						py={5}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						width="100%"
						textAlign={"center"}
						pt={0}
					>
						Не чакайте повече
					</Text>
					<VStack
						width="100%"
						alignItems="center"
						fontSize={"md"}
						fontWeight={"normal"}
					>
						<Text as={"p"}>
							Свържете се с нас, за да получите своя завладяващ уебсайт за Вашия
							бизнес.
						</Text>
						<ChakraLink as={ReactRouterLink} to="/contact-us">
							<Button
								fontFamily={"sans-serif"}
								fontSize={"md"}
								bg={"#557373"}
								_hover={{
									bg: "#272401",
									color: "#dfe5f3",
									transform: "scale(1.05)",
									transition: "all 0.325s ease-in-out",
								}}
							>
								Свържете се с нас
							</Button>
						</ChakraLink>
					</VStack>
				</VStack>
			</HStack>
		</>
	);
}
