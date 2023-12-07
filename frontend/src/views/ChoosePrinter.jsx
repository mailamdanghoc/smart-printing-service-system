import React from 'react';
import style from '../styles/ChoosePrinter.module.css';
import { Outlet, Link } from "react-router-dom";
// import choosePrinterStage from '../modules/choosePrinterStage.js';
import printer_icon from '../images/printer_icon.png';
import logo_hcmut from '../images/logo_hcmut.png';
import axios from "axios"
// import choosePrinterStage from '../modules/choosePrinterStage.js';

export default function ChoosePrinter() {
  const [printerInfo, setPrinterInfo] = React.useState(false);
  const [selectedPrinter, setSelectedPrinter] = React.useState(null);
  const togglePrinterInfo = (printer) => {
    setPrinterInfo(!printerInfo);
    setSelectedPrinter(printer);
  }
  const [printerData, setPrinterData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/printers")
    .then(printerData => setPrinterData(printerData.data))
    .catch(e => {
                alert("wrong info")
                console.log(e)
            }
    )
  }, []);
  
  const getStatusText = (status) => {
    if (status === "busy") {
      return "Bận";
    } else if (status === "unavailable") {
      return "Không có sẵn";
    } else if (status === "free") {
      return "Trống";
    }
    return "";
  };

  const getStatusTextClass = (status) => {
    switch (status) {
      case "busy":
        return style["busy-text"];
      case "unavailable":
        return style["unavailable-text"];
      case "free":
        return style["free-text"];
      default:
        return ""; // Mặc định nếu trạng thái không khớp
    }
  };

  return (
    <React.Fragment>
      <nav>
        <div className={style.navbar}>
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

      <div className={style.container}>
        <div className={style.back_btn}>
          <Link to='/specify-properties'><button>Quay lại</button></Link>
        </div>
        <div className={style.content}>
          {printerData.map((printer) => (
            <div className={style.item} id={printer.id}>
              <div className={style.image}>
                <img src={printer_icon} alt="printer-img" onClick={() => togglePrinterInfo(printer)} />
              </div>
              <div className={style.label}>{printer.label}</div>
            </div>
          ))}

          {printerInfo &&
            (<div className={style.printer_info_show} style={{ display: 'flex' }}>
              <div className={style.temp}>
                <div className={style.name_and_img}>
                  <div id={style.name}>Máy in màu Epson L121</div>
                  <div id={style.img}>
                    <img src={printer_icon} alt="printer-img" />
                  </div>
                </div>

                <div className={style.info}>
                  <div>
                    <p>Tình trạng: <span className={style[getStatusTextClass(selectedPrinter.status)]}>{getStatusText(selectedPrinter.status)}</span></p>
                  </div>
                  <div><p>Hàng đợi: 0</p></div>
                  <div><p>Loại: In màu</p></div>
                  <div><p>Xuất xứ: Việt Nam</p></div>
                  <div><p>Mã máy: 0x01</p></div>
                  <div><p>Vị trí: Thư viện A2</p></div>
                  <div>
                    <button onClick={togglePrinterInfo}>Quay lại</button>
                    <Link to='/pay-order'><button>Xác nhận</button></Link>
                  </div>
                </div>
              </div>
            </div>
            )}
        </div>
      </div>
    </React.Fragment>
  );
}