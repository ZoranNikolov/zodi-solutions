import { Button, Divider, StackDivider, Text, VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<VStack align={"left"} width={"80%"} p={10} paddingLeft={150} >
			<Text
				as={"h1"}
				fontFamily={"sans-serif"}
				fontSize={"5xl"}
				textAlign={"left"}
				p={10}
				width="80%"
			>
				Стъпка в правилната посока за Вашия бизнес
			</Text>
			<VStack
				align={"left"}
				divider={<StackDivider borderColor={"gray.300"} width={"5%"} />}
				spacing={2}
				p={10}
				width={"80%"}
			>
				<Text
					as={"h3"}
					fontFamily={"sans-serif"}
					fontSize={"md"}
					textAlign={"left"}
				>
					Модерни решения за изграждане и развитие на всеки бизнес.
				</Text>
				<Text
					as={"h3"}
					fontFamily={"sans-serif"}
					fontSize={"md"}
					textAlign={"left"}
				>
					Не използваме готови шаблони/темплейти.
				</Text>
				<Text
					as={"h3"}
					fontFamily={"sans-serif"}
					fontSize={"md"}
					textAlign={"left"}
				>
					Безкомпромисни спрямо поетите ангажименти.
				</Text>
				<Text
					as={"h3"}
					fontFamily={"sans-serif"}
					fontSize={"md"}
					textAlign={"left"}
				>
					Гарантиран срок за изпълнение.
				</Text>
			</VStack>
			<Button fontFamily={"sans-serif"} fontSize={"md"} p={5} m={10} w={"20%"}>
				Свържете се с нас
			</Button>
		</VStack>
	);
}
