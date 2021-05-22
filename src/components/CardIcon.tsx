import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';

const CardIcon: React.FC<{ onClick: React.MouseEventHandler }> = ({ children, onClick }) => {
  const { colorMode } = useColorMode()

  return (
    <Button
      _hover={{
        borderWidth: ["3px"],
        bg: colorMode === "light" ? ["gray.50"] : ["gray.800"]
      }}
      bg="whiteAlpha.200"
      rounded="full" shadow="sm" borderWidth="2px" h="14" w="14" p="3.5" onClick={onClick}>
      {children}
    </Button>
  );
}

export default CardIcon;