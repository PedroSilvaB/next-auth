import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { Image } from "@chakra-ui/image"
import { Box, Container, HStack, Text } from "@chakra-ui/layout"
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/menu"
import { Skeleton } from "@chakra-ui/skeleton"
import { signIn, signOut, useSession } from "next-auth/client"
import { MdPerson } from "react-icons/md"
const ProfileIcon: React.FC<{ src: string, isLoaded: boolean }> = ({ src, isLoaded }) => {
  return (
    <Skeleton isLoaded={isLoaded} rounded="full">
      {src &&
        <Image rounded="full"
          w="10" h="10" src={src}>
        </Image >
      }{
        !src && <Box rounded="full"
          w="10" h="10" p="1.5">
          <MdPerson size="100%" />
        </Box>
      }
    </Skeleton>
  );
}

const Profile: React.FC = () => {
  const [session, loading] = useSession()
  const { colorMode } = useColorMode()
  return (
    <Menu isLazy>
      <MenuButton
        bg="whiteAlpha.200"
        _hover={{
          borderWidth: ["3px"],
          bg: colorMode === "light" ? ["gray.50"] : ["gray.800"]
        }}
        _active={{ bg: colorMode === "light" ? ["gray.50"] : ["gray.800"] }}
        as={Button} w={["14", "14", "52"]} h="14" px={["0", "1", "1.5"]}
        py={["0", "1", "4"]} rounded="full" shadow="sm" borderWidth="2px" >
        <HStack justifyContent="center" >
          <ProfileIcon src={session?.user.image} isLoaded={!loading} />
          <Text w="70%" display={["none", "none", "initial"]} isTruncated>{session?.user.name || "Fazer Login"}</Text>
        </HStack>

      </MenuButton>
      <MenuList rounded="md" _light={{ bg: ["white"] }} bg="black" shadow="sm">
        {session?.user && <> <MenuGroup>
          <MenuItem as={Box}>
            <HStack>
              <ProfileIcon src={session?.user.image} isLoaded={!loading} />
              <Text maxW="10rem" isTruncated>
                Olá, {session?.user.name}
              </Text>
            </HStack>
          </MenuItem>
          <MenuItem>My Account</MenuItem>
          {/* <MenuItem>

            </MenuItem> */}
        </MenuGroup>
          <MenuDivider /></>}
        <MenuGroup>
          <MenuItem onClick={() => session ? signOut() : signIn("google")}>
            <Container>
              {!session && <>
                Entrar
                </>}
              {session && <>
                Sair
                </>}
            </Container>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
export default Profile
