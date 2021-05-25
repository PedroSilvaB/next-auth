import { StackProps, VStack } from "@chakra-ui/layout";
import { BsBlockquoteRight } from "react-icons/bs";
import { motion } from "framer-motion"
import CardRowIcon from "./CardRowIcon";

const Menu: React.FC<StackProps> = ({ ...pros }) => {
  return (
    <VStack as={motion.div} initial={{ scale: 0.5 }} animate={{ scale: 1 }}
      transitionDuration="1" spacing={"4"} h="88%" overflowY="auto" justifyContent="center" w="full" {...pros}>
      <CardRowIcon router="/blog" title="Blog" >
        <BsBlockquoteRight size="100%" />
      </CardRowIcon>
    </VStack>
  )
}

export default Menu;