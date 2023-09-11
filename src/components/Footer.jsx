import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<Box as="footer" py="6" bg="#0d0d0d" color="white">
			<Flex justify="space-between" align="center" maxW="6xl" mx="auto">
				<Text>&copy; 2023 ZODI90 Ltd. All rights reserved.</Text>
				<Flex align="center">
					<IconButton
						as={Link}
						href="#"
						aria-label="Facebook"
						icon={<FaFacebook />}
						mr="2"
						fontSize="20px"
						variant="ghost"
						color="whiteAlpha.700"
						_hover={{ color: "whiteAlpha.900" }}
					/>
					<IconButton
						as={Link}
						href="#"
						aria-label="Twitter"
						icon={<FaTwitter />}
						mr="2"
						fontSize="20px"
						variant="ghost"
						color="whiteAlpha.700"
						_hover={{ color: "whiteAlpha.900" }}
					/>
					<IconButton
						as={Link}
						href="#"
						aria-label="Instagram"
						icon={<FaInstagram />}
						fontSize="20px"
						variant="ghost"
						color="whiteAlpha.700"
						_hover={{ color: "whiteAlpha.900" }}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}
