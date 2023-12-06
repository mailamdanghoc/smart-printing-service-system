import React from 'react';
import style from '../styles/ChoosePrinter.module.css';
import { Outlet, Link } from "react-router-dom";
// import choosePrinterStage from '../modules/choosePrinterStage.js';
import printer_icon from '../images/printer_icon.png';
import logo_hcmut from '../images/logo_hcmut.png';
// import choosePrinterStage from '../modules/choosePrinterStage.js';

export default function ChoosePrinter() {
  const [printerInfo, setPrinterInfo] = React.useState(false);
  const [selectedPrinter, setSelectedPrinter] = React.useState(null);
  const togglePrinterInfo = (printer) => {
    setPrinterInfo(!printerInfo);
    setSelectedPrinter(printer);
  }
  const printerData = [
    { id: "1", state: "busy", label: "Máy in màu Epson L121" },
    { id: "2", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "3", state: "free", label: "Máy in màu Epson L121" },
    { id: "4", state: "free", label: "Máy in màu Epson L121" },
    { id: "5", state: "free", label: "Máy in màu Epson L121" },
    { id: "6", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "7", state: "busy", label: "Máy in màu Epson L121" },
    { id: "8", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "9", state: "free", label: "Máy in màu Epson L121" },
    { id: "10", state: "free", label: "Máy in màu Epson L121" },
    { id: "11", state: "free", label: "Máy in màu Epson L121" },
    { id: "12", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "13", state: "busy", label: "Máy in màu Epson L121" },
    { id: "14", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "15", state: "free", label: "Máy in màu Epson L121" },
    { id: "16", state: "free", label: "Máy in màu Epson L121" },
    { id: "17", state: "free", label: "Máy in màu Epson L121" },
    { id: "18", state: "unavailable", label: "Máy in màu Epson L121" },
    { id: "19", state: "busy", label: "Máy in màu Epson L121" },
    { id: "20", state: "unavailable", label: "Máy in màu Epson L121" },
  ];

  const getStateText = (state) => {
    if (state === "busy") {
      return "Bận";
    } else if (state === "unavailable") {
      return "Không có sẵn";
    } else if (state === "free") {
      return "Trống";
    }
    return "";
  };

  const getStateTextClass = (state) => {
    switch (state) {
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
              <Link to='/'>
                <img
                  style={{ width: '500px' }}
                  src={logo_hcmut}
                  alt="logo_hcmut"
                />
              </Link>
            </li>
            <li><Link to='/'>TẠO ĐƠN IN</Link></li>
            <li><a href="#">XEM LỊCH SỬ</a></li>
            <li><a href="#">THANH TOÁN</a></li>
            <li><Link to='/login'>ĐĂNG NHẬP</Link></li>
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
                    <p>Tình trạng: <span className={style[getStateTextClass(selectedPrinter.state)]}>{getStateText(selectedPrinter.state)}</span></p>
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