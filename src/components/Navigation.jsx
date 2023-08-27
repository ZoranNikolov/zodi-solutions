import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";

export default function Navigation() {
	return (
		<Flex justify={"center"} as={"header"}>
			<Breadcrumb
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
				display={"flex"}
				fontSize={"2xl"}
				height={100}
			>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="#">Начало</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="#">Връзка с нас</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
	);
}
