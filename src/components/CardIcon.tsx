import { Button, ButtonProps } from '@chakra-ui/button';
import { useRouter } from 'next/dist/client/router';
interface CardIconType extends ButtonProps {
  router?: string
}
const CardIcon: React.FC<CardIconType> = ({ children, router, onClick, onMouseMove, ...props }) => {
  const { push, prefetch } = useRouter()
  return (
    <Button
      onMouseMove={router ? () => prefetch(router) : onMouseMove} onClick={router ? () => { push(router) } : onClick}
      _hover={{
        borderWidth: ["3px"],
        bg: ["gray.800"],
        _light: { bg: ["gray.50"] }
      }}
      bg="whiteAlpha.200"
      rounded="full" shadow="sm" borderWidth="2px" h="14" w="14" p="3.5" {...props}>
      {children}
    </Button>
  );
}

export default CardIcon;