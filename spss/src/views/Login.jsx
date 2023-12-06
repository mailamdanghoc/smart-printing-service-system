import React from 'react';
import styles from '../styles/Login.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import { Outlet, Link } from "react-router-dom";
function Login() {
    return (
        <body>
            <nav>
                <div className={styles.barnav}>
                    <ul>
                        <li>
                            <Link to='/'
                            ><img
                                    style={{ width: '500px' }}
                                    src={logo_hcmut}
                                    alt="logo_hcmut"
                                /></Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.login_content}>
                <div className={styles.form}>
                    <ul>
                        <li><p>Đăng nhập</p></li>
                        <li><label>Tên đăng nhập</label></li>
                        <li><input type="text" name="username"></input></li>
                        <li><label>Mật khẩu</label></li>
                        <li><input type="password" name="password"></input></li>
                        <li><input id="submit" type="submit" name="submit" value="Xác nhận"></input></li>
                    </ul>
                </div>
            </div>
        </body>
    );
}
export default Login;