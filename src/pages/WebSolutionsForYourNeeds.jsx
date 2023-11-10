import { HStack, Text, VStack } from "@chakra-ui/react";

export default function WebSolutionsForYourNeeds() {
	return (
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
        width="60%"
        color={"white"}
      >
        Защо да изберете нас
        </Text>
      
    </VStack>
  </HStack>
	);
}
