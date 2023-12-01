import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

// Constants for styling
const headerBackgroundColor = "#0d0d0d";
const breadcrumbColor = "#dfe5f3";
const currentBreadcrumbFontWeight = "bold"; // Adjust the font weight
const currentBreadcrumbColor = "white";
const hoverTextColor = "#A0AEC0"; // Adjust the hover text color
const transitionDuration = "0.5s"; // Adjust the transition duration

// Data-driven approach for navigation items
const navigationItems = [
	{ label: "Начало", to: "/" },
	{ label: "Нашите услуги", to: "/web-solutions" },
	{ label: "Връзка с нас", to: "/contact-us" },
];

export default function Navigation() {
	const location = useLocation();

	return (
		<Flex
			justify="center"
			as="header"
			backgroundColor={headerBackgroundColor}
			pos="fixed"
			w="100%"
			zIndex={1}
		>
			<Breadcrumb
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
				display="flex"
				fontSize="2xl"
				height={90}
				color={breadcrumbColor}
			>
				{navigationItems.map((item, index) => {
					const isCurrentPage = item.to === location.pathname;

					return (
						<BreadcrumbItem
							key={index}
							isCurrentPage={isCurrentPage}
							fontWeight={
								isCurrentPage ? currentBreadcrumbFontWeight : undefined
							}
							_hover={{
								textDecoration: "none",
								color: isCurrentPage ? currentBreadcrumbColor : hoverTextColor,
								transition: `color ${transitionDuration}`,
							}}
						>
							<BreadcrumbLink _hover={{ textDecoration: "none" }}>
								<ReactRouterLink to={item.to}>{item.label}</ReactRouterLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
					);
				})}
			</Breadcrumb>
		</Flex>
	);
}
