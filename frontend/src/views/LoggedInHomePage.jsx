import React from 'react';
import styles from '../styles/LoggedInHomePage.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import drive from '../images/drive.png'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"

function LoggedInHomePage() {
    const location = useLocation()
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = React.useState(null);
    const fileInputRef = React.useRef();

    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    React.useEffect(() => {
        // Check if a file is selected before navigating
        if (selectedFile) {
            // Navigate to the next route when a file is selected
            navigate('/specify-properties', { state: { file: selectedFile } });
        }
    }, [selectedFile, navigate]);
    const username = location.state ? location.state.id : null;
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
                        <li><Link to="/history">XEM LỊCH SỬ</Link></li>
                        <li><Link to="#">THANH TOÁN</Link></li>
                        <li><i className="fa-solid fa-user"></i><p>{username}</p></li>
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
                                <Link><button onClick={() => fileInputRef.current.click()}>Chọn file</button></Link>
                                <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileUpload} />
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