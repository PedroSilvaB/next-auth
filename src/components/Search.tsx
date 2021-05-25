import { ButtonProps } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input, InputGroup, InputRightAddon, InputRightElement } from '@chakra-ui/input';
import { Box, VStack } from '@chakra-ui/layout';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import useLayout from '../contexts/LayoutContext';
import CardIcon from './CardIcon';


const Search: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { menu, setMenu } = useLayout()
  useEffect(() => {
    if (menu) {
      setMenu(false)
    }
  }, [isOpen])

  const firstField = useRef()
  return (
    <>
      <CardIcon onClick={onOpen} aria-label="Search" name="Search">
        <BiSearch size="100%" />
      </CardIcon>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        onClose={onClose}
        size="full"
      >
        <DrawerContent top="0" display="flex" flexDirection="column" alignItems="center" justifyContent="center" pt="4" bg="blackAlpha.700" _light={{ bg: ["whiteAlpha.700"] }} backdropFilter="saturate(180%) blur(10px)">
          <DrawerHeader display="flex" justifyContent="flex-end" w={["full", "80%"]}>
            <CardIcon onClick={onClose}>
              <RiCloseFill size="100%" />
            </CardIcon>
          </DrawerHeader>
          <DrawerBody as={VStack} spacing="4" w={["full", "60vw"]}>
            <InputGroup>
              <Input aria-label="Search" name="Search" px="6" pr="10"
                h="14" rounded="full" fontSize="lg"></Input>
              <InputRightElement onClick={() => alert("oi")} cursor="pointer" w="16" h="14" p="3.5">
                <BiSearch size="100%" />
              </InputRightElement>
            </InputGroup>
            <Box h="full" w="full">

            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Search;