import { Flex, HStack, Text } from "@chakra-ui/layout"
import { MdFavoriteBorder } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { RiCloseFill } from "react-icons/ri"
import CardIcon from "./CardIcon"
import Profile from "./Profile"
import ThemeColorMode from "./ThemeColorMode"
import useLayout from "../contexts/LayoutContext"
import { useEffect } from "react"
import Menu from "./Menu"
import Search from "./Search"

const TopBar: React.FC = () => {
  const { menu, setMenu } = useLayout()
  useEffect(() => {
    (() => {
      if (menu) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    })()
  }, [menu])
  return (
    <HStack py="2" flexWrap={menu ? "wrap" : "initial"} onScroll={(e) => console.log(e)} as="header" h={menu ? ["88vh", "100vh"] : "12vh"} bottom={menu ? ["12vh", "0"] : "initial"}
      w="full" justifyContent="space-between" backdropFilter="saturate(180%) blur(10px)" position="fixed" zIndex="10" shadow="md"
      borderColor="whiteAlpha.300" bg="blackAlpha.700" _light={{ bg: ["whiteAlpha.700"] }} borderBottomWidth="2px">
      {menu &&
        <Menu />
      }
      <Flex justifyContent="flex-start" alignItems="center" px={4} pl={["4", "4", "8", "6", "10rem"]} w={menu ? "auto" : "full"} h="10vh">
        <Text borderBottom="4px" fontWeight="700" fontSize="xl" borderColor="primary.200">
          WinTec
        </Text>
      </Flex>
      <HStack as="nav" justifyContent="flex-end" w={menu ? "auto" : "full"} maxH="10vh" px={4} pr={["4", "4", "8", "6", "10rem"]} py={"3"}>
        <HStack display={["none", "flex"]}>
          <Search />
          <CardIcon>
            <MdFavoriteBorder size="100%" />
          </CardIcon>
          <CardIcon aria-label="Menu" name="Menu" onClick={() => { setMenu(!menu) }}>
            {menu ? <RiCloseFill size="100%" /> : <FiMenu size="100%" />}
          </CardIcon>
        </HStack>
        <ThemeColorMode />
        <Profile />
      </HStack>
    </HStack>
  )
}
export default TopBar
