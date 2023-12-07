import React from 'react';
import styles from '../styles/UploadDocument.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import capstone from '../images/Capstone_Project_hk231_2023_v3.png';
import { Outlet, Link } from "react-router-dom";
function UploadDocument() {
  return (
<body>
    <nav>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to='/loggedinhomepage'
              ><img
                style={{ width: '500px' }}
                src={logo_hcmut}
                alt="logo_hcmut"
            /></Link>
          </li>
          <li><Link to='/loggedinhomepage'>TẠO ĐƠN IN</Link></li>
          <li><a href="#">XEM LỊCH SỬ</a></li>
          <li><a href="#">THANH TOÁN</a></li>
          <li><i className="fa-solid fa-user"></i><p>TÊN ĐĂNG NHẬP</p></li>
        </ul>
      </div>
    </nav>

    <div className={styles.container}>
      <div className={styles.back_btn}>
        <Link to = '/loggedinhomepage'><button>Quay lại</button></Link>
      </div>
      <div className={styles.content}>
        <ul>
          <li><p>Tải file</p></li>
          <li>
            <div id={styles.area}>
              <div id={styles.file}>
                <div id={styles.image}>
                  <img
                    src={capstone}
                    alt="file_image"
                    style={{ width: '200px', height: '100%' }}
                  />
                </div>
                <div id={styles.label}>
                  <p>Capstone_Project_hk231_2023_v3.pdf</p>
                </div>
              </div>
            </div>
          </li>
          <li><p>kéo thả tệp vào đây</p></li>
          <li>
            <Link to = '/specify-properties'><button>Xác nhận</button></Link>
          </li>
        </ul>
      </div>
    </div>
  </body>
  );
}
export default UploadDocument;
