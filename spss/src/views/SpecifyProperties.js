import '../styles/SpecifyProperties.css';
import printer_icon from '../images/printer_icon.png';
import logo_hcmut from '../images/logo_hcmut.png';

function SpecifyProperties() {
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
        <div class="properties">
          <ul>
            <li>
              <a href="UploadDocument.html"><button>Quay lại</button></a>
            </li>
            <li><p>Chọn lựa vị trí in</p></li>
            <li>
              <select name="places" id="places" required>
                <option value="Chọn vị trí" selected>Chọn vị trí</option>
                <option value="Thư viên A2 CS1">Thư viên A2 CS1</option>
                <option value="Thư viện BK.B1 CS2">Thư viên BK.B1 CS2</option>
              </select>
            </li>
            <li><p>Số tờ</p></li>
            <li><input type="text" placeholder="Nhập số tờ" /></li>
            <li><p>Bố cục</p></li>
            <li>
              <select name="layout" id="layout" required>
                <option value="Layout" selected>Layout</option>
                <option value="por">Portrait</option>
                <option value="land">Landscape</option>
              </select>
            </li>
            <li><p>Chọn trang cần in</p></li>
            <li>
              <input type="radio" id="even" name="page" /><label for="even"
              >Chỉ trang chẵn</label>
            </li>
            <li>
              <input type="radio" id="odd" name="page" /><label for="odd"
              >Chỉ trang lẻ</label>
            </li>
            <li>
              <input type="radio" id="all" name="page" /><label for="all"
              >Tất cả</label>
            </li>
            <li><p>Chọn khổ giấy</p></li>
            <li>
              <select name="size" id="size" required>
                <option value="size" selected>Size</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
              </select>
            </li>
            <li><p>Số trang trong một tờ</p></li>
            <li><input type="text" placeholder="Nhập số trang" /></li>
            <li>
              <input type="radio" id="one-side" name="side" /><label
                for="one-side"
              >In 1 mặt</label>
            </li>
            <li>
              <input type="radio" id="two-side" name="side" /><label
                for="two-side"
              >In 2 mặt</label>
            </li>
            <li>
              <p>Số giấy tiêu hao: <span>10 tờ</span></p>
            </li>
            <li>
              <a href="ChoosePrinter.html"><button>Xác nhận</button></a>
            </li>
            <li><p>Nhấn xác nhận sẽ chuyển sang phần chọn máy in</p></li>
          </ul>
        </div>

        <div class="paper"></div>
      </div>
    </body>
  );
}
export default SpecifyProperties;
