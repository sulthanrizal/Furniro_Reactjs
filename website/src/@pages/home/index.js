import { Box, Flex } from "@chakra-ui/layout"
import './home.scss'
import { onClickNav } from "../../@components/header/helper";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-home">
            <Box className="header-home">
                <Box className="content-home-header">
                    <Flex className="content-col-home-header">
                        <span>New Arrival</span>
                        <h1>Discover Our New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </Flex>
                    <p className="last-text-header" onClick={() => onClickNav({ path: '/shop', navigate })}>BUY NOW</p>
                </Box>
            </Box>
            <Flex className="body-home-top">
                <h1>Browse The Range</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Flex className="flex-box-body">
                    <Box className="flex-box-row">
                        <img src="https://www.furniro.shop/_next/image?url=%2FDining.png&w=384&q=75" />
                        <h3 className="flex-box-text">Dining</h3>
                    </Box>
                    <Box className="flex-box-row">
                        <img src="https://www.furniro.shop/_next/image?url=%2FLiving.png&w=384&q=75" />
                        <h3 className="flex-box-text">Living</h3>
                    </Box>
                    <Box className="flex-box-row">
                        <img src="https://www.furniro.shop/_next/image?url=%2FBedroom.png&w=384&q=75" />
                        <h3 className="flex-box-text">Bedroom</h3>
                    </Box>
                </Flex>
            </Flex>
            <Box className="body-home-footer">
                <Flex className="body-footer-flex">
                    <h2>Our Product</h2>
                    <Flex className="flex-box-wrap-footer">
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-1">
                                    <p >New</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fsyltherine.png&w=384&q=75" />
                                    {/* <Flex className="box-opacity">
                                        <Box className="opacity-add-cart">
                                            <button>Add to cart</button>
                                        </Box>
                                    </Flex> */}
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Syltherine</h3>
                                    <p className="box-text">Stylish cafe chair</p>
                                    <p className="box-text-price">Rp 7.000,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-2">
                                    <p>-20%</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fgrifo.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Grifo</h3>
                                    <p className="box-text">Luxury big sofa</p>
                                    <p className="box-text-price">Rp 1.500,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fmuggo.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Muggo</h3>
                                    <p className="box-text">Elegant dining table</p>
                                    <p className="box-text-price">Rp 2.500,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-4">
                                    <p>-15%</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fpingky.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Pingky</h3>
                                    <p className="box-text">Comfy armchair</p>
                                    <p className="box-text-price">Rp 800,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-5">
                                    <p>New</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Flolito.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Lolito</h3>
                                    <p className="box-text">Ultimate lounge sofa</p>
                                    <p className="box-text-price">Rp 7.000,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-6">
                                    <p>-20%</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fvimora.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Vimora</h3>
                                    <p className="box-text">Vintage coffee table</p>
                                    <p className="box-text-price">Rp 950,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-7">
                                    <p>New</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fzephyr.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Zephyr</h3>
                                    <p className="box-text">Modern TV stand</p>
                                    <p className="box-text-price">Rp 350,00</p>
                                </Flex>
                            </Box>
                        </Box>
                        <Box className="box-wrap-footer">
                            <Box className="box-top">
                                <Box className="box-top-label-8">
                                    <p>-15%</p>
                                </Box>
                                <Box className="box-top-img">
                                    <img src="https://www.furniro.shop/_next/image?url=https%3A%2F%2Fuvipjxjweknmbvtqnarz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fproducts%2Fsydney.png&w=384&q=75" />
                                </Box>
                            </Box>
                            <Box className="box-footer">
                                <Flex className="flex-box-footer">
                                    <h3>Sydney</h3>
                                    <p className="box-text">Sleek office desk</p>
                                    <p className="box-text-price">Rp 450,00</p>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                    <p onClick={() => onClickNav({ path: '/shop', navigate })} className="show-shop"> Show More</p>
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
                            <li className="weight-text" onClick={() => onClickNav({ path: '/', navigate })}>Home</li>
                            <li onClick={() => onClickNav({ path: '/shop', navigate })}>Shop</li>
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
        </Box >
    )
}
export default Home;