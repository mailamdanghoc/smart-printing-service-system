import React from 'react';
import styles from '../styles/Login.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
    const history = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function submit(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:4000/nowlogin", {
                username: username, password: password
            })
            .then(res => {
                console.log(res.data)
                if (res.data == "ADMIN logged in") {
                    history("/homeadmin", {state: {id: username}})
                }
                else if (res.data == "STUDENT logged in") {
                    history("/loggedinhomepage", {state: {id: username}})
                }
                else if (res.data == "Incorrect password") {
                    alert("Incorrect password")
                }
                else if (res.data == "not exist") {
                    alert("No record in the database")
                }
                else {
                    alert("Unknown")
                }
            })
            .catch(e => {
                alert("wrong info")
                console.log(e)
            })
        }
        catch(e) {
            console.log(e)
        }
    }

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
                <form action="POST" className={styles.form}>
                    <div><p>Đăng nhập</p></div>
                    <div><label>Tên đăng nhập</label></div>
                    <div><input type="text" name="username" onChange={(e) => {setUsername(e.target.value)}}></input></div>
                    <div><label>Mật khẩu</label></div>
                    <div><input type="password" name="password" onChange={(e) => {setPassword(e.target.value)}}></input></div>
                    <div><input id="submit" type="submit" name="submit" value="Xác nhận" onClick={submit}></input></div>
                </form>
            </div>
        </body>
    );
}
export default Login;