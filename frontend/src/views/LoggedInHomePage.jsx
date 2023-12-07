import React from 'react';
import styles from '../styles/LoggedInHomePage.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import drive from '../images/drive.png'
import { Outlet, Link } from "react-router-dom";
import  { useLocation } from "react-router-dom"

function LoggedInHomePage() {
    const location = useLocation()
    return (
        <body>
            <nav>
                <div className={styles.navbarlogged}>
                    <ul>
                        <li>
                            <Link to="/loggedinhomepage"
                            ><img
                                    style={{ width: '500px' }}
                                    src={logo_hcmut}
                                    alt="logo_hcmut"
                                /></Link>
                        </li>
                        <li><Link to="/loggedinhomepage">TẠO ĐƠN IN</Link></li>
                        <li><Link to="#">XEM LỊCH SỬ</Link></li>
                        <li><Link to="#">THANH TOÁN</Link></li>
                        <li><i className="fa-solid fa-user"></i><p>TÊN ĐĂNG NHẬP</p></li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <ul>
                    <li><p>TẠO ĐƠN IN</p></li>
                    <li><p>Chọn tệp cần in</p></li>
                    <li>
                        <div class="get_file">
                            <div class="get_file_item1">
                                <Link to = '/upload-document'><button>Chọn file</button></Link>
                            </div>
                            <div class="get_file_item2">
                                <a href="#"
                                ><button>
                                        <img
                                            style={{ width: '35.5px', height: '20px' }}
                                            src={drive}
                                            alt="drive"
                                        /></button></a>
                            </div>
                            <div class="get_file_item3">
                                <a href="#"
                                ><button>
                                        <i class="fa-solid fa-link"></i></button></a>
                            </div>
                        </div>
                    </li>
                    <li><p>hoặc kéo thả tệp vào đây</p></li>
                </ul>
            </div>
        </body>
    );
}
export default LoggedInHomePage;