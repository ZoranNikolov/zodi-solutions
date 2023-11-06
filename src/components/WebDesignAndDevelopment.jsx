import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../assets/images/the-future-is-here.jpg";
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
		>
			
		</HStack>
	);
}
