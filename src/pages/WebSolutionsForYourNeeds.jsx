import { HStack, Text, VStack } from "@chakra-ui/react";
import WeDoTheWork from "../components/WeDoTheWork";
import { useState } from "react";

export default function WebSolutionsForYourNeeds() {
	const [animateWebSolutions, setAnimateWebSolutions] = useState(false);

	return (
    <>
    <HStack
    width="100%"
    backgroundColor={"#176776"}
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <VStack align={"left"} width="80%" pt={120} pb={5}>
      <Text
        as={"h2"}
        fontFamily={"sans-serif"}
        fontSize={"5xl"}
        textAlign={"left"}
        pb={5}
        color={"white"}
      >
        Защо да изберете нас
        </Text>
    </VStack>
  </HStack>
  <HStack
			spacing="5px"
			py={10}
			style={{
				display: "flex",
				justifyContent: "center",
			}}
			width="100%"
		>
			<VStack width="80%" fontFamily={"sans-serif"} pr={50}>
				<Text
					as={"h3"}
					fontSize={"3xl"}
					py={5}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					width="100%"
					textAlign={"left"}
					pt={0}
				>
					Уеб решения за вас
				</Text>
				<VStack
					width="100%"
					alignItems="left"
					fontSize={"md"}
					fontWeight={"normal"}
				>
					<Text as={"p"}>
						Зодисълюшънс е дигитална агенция, специализирана в изграждането на
						уеб решения за Вашия бизнес. Ние подпомагаме компании в страната
						чрез изграждане на персонализирани уебсайтове, които отговарят на
						нуждите на бизнеса. Всеки сайт, който създаваме, е направен
						специално за Вас, според Вашите изисквания.
					</Text>
					<Text as={"p"}>
						Свържете се с нас, за да получите подробна информация за нашите
						услуги.
					</Text>
				</VStack>
			</VStack>
		</HStack>

		<div className={`slide-in ${animateWebSolutions ? "active" : ""}`}>
				<WeDoTheWork />
			</div>
  </>
	);
}
