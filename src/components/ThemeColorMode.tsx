import { ButtonProps } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon, FiSun } from "react-icons/fi"
import CardIcon from "./CardIcon";

const ThemeColorMode: React.FC<ButtonProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <CardIcon onClick={toggleColorMode} aria-label="Theme" name="Theme">
      {colorMode === "light" ? <FiMoon size="100%" /> : <FiSun size="100%" />}
    </CardIcon>
  );
}

export default ThemeColorMode;