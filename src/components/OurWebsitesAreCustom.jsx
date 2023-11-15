import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../assets/images/web-designer-office-working.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function WhatWeDo() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
		}
	}, [inView]);

	return (
		<HStack
			spacing="5px"
			py={5}
			style={{
				display: "flex",
				justifyContent: "center",
			}}
			width="100%"
		>
			<Box
				ref={ref}
				boxSize="sm"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// Apply the animation class based on the 'inView' state
					transform: inView ? "translateX(0)" : "translateX(-40%)",
					transition: "transform 1s ease-in-out, opacity 1s ease-in-out", // Adjust the animation duration as needed
					opacity: inView ? 1 : 0,
				}}
			>
				<Image src={img} borderRadius="xl" maxH={300} alt="workspace" />
			</Box>
			<VStack width="60%" fontFamily={"sans-serif"} pl={50}>
				<Text
					as={"h3"}
					fontSize={"3xl"}
					py={5}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					width="100%"
					textAlign={"left"}
				>
					Нашите сайтове са персонални
				</Text>
				<VStack
					width="100%"
					alignItems="left"
					fontSize={"md"}
					fontWeight={"normal"}
				>
					<Text as={"p"}>
						Точно както Вие не искате да изглеждате и звучите като всеки друг
						бизнес, ние не вярваме в шаблонните решения. Има много начини за
						проектирате и изграждане на невероятен, уникален сайт, който да
						постигне целите Ви. Ние ще работим в тясно сътрудничество с Вас, за
						да намерим най-доброто решение, което отговаря на нуждите Ви и е в
						рамките на Вашия бюджет.{" "}
					</Text>
					<Button
						fontFamily={"sans-serif"}
						fontSize={"md"}
						p={5}
						my={5}
						w={"20%"}
						bg={"#557373"}
						_hover={{
							bg: "#272401",
							color: "#dfe5f3",
							transform: "scale(1.05)",
							transition: "all 0.325s ease-in-out",
						}}
					>
						Научете повече
					</Button>
				</VStack>
			</VStack>
		</HStack>
	);
}
