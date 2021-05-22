import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, HStack, Text } from "@chakra-ui/layout"
import { MdFavoriteBorder } from "react-icons/md"
import { BiSearch } from "react-icons/bi"

import CardIcon from "./CardIcon"
import Profile from "./Profile"
import ThemeColorMode from "./ThemeColorMode"

const TopBar: React.FC = () => {
  return (
    <HStack
      w="full" h="12vh" justifyContent="space-between" backdropFilter="saturate(180%) blur(5px)" position="fixed" zIndex="10" shadow="md"
      borderColor="whiteAlpha.300" borderBottomWidth="2px">
      <Flex justifyContent="flex-start" px={4} pl={["4", "8", "6", "10rem"]} w="full">
        <Text borderBottom="4px" fontWeight="700" fontSize="xl" borderColor="primary.200">
          WinTec
        </Text>
      </Flex>
      <HStack justifyContent="flex-end" w="full" maxH="10vh" px={4} pr={["4", "8", "10", "10", "10rem"]} py={"3"}>
        <HStack display={["none", "flex"]}>
          <CardIcon onClick={() => { }}>
            <BiSearch size="100%" />
          </CardIcon>
          <CardIcon onClick={() => { }}>
            <MdFavoriteBorder size="100%" />
          </CardIcon>
        </HStack>
        <ThemeColorMode />
        <Profile />
      </HStack>
    </HStack>
  )
}
export default TopBar
