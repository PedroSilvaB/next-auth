import { HStack } from '@chakra-ui/layout';
import React from 'react';
import CardIcon from './CardIcon';
import { BiHome } from "react-icons/bi"
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import useLayout from '../contexts/LayoutContext';
import { RiCloseFill } from 'react-icons/ri';
import Search from './Search';

const BottonBar: React.FC = () => {
  const { menu, setMenu } = useLayout()
  return (<HStack display={["flex", "none"]} w="full" h="12vh" bottom="0" justifyContent="space-evenly" backdropFilter="saturate(180%) blur(10px)" bg="blackAlpha.800" _light={{ bg: ["whiteAlpha.800"] }} position="fixed" zIndex="10" shadow="md"
    borderColor="whiteAlpha.300" borderBottomWidth="2px">

    <CardIcon router="/">
      <BiHome size="100%" />
    </CardIcon>
    <Search />
    <CardIcon>
      <MdFavoriteBorder size="100%" />
    </CardIcon>
    <CardIcon aria-label="Menu" name="Menu" onClick={() => { setMenu(!menu) }}>
      {menu ? <RiCloseFill size="100%" /> : <FiMenu size="100%" />}
    </CardIcon>
  </HStack>);
}

export default BottonBar;