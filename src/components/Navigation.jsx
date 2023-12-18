import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
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
	{ label: "За нас", to: "/about" },
	{ label: "Пишете  ни", to: "/contact-us" },
];

const Navigation = () => {
	const location = useLocation();

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark"
			style={{
				backgroundColor: headerBackgroundColor,
				position: "fixed",
				width: "100%",
				zIndex: 1,
			}}
		>
			<div className="container justify-content-center">
				<Row>
				<Breadcrumb
					className="navbar-nav margin-bottom-0"
					separator={<ChevronRight color="gray.500" />}
				>
					{navigationItems.map((item, index) => {
						const isCurrentPage = item.to === location.pathname;

						return (
							<Breadcrumb.Item
								key={index}
								active={isCurrentPage}
								style={{
									fontWeight: isCurrentPage
										? currentBreadcrumbFontWeight
										: undefined,
									color: isCurrentPage
										? currentBreadcrumbColor
										: breadcrumbColor,
									cursor: "pointer",
									transition: `color ${transitionDuration}`,
									display: "flex",
									alignItems: "center",
									marginTop: "16px"
								}}
							>
								<ReactRouterLink
									to={item.to}
									style={{
										color: isCurrentPage
											? currentBreadcrumbColor
											: breadcrumbColor,
									}}
								>
									{item.label}
								</ReactRouterLink>
							</Breadcrumb.Item>
						);
					})}
				</Breadcrumb>
				</Row>
			</div>
		</nav>
	);
};

export default Navigation;
