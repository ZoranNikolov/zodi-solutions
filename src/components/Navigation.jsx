import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";

export default function Navigation() {
	return (
		<Flex
			justify={"center"}
			as={"header"}
			backgroundColor={"#0d0d0d"}
			pos={"fixed"}
			w={"100%"}
			zIndex={1}
		>
			<Breadcrumb
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
				display={"flex"}
				fontSize={"2xl"}
				height={90}
				color={"#dfe5f3"}
			>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>
						<Link to={"/"}>Начало</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="#">
						<Link to={"/web-solutions"}>Нашите услуги</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link to={"/contact-us"}>Връзка с нас</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
	);
}
