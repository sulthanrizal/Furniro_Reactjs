import { Box, Flex } from "@chakra-ui/react"
import './header.scss'
import ImagesAccount from "../../@images-svg/imgAccount";
import ImagesSearch from "../../@images-svg/imgSearch";
import ImagesLove from "../../@images-svg/imgLove";
import ImagesShopping from "../../@images-svg/imgShopping";
import { useNavigate } from "react-router";
import { onClickNav } from "./helper";


const Header = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-header">
            <Flex className="row-header">
                <Flex className="col-1-row">
                    <img src="https://www.furniro.shop/_next/image?url=%2Ffurniro-logo.png&w=64&q=75" />
                    <h1>Furnori</h1>
                </Flex>
                <Flex className="col-2-row">
                    <p onClick={() => onClickNav({ path: '/', navigate })}>Home</p>
                    <p onClick={() => onClickNav({ path: '/shop', navigate })}>Shop</p>
                    <p onClick={() => onClickNav({ path: '/about', navigate })}>About</p>
                    <p onClick={() => onClickNav({ path: '/contact', navigate })}>Contact</p>
                </Flex>
                <Flex className="col-3-row">
                    <ImagesAccount />
                    <ImagesSearch />
                    <ImagesLove />
                    <ImagesShopping />
                </Flex>
            </Flex>
        </Box>
    )
}
export default Header;