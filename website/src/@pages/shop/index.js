import { Box, Flex } from "@chakra-ui/react"
import './shop.scss'
import ShoppingImg from "./imgSvg/shop";
import Thropy from "./imgSvg/thropy";
import Warranty from "./imgSvg/warranty";
import Shipping from "./imgSvg/shipping";
import Support from "./imgSvg/support";
import { onClickNav } from "../../@components/header/helper";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-shop">
            <Flex className="header-shop">
                <img src="https://www.furniro.shop/_next/image?url=%2Fsmall-hero-teaser.png&w=1920&q=75" />
                <Flex className="text-img-top">
                    <span>Shop</span>
                    <Box className="text-img-bottom">
                        <Flex className="text-bottom">
                            <p onClick={() => onClickNav({ path: '/', navigate })} className="text-bottom-first">Home</p>
                            <ShoppingImg />
                            <p className="text-bottom-last">Shop</p>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Box className="header-shop-bottom">
                <Box className="shop-bottom">
                    <span>No products available in this category</span>
                </Box>
            </Box>
            <Box className="body-shop">
                <Flex className="flex-body-shop">
                    <Thropy />
                    <Warranty />
                    <Shipping />
                    <Support />
                </Flex>
            </Box>
            <hr className="line-top" />
            <Box className="footer-home">
                <Box className="footer-flex-blox">
                    <Box className="footer-box-top">
                        <span className="weight-text">Furniro.</span>
                        <p>
                            400 University Drive Suite 200 Coral
                            <br />
                            Gables,
                            <br />
                            FL 33134 USA
                        </p>
                    </Box>
                    <Box className="footer-box-footer">
                        <ul>
                            <li onClick={() => onClickNav({ path: '/', navigate })}>Home</li>
                            <li className="weight-text" onClick={() => onClickNav({ path: '/shop', navigate })}>Shop</li>
                            <li onClick={() => onClickNav({ path: '/about', navigate })}>About</li>
                            <li onClick={() => onClickNav({ path: '/contact', navigate })}>Contact</li>
                        </ul>
                    </Box>
                </Box>
                <hr className="line-bottom" />
                <p >
                    2024 furniro. All rights reserved
                </p>
            </Box>
        </Box>
    )
}
export default Shop;