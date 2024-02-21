import About from "../@pages/about";
import Contact from "../@pages/contact";
import Home from "../@pages/home";
import Shop from "../@pages/shop";


const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/about',
        element: <About />
    }
    ,
    {
        path: '/contact',
        element: <Contact />
    }
]
export default router;
