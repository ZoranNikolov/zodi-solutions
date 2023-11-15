import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../assets/images/workspace.jpg";
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
			backgroundColor={"#dfe5f3"}
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
				<Image
					src={img}
					borderRadius="xl"
					maxH={300}
					objectFit='cover'
					alt="workspace"
				/>
			</Box>
			<VStack width="60%" fontFamily={"sans-serif"} 
			pl={50}
			>
				<Text
					as={"h3"}
					fontSize={"3xl"}
					py={5}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					width="100%"
					textAlign={"left"}
				>
					Какво правим?
				</Text>
				<VStack
					width="100%"
					alignItems="left"
					fontSize={"md"}
					fontWeight={"normal"}
				>
					<Text as={"p"}>
						Зодисълюшънс е дигитална агенция, специализирана в изграждане на уеб
						решения. Специализирали сме се в това да помагаме на компании в
						страната да бъдат разпознаваеми в интернет пространството. За това
						се стремим всеки уебсайт, който изработваме, да отговаря на
						конкретните нужди.
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
