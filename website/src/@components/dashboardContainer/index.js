import { Box } from "@chakra-ui/react"
import Header from "../header";


const DashboardContainer = ({ children }) => {
    return (
        <Box className="container-dashboard">
            <Header />
            {children}
        </Box>
    )
}
export default DashboardContainer;