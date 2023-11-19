import '../styles/UploadDocument.css';
import logo_hcmut from '../images/logo_hcmut.png';
import capstone from '../images/Capstone_Project_hk231_2023_v3.png';

function UploadDocument() {
  return (
<body>
    <nav>
      <div class="navbar">
        <ul>
          <li>
            <a href="#"
              ><img
                style={{ width: '500px' }}
                src={logo_hcmut}
                alt="logo_hcmut"
            /></a>
          </li>
          <li><a href="#">TẠO ĐƠN IN</a></li>
          <li><a href="#">XEM LỊCH SỬ</a></li>
          <li><a href="#">THANH TOÁN</a></li>
          <li><a href="#">ĐĂNG NHẬP</a></li>
          <li><a href="#">ĐĂNG KÝ</a></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="back_btn">
        <a href="../index.html"><button>Quay lại</button></a>
      </div>
      <div class="content">
        <ul>
          <li><p>Tải file</p></li>
          <li>
            <div id="area">
              <div id="file">
                <div id="image">
                  <img
                    src={capstone}
                    alt="file_image"
                    style={{ width: '200px', height: '100%' }}
                  />
                </div>
                <div id="label">
                  <p>Capstone_Project_hk231_2023_v3.pdf</p>
                </div>
              </div>
            </div>
          </li>
          <li><p>kéo thả tệp vào đây</p></li>
          <li>
            <a href="SpecifyProperties.html"><button>Xác nhận</button></a>
          </li>
        </ul>
      </div>
    </div>
  </body>
  );
}
export default UploadDocument;
