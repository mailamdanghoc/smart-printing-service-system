import React from "react"
import  {useLocation, useNavigate} from "react-router-dom"
import styles from '../styles/LoggedInHomePage.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import drive from '../images/drive.png'
import { Outlet, Link} from "react-router-dom";

function HomeAdmin() {
    const location = useLocation()
    const username = location.state ? location.state.id : null;
    return (
        <body>
            <nav>
                <div className={styles.navbarlogged}>
                    <ul>
                        <li>
                            <Link to="/homeadmin"
                            ><img
                                    style={{ width: '500px' }}
                                    src={logo_hcmut}
                                    alt="logo_hcmut"
                                /></Link>
                        </li>
                        <li><Link to="/homeadmin">TRANG CHỦ</Link></li>
                        <li><Link to="/history">XEM LỊCH SỬ</Link></li>
                        <li><Link to="#">XEM MÁY IN</Link></li>
                        <li><i className="fa-solid fa-user"></i><p>{username}</p></li>
                    </ul>
                </div>
            </nav>
        </body>
    )
}

export default HomeAdmin