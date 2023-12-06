import React from 'react';
import '../styles/styles.css';
import logo_hcmut from '../images/logo_hcmut.png';
import drive from '../images/drive.png'
import { Outlet, Link } from "react-router-dom";
function HomePage() {
    const fileInput = React.useRef(null);

    const handleButtonClick = () => {
      fileInput.current.click();
    };
  
    return (
        <body>
            <nav>
                <div class="navbar">
                    <ul>
                        <li>
                            <Link to='/'
                            ><img
                                    style={{ width: '500px' }}
                                    src={logo_hcmut}
                                    alt="logo_hcmut"
                                /></Link>
                        </li>
                        <li><Link to='/'>TẠO ĐƠN IN</Link></li>
                        <li><a href="#">XEM LỊCH SỬ</a></li>
                        <li><a href="#">THANH TOÁN</a></li>
                        <li><a href='/login'>ĐĂNG NHẬP</a></li>
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
                            <input type="file" ref={fileInput} style={{ display: 'none' }} />
                                <Link to = '/upload-document'><button onClick={handleButtonClick}>Chọn file</button></Link>
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
export default HomePage;