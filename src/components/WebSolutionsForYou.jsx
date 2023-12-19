import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../assets/images/the-future-is-here.jpg";
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
			// Add any additional logic you want to run when the component is in view
		}
	}, [inView]);

	return (
		<Container fluid className="py-5 justify-content-center">
			<Row className="justify-content-center">
				<Col lg="6" className="pr-5 justify-content-center">
					<h3 className="font-weight-bold text-uppercase pb-5">
						Уеб решения за вас
					</h3>
					<div className="mb-3">
						<p>
							Зодисълюшънс е вашето предпочитано място за иновативни уеб решения
							и дигитален успех. Като специализирана дигитална агенция, ние сме
							посветени на изграждането на уеб сайтове, които не само представят
							вашия бизнес, но и го издигат на нови висоти в онлайн
							пространството. Нашата мисия е да ви помогнем да бъдете
							разпознавани в дигиталния свят, като създадем уеб присъствие,
							което отговаря на уникалните ви нужди и цели.
						</p>
					</div>
					<Link to={"/web-solutions"}>
						<button className="btn-lg mt-4">
							Научете повече
						</button>
					</Link>
				</Col>
				<Col lg="6">
					<div
						ref={ref}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
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
