import { Box, HStack, VStack } from "@chakra-ui/layout";

const Footer: React.FC = () => {
  return (
    <HStack mb={["12vh", "0"]} justifyContent="space-evenly" flexWrap="wrap" gridRowStart="3" gridRowEnd="4" gridColumnStart="1" gridColumnEnd="4">
      <VStack>
        <Box w="10rem"></Box>
      </VStack>
      <VStack>
        <Box w="10rem"></Box>
      </VStack>
      <VStack>
        <Box w="10rem"></Box>
      </VStack>
    </HStack>
  )
}

export default Footer;
