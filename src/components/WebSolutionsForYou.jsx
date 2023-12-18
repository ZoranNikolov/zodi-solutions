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
							Зодисълюшънс е дигитална агенция, специализирана в изграждането на
							уеб решения за Вашия бизнес. Ние подпомагаме компании в страната
							чрез изграждане на персонализирани уебсайтове, които отговарят на
							нуждите на бизнеса. Всеки сайт, който създаваме, е направен
							специално за Вас, според Вашите изисквания.
						</p>
						<p>
							Свържете се с нас, за да получите подробна информация за нашите
							услуги.
						</p>
					</div>
					<Link to={"/web-solutions"}>
						<Button className="btn-lg btn-dark mt-4">Научете повече</Button>
					</Link>
				</Col>
				<Col lg="6">
					<div
						ref={ref}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							transform: inView ? "translateX(0)" : "translateX(40%)",
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
