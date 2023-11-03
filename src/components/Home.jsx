import { Button, StackDivider, Text, VStack } from "@chakra-ui/react";
import WebSolutionsForYou from "./WebSolutionsForYou";
import { useEffect, useState } from "react";
import WhatWeDo from "./WhatWeDo";

export default function Home() {
	const [animateWebSolutions, setAnimateWebSolutions] = useState(false);

	useEffect(() => {
		// Add the animation class when the component mounts
		setAnimateWebSolutions(true);
	}, []);
	return (
		<>
			<VStack
				align={"left"}
				width={"100%"}
				p={10}
				paddingLeft={150}
				backgroundColor={"#dfe5f3"}
				pt={100}
			>
				<Text
					as={"h1"}
					fontFamily={"sans-serif"}
					fontSize={"5xl"}
					textAlign={"left"}
					p={10}
					fontWeight={"bold"}
					width="80%"
				>
					Стъпка в правилната посока за Вашия бизнес
				</Text>
				<VStack
					align={"left"}
					divider={
						<StackDivider borderColor={"gray.300"} width={"5%"} />
					}
					spacing={2}
					p={10}
					width={"80%"}
				>
					<Text
						as={"h3"}
						fontFamily={"sans-serif"}
						fontSize={"md"}
						textAlign={"left"}
					>
						Модерни решения за изграждане и развитие на всеки
						бизнес.
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
				<Button
					fontFamily={"sans-serif"}
					fontSize={"md"}
					p={5}
					m={10}
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
			</VStack>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WebSolutionsForYou />
			</div>
			<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WhatWeDo />
			</div>
		</>
	);
}
