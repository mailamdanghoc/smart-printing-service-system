import React from 'react';
import styles from '../styles/Login.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import { Outlet, Link } from "react-router-dom";
export const loginData = [
    {
        username: "",
        password: "",
    },
];

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
      loginData[0].username = event.target.value; // Update the username in loginData
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      loginData[0].password = event.target.value; // Update the password in loginData
    };
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
                        <li><input type="text" name="username" value={username} onChange={handleUsernameChange}></input></li>
                        <li><label>Mật khẩu</label></li>
                        <li><input type="password" name="password" value={password} onChange={handlePasswordChange} ></input></li>
                        <li><input id="submit" type="submit" name="submit" value="Xác nhận"></input></li>
                    </ul>
                </div>
            </div>
        </body>
    );
}
export default Login;