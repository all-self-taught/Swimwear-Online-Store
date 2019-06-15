import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/FooterLinks/Contact";
import Story from "./components/FooterLinks/Story";
import Press from "./components/FooterLinks/Press";
import Testimonial from "./components/Testimonial";

export default [
    {
        path: "/",
        exact: true,
        component: LandingPage
    }
]