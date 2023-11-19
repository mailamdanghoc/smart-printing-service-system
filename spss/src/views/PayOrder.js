import '../styles/PayOrder.css';
import logo_hcmut from '../images/logo_hcmut.png';
import logo_bk from '../images/logo_bk.png';

function PayOrder() {
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
        <div><p>Cảm ơn bạn đã sử dụng dịch vụ!</p></div>
        <div><p>Vui lòng xuất trình phiếu khi lấy đơn</p></div>
        <div class="area">
          <div class="info">
            <div id="information">
              <p>Dịch vụ in ấn thông minh trường Đại học Bách Khoa</p>
              <p>
                <i style={{ fontFamily: 'Times New Roman, Times, serif' }}
                >HCMUT Student Smart Printing Service</i>
              </p>
              <p>268 Lý Thường Kiệt, Phường 14, Quận 10, TPHCM, Việt Nam</p>
              <p>
                <i style={{ fontFamily: 'Times New Roman, Times, serif' }}
                >268 Ly Thuong Kiet St. District 10, Ho Chi Minh City,
                  VietNam</i>
              </p>
              <p>Website: www.hcmut-spss-catlovers.com</p>
            </div>
            <div id="logo">
              <img
                src={logo_bk}
                alt="logo_bk"
                style={{ width: '100px' }}
              />
            </div>
          </div>
          <div class="confirm">
            <div><p id="label">Phiếu xác nhận</p></div>
            <div id="confirmation">
              <div>
                <ul>
                  <li><p>Mã đơn in</p></li>
                  <li><p>Mã giao dịch</p></li>
                  <li><p>Mã mãy in</p></li>
                  <li><p>Số lượng giấy in</p></li>
                  <li><p>Dự kiến lấy đơn</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p>0x00</p></li>
                  <li><p>HCMUT00000XX</p></li>
                  <li><p>0x01</p></li>
                  <li><p>10</p></li>
                  <li><p>12h61 - 31.10.2023</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="time"><p>Thời gian đặt hàng: 3h00 - 30.10.2023</p></div>
        </div>
        <div class="btn-gr1">
          <div><button>Tải phiếu</button></div>
          <div><button>Lấy liên kết</button></div>
          <div><button>Gửi qua mail</button></div>
        </div>
        <div class="btn-gr2">
          <div>
            <a href="../index.html"><button>Tiếp tục in đơn mới</button></a>
          </div>
          <div><button>Xem lịch sử in</button></div>
          <div><button>Liên hệ với chúng tôi</button></div>
        </div>
      </div>
    </body>
    );
}
export default PayOrder;
