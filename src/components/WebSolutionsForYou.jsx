import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import youCanImage from "../assets/images/you-can-image.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function WebSolutionsForYou() {
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
		>
			<VStack width="50%" fontFamily={"sans-serif"}>
				<Text
					as={"h3"}
					fontSize={"3xl"}
					py={5}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					width="100%"
					textAlign={"left"}
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
						Зодисълюшънс е дигитална агенция, специализирана в изграждането на
						уеб решения за Вашия бизнес. Ние подпомагаме компании в страната
						чрез изграждане на персонализирани уебсайтове, които отговарят на
						нуждите на бизнеса. Всеки сайт, който създаваме, е направен
						специално за Вас, според Вашите изисквания.
					</Text>
					<Text as={"p"}>
						Свържете се с нас, за да получите подробна информация за нашите
						услуги.
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
					src={youCanImage}
					borderRadius="xl"
					maxH={300}
					alt="holding smartphone"
				/>
			</Box>
		</HStack>
	);
}
