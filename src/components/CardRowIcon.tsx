import { Button, ButtonProps } from '@chakra-ui/button';
import { HStack, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import CardIcon from './CardIcon';

interface CardRowIconType extends ButtonProps {
  router?: string,
  title: string
}
const CardRowIcon: React.FC<CardRowIconType> = ({ children, title, router, ...props }) => {
  const { push, prefetch } = useRouter()
  return (
    <Button aria-label={title} name={title} onMouseMove={() => prefetch(router)} onClick={() => push(router)} as={HStack} h="14" justifyContent="flex-start" rounded="full" borderColor="whiteAlpha.300" borderWidth="1px" shadow="sm"
      w={"52"}
      spacing="8"
      pl="0"
      _hover={{
        cursor: ["pointer"],
        borderWidth: ["3px"],
        bg: ["gray.800"],
        _light: { bg: ["gray.50"] }
      }}
      bg="whiteAlpha.200"
      {...props}
    >
      <CardIcon as="span">
        {children}
      </CardIcon>
      <Text fontSize="xl" isTruncated>
        {title}
      </Text>
    </Button>
  );
}

export default CardRowIcon;