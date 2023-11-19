import '../styles/ChoosePrinter.css';
import choosePrinterStage from '../modules/choosePrinterStage.js';
import printer_icon from '../images/printer_icon.png';
import logo_hcmut from '../images/logo_hcmut.png';

function ChoosePrinter() {
  return (
    <body>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">
                <img
                  style={{ width: '500px' }}
                  src={logo_hcmut}
                  alt="logo_hcmut"
                />
              </a>
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
          <a href="SpecifyProperties.html"><button>Quay lại</button></a>
        </div>
        <div class="content">
          <div class="item">
            <div class="image" id="free">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item" id="busy">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item" id="unvailable">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>
          <div class="item">
            <div class="image">
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div class="label">Máy in màu Epson L121</div>
          </div>

          <div class="printer_info_free">
            <div class="temp">
              <div class="name_and_img">
                <div id="name">Máy in màu Epson L121</div>
                <div id="img">
                  <img src={printer_icon} alt="printer-img" />
                </div>
              </div>

              <div class="info">
                <div>
                  <p>Tình trạng: <span>Trống</span></p>
                </div>
                <div><p>Hàng đợi: 0</p></div>
                <div><p>Loại: In màu</p></div>
                <div><p>Xuất xứ: Việt Nam</p></div>
                <div><p>Mã máy: 0x01</p></div>
                <div><p>Vị trí: Thư viện A2</p></div>
                <div>
                  <a href="#" id="close_free"><button>Quay lại</button></a>
                  <a href="PayOrder.html"><button>Xác nhận</button></a>
                </div>
              </div>
            </div>
          </div>

          <div class="printer_info_busy">
            <div class="temp">
              <div class="name_and_img">
                <div id="name">Máy in màu Epson L121</div>
                <div id="img">
                  <img src={printer_icon} alt="printer-img" />
                </div>
              </div>

              <div class="info">
                <div>
                  <p>Tình trạng: <span>Đang in</span></p>
                </div>
                <div>
                  <p>Hàng đợi: <span>02</span></p>
                </div>
                <div><p>Loại: In màu</p></div>
                <div><p>Xuất xứ: Việt Nam</p></div>
                <div><p>Mã máy: 0x02</p></div>
                <div><p>Vị trí: Thư viện A2</p></div>
                <div>
                  <a href="#" id="close_busy"><button>Quay lại</button></a>
                  <a href="PayOrder.html"><button>Xác nhận</button></a>
                </div>
              </div>
            </div>
          </div>

          <div class="printer_info_unavailable">
            <div class="temp">
              <div class="name_and_img">
                <div id="name">Máy in màu Epson L121</div>
                <div id="img">
                  <img src={printer_icon} alt="printer-img" />
                </div>
              </div>

              <div class="info">
                <div>
                  <p>Tình trạng: <span>Bảo trì</span></p>
                </div>
                <div>
                  <p>Hàng đợi: 0</p>
                </div>
                <div><p>Loại: In màu</p></div>
                <div><p>Xuất xứ: Việt Nam</p></div>
                <div><p>Mã máy: 0x03</p></div>
                <div><p>Vị trí: Thư viện A2</p></div>
                <div><p>Vui lòng chọn máy khác</p></div>
                <div>
                  <a href="#" id="close_unavailable"><button>Quay lại</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src={choosePrinterStage}></script>
    </body>
  );
}
export default ChoosePrinter;