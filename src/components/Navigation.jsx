import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";

export default function Navigation() {
	return (
		<Flex justify={"center"} align={"center"}>
			<Breadcrumb
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
			>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="#">About</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="#">Contact</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
	);
}
