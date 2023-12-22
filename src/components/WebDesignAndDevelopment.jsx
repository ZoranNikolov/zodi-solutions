import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../assets/images/web-design.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
		<Container fluid className="py-5 justify-content-center">
			<Row className="justify-content-center">
				<Col lg="6" className="pr-5 justify-content-center">
					<h3 className="font-weight-bold text-uppercase pb-4 mb-0">
						ДИЗАЙН И РАЗРАБОТКА НА УЕБСАЙТОВЕ
					</h3>
					<div className="mb-3">
						<p>
							С фокус върху индивидуалния подход към всеки проект, ние
							съчетаваме висококачествен дизайн със съвременни технологии, за да
							предоставим уеб решения, които не само изглеждат великолепно, но и
							функционират перфектно. Нашата екипна страст и ангажираност към
							вашата визия са ключът към създаването на успешни уеб проекти.
						</p>
					</div>
					<Link to={"/web-design"}>
						<button className="btn-lg mt-4">Научете повече</button>
					</Link>
				</Col>
				<Col lg="6">
					<div
						ref={ref}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							// transform: inView ? "translateX(0)" : "translateX(40%)",
							transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
							opacity: inView ? 1 : 0,
						}}
					>
						<Image
							src={img}
							rounded
							alt="the-future-is-here"
							style={{ maxHeight: "300px", objectFit: "cover" }}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
