import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { FiMoon, FiSun } from "react-icons/fi"
import CardIcon from "./CardIcon";

const ThemeColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <CardIcon onClick={toggleColorMode}>
      {colorMode === "light" ? <FiMoon size="100%" /> : <FiSun size="100%" />}
    </CardIcon>
  );
}

export default ThemeColorMode;