import styles from "./Navbar.module.scss";
import logo from "../../assets/Wilson_Olivia.png";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.logo}><img src={logo} alt="logo"/></div>
                <div className={styles.navbar}>
                    <nav>
                        <ul>
                            <li><Link to ="manga">Livre</Link></li>
                            <li><Link to ="film">Audiovisuelle</Link></li>
                            <li><Link to ="album">Musique</Link></li>
                            <li><Link to ="manga">Manga</Link></li>
                        </ul>
                    </nav>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Navbar