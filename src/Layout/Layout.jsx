import { useLocation, Outlet} from "react-router-dom";
import Home from "../Pages/Accueil/Accueil";
import Navbar from "../Layout/Navbar/Navbar";
import Accueil from "../Pages/Accueil/Accueil";
import Footer from "./Footer/Footer";

const Layout = () =>{
    const {pathname} = useLocation();
    
    return(
        <>
            <Navbar/>
            {pathname === "/" ? <Accueil/> : <Outlet/>}
            <Footer/>
        </>
    )
}

export default Layout