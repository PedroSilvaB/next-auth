import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { Image } from "@chakra-ui/image"
import { Box, Container, HStack, Text } from "@chakra-ui/layout"
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/menu"
import { Skeleton } from "@chakra-ui/skeleton"
import { signIn, signOut, useSession } from "next-auth/client"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import { MdPerson } from "react-icons/md"
const ProfileIcon: React.FC<{ src: string, isLoaded: boolean, alt: string }> = ({ src, isLoaded, alt }) => {
  return (
    <Skeleton isLoaded={isLoaded} rounded="full">
      {src &&
        <Image alt={alt} rounded="full"
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
  return (
    <Menu isLazy>
      <MenuButton
        bg="whiteAlpha.200"
        _hover={{
          borderWidth: ["3px"],
          bg: ["gray.800"],
          _light: { bg: ["gray.50"] }
        }}
        _expanded={{
          bg: ["gray.800"],
          _light: { bg: ["gray.50"] }
        }}
        w={["14", "14", "52"]} h="14" px={["0", "1", "1.5"]}
        py={["0", "1", "4"]} rounded="full" shadow="sm" borderWidth="2px" >
        <HStack justifyContent="center" >
          <ProfileIcon src={session?.user.image} alt={session?.user.name} isLoaded={!loading} />
          <Text w="70%" display={["none", "none", "initial"]} isTruncated>{session?.user.name || "Fazer Login"}</Text>
        </HStack>

      </MenuButton>
      <MenuList mb="2" minW="20vw" rounded="md" _light={{ bg: ["white"] }} bg="black" shadow="sm">
        {session?.user && <>
          <MenuItem as={Box}>
            <ProfileIcon src={session?.user.image} alt={session?.user.name} isLoaded={!loading} />
            <Container maxW="80%">
              <Text isTruncated>
                Olá, {session?.user.name}
              </Text>
              <Text fontSize="sm" isTruncated>
                {session?.user.email}
              </Text>
            </Container>
          </MenuItem>
          <MenuItem>My Account</MenuItem>
          <MenuDivider /></>}
        <MenuItem flexDirection="row" letterSpacing="4" onClick={() => session ? signOut() : signIn("google")}>
          {!session && <>
            <FiLogIn />
            <Text ml="2">Entrar</Text>
          </>}
          {session && <>
            <FiLogOut />
            <Text ml="2">Sair</Text>
          </>}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
export default Profile
