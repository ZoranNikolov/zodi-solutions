import { Button, HStack, StackDivider, Text, VStack } from "@chakra-ui/react";
import WebSolutionsForYou from "../components/WebSolutionsForYou";
import { useEffect, useState } from "react";
import WhatWeDo from "../components/WhatWeDo";
import WebDesignAndDevelopment from "../components/WebDesignAndDevelopment";
import { Link } from "react-router-dom";

export default function Home() {
	const [animateWebSolutions, setAnimateWebSolutions] = useState(false);

	useEffect(() => {
		// Add the animation class when the component mounts
		setAnimateWebSolutions(true);
	}, []);
	return (
		<>
			<HStack
				width="100%"
				backgroundColor={"#dfe5f3"}
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<VStack align={"left"} width="80%" pt={120} pb={10}>
					<Text
						as={"h1"}
						fontFamily={"sans-serif"}
						fontSize={"5xl"}
						textAlign={"left"}
						pb={5}
						fontWeight={"bold"}
						width="60%"
					>
						Стъпка в правилната посока за Вашия бизнес
					</Text>
					<VStack
						align={"left"}
						divider={<StackDivider borderColor={"gray.300"} width={"5%"} />}
						spacing={3}
						// p={10}
						width="60%"
						pb={5}
					>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"md"}
							textAlign={"left"}
						>
							Модерни решения за изграждане и развитие на всеки бизнес.
						</Text>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"md"}
							textAlign={"left"}
						>
							Не използваме готови шаблони/темплейти.
						</Text>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"md"}
							textAlign={"left"}
						>
							Безкомпромисни спрямо поетите ангажименти.
						</Text>
						<Text
							as={"h3"}
							fontFamily={"sans-serif"}
							fontSize={"md"}
							textAlign={"left"}
						>
							Гарантиран срок за изпълнение.
						</Text>
					</VStack>
					<Link to={"/contact-us"}>
					<Button
						fontFamily={"sans-serif"}
						fontSize={"md"}
						p={5}
						w={"20%"}
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
					</Link>
				</VStack>
			</HStack>

			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
			<WebSolutionsForYou />
			</div>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WhatWeDo />
			</div>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WebDesignAndDevelopment />
			</div>
			// to develop WebDesignAndDevelopment
		</>
	);
}
