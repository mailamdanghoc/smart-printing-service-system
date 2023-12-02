import React from 'react';
import style from '../styles/ChoosePrinter.module.css';
import { Outlet, Link } from "react-router-dom";
// import choosePrinterStage from '../modules/choosePrinterStage.js';
import printer_icon from '../images/printer_icon.png';
import logo_hcmut from '../images/logo_hcmut.png';
// import choosePrinterStage from '../modules/choosePrinterStage.js';

export default function ChoosePrinter() {
  const [printerInfo, setPrinterInfo] = React.useState(false);
  const togglePrinterInfo = () => {
      setPrinterInfo(!printerInfo);
  }
  return (
    <React.Fragment>
      <nav>
        <div className={style.navbar}>
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

      <div className={style.container}>
        <div className={style.back_btn}>
          <Link to='/specify-properties'><button>Quay lại</button></Link>
        </div>
        <div className={style.content}>
           <div className={style.item}>
            <div className={style.image} id="free">
              <img src={printer_icon} alt="printer-img" onClick={togglePrinterInfo} />
            </div>
            <div className={style.label}>Máy in màu Epson L121</div>
          </div>
          <div className={style.item} id="busy">
            <div className={style.image}>
              <img src={printer_icon} alt="printer-img" onClick={togglePrinterInfo}/>
            </div>
            <div className={style.label}>Máy in màu Epson L121</div>
          </div>
          <div className={style.item} id="unvailable">
            <div className={style.image}>
              <img src={printer_icon} alt="printer-img" />
            </div>
            <div className={style.label}>Máy in màu Epson L121</div>
          </div>
          {/* <div className={style.item}>
          <div className={style.image}>
            <img src={printer_icon} alt="printer-img" />
          </div>
          <div className={style.label}>Máy in màu Epson L121</div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img src={printer_icon} alt="printer-img" />
          </div>
          <div className={style.label}>Máy in màu Epson L121</div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img src={printer_icon} alt="printer-img" />
          </div>
          <div className={style.label}>Máy in màu Epson L121</div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img src={printer_icon} alt="printer-img" />
          </div>
          <div className={style.label}>Máy in màu Epson L121</div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img src={printer_icon} alt="printer-img" />
          </div> 
          <div className={style.label}>Máy in màu Epson L121</div>
        </div> */}

            {printerInfo && 
            (<div className={style.printer_info_free} style={{ display: 'flex' }}>
            <div className={style.temp}>
              <div className={style.name_and_img}>
                <div id="name">Máy in màu Epson L121</div>
                <div id="img">
                  <img src={printer_icon} alt="printer-img" />
                </div>
              </div>

                <div className={style.info}>
                  <div>
                    <p>Tình trạng: <span>Trống</span></p>
                  </div>
                  <div><p>Hàng đợi: 0</p></div>
                  <div><p>Loại: In màu</p></div>
                  <div><p>Xuất xứ: Việt Nam</p></div>
                  <div><p>Mã máy: 0x01</p></div>
                  <div><p>Vị trí: Thư viện A2</p></div>
                  <div>
                    <button onClick={togglePrinterInfo}>Quay lại</button>
                    <Link to = '/pay-order'><button>Xác nhận</button></Link>
                  </div>
                </div>
            </div>
          </div>
            )}
        </div>
        {/* {printerInfo && (<div className={style.printer_info_busy} style={{ display: 'flex' }} >
          <div className={style.temp}>
            <div className={style.name_and_img}>
              <div id="name">Máy in màu Epson L121</div>
              <div id="img">
                <img src={printer_icon} alt="printer-img" />
              </div>
            </div>

            <div className={style.info}>
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
        )}
        <div className={style.printer_info_unavailable}>
          <div className={style.temp}>
            <div className={style.name_and_img}>
              <div id="name">Máy in màu Epson L121</div>
              <div id="img">
                <img src={printer_icon} alt="printer-img" />
              </div>
            </div> */}

            {/* <div className={style.info}>
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
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}