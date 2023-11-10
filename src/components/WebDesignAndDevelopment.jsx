import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function WebDesignAndDevelopment() {
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
			gap={"25px"}
			boxSizing="border-box"
		>
			<Box
				ref={ref}
				boxSize="sm"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// Apply the animation class based on the 'inView' state
					transform: inView ? "translateX(0)" : "translateX(-10%)",
					transition: "transform 1s ease-in-out, opacity 1s ease-in-out", // Adjust the animation duration as needed
					opacity: inView ? 1 : 0,
				}}
				border={"1px"}
				borderColor={"gray.400"}
				width={"40%"}
				height={"100%"}
				mt={"50px"}
				mb={"50px"}
				borderRadius={"10px"}
			>
				<VStack
					alignItems="center"
					fontSize={"md"}
					fontWeight={"normal"}
					p={"30px"}
					pl={0}
					pr={0}
					width="80%"
				>
					<Text
						as={"h3"}
						fontSize={"2xl"}
						py={5}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						width="100%"
						textAlign={"center"}
					>
						Дизайн и разработка на уебсайтове
					</Text>
					<Text as={"p"}>
						Изготвяме уникален дизайн фокусиран върху Вашия бизнес.
					</Text>
					<Button
						fontFamily={"sans-serif"}
						fontSize={"md"}
						p={5}
						my={5}
						w={"80%"}
						bg={"#557373"}
						_hover={{
							bg: "#272401",
							color: "#dfe5f3",
							transform: "scale(1.05)",
							transition: "all 0.325s ease-in-out",
						}}
					>
						Разберете повече за дизайна и разработката
					</Button>
				</VStack>
			</Box>

			<Box
				ref={ref}
				boxSize="sm"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// Apply the animation class based on the 'inView' state
					transform: inView ? "translateX(0)" : "translateX(10%)",
					transition: "transform 1s ease-in-out, opacity 1s ease-in-out", // Adjust the animation duration as needed
					transitionDelay: "0.75s",
					opacity: inView ? 1 : 0,
				}}
				border={"1px"}
				borderColor={"gray.400"}
				width={"40%"}
				height={"100%"}
				mt={"50px"}
				mb={"50px"}
				borderRadius={"10px"}
			>
				<VStack
					width="80%"
					alignItems="center"
					fontSize={"md"}
					fontWeight={"normal"}
					p={"30px"}
				>
					<Text
						as={"h3"}
						fontSize={"2xl"}
						py={5}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						width="100%"
						textAlign={"center"}
					>
						Поддръжка на Вашия сайт
					</Text>
					<Text as={"p"}>
						Грижим се за правилното функциониране на сайта Ви.
					</Text>
					<Button
						fontFamily={"sans-serif"}
						fontSize={"md"}
						p={5}
						my={5}
						w={"80%"}
						bg={"#557373"}
						_hover={{
							bg: "#272401",
							color: "#dfe5f3",
							transform: "scale(1.05)",
							transition: "all 0.325s ease-in-out",
						}}
					>
						Разберете повече за поддръжката
					</Button>
				</VStack>
			</Box>
		</HStack>
	);
}
