import { Box, Grid } from "@chakra-ui/layout"
import BottonBar from "./BottomBar"
import Footer from "./Footer"
import TopBar from "./TopBar"

const Layout: React.FC = ({ children }) => {
  return (
    <Grid maxW="100vw" minH="100vh">
      <TopBar />
      <Box mt="12vh" mx={["4", "10", "20", "10rem", "16rem"]} gridRowStart="2" gridRowEnd="3" gridColumnStart="1" gridColumnEnd="4">
        {children}
      </Box>
      <Footer />
      <BottonBar />
    </Grid>
  )
}
export default Layout
