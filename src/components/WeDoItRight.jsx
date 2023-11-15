import { Box, Button, HStack, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img from "../assets/images/mobile-responsive-website.jpg";

export default function WeDoItRight() {
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
			backgroundColor={"#dfe5f3"}
		>
			<VStack width="60%" fontFamily={"sans-serif"} pr={50}>
				<Text
					as={"h3"}
					fontSize={"3xl"}
					py={5}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					width="100%"
					textAlign={"left"}
				>
					Знаем какво правим
				</Text>
				<VStack
					width="100%"
					alignItems="left"
					fontSize={"md"}
					fontWeight={"normal"}
				>
					<Text as={"p"}>
						Ако не сте в сферата на уеб разработката, може да не
						знаете какво се е променило в областта през последните месеци или години. Ние от Зодисълюшънс ще се погрижим вашият уебсайт да
						се зарежда бързо и да е лесен за навигация. Също така ще се погрижим
						вашият сайт да работи на всички формати и устройства, от смартфони
					</Text>
					<Text as={"p"}>
						Свържете се с нас, за да получите подробна информация за нашите
						услуги.
					</Text>
					<Link to={"/web-solutions"}>
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
					</Link>
				</VStack>
			</VStack>
			<Box
				ref={ref}
				boxSize="sm"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// Apply the animation class based on the 'inView' state
					transform: inView ? "translateX(0)" : "translateX(40%)",
					transition: "transform 1s ease-in-out, opacity 1s ease-in-out", // Adjust the animation duration as needed
					opacity: inView ? 1 : 0,
				}}
			>
				<Image
					src={img}
					borderRadius="xl"
					maxH={300}
					alt="the-future-is-here"
				/>
			</Box>
		</HStack>
	);
}
