import React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import styles from '../styles/SpecifyProperties.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import capstone from '../images/Capstone_Project_hk231_2023_v3.png';
import { Outlet, Link } from "react-router-dom";
import '../modules/specifyProperties.js';
import pdfFile from '../images/LAB-17.pdf';
import { useLocation } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const orderData = [
  {
    orderID: "1",
    paymentID: "4",
    printerID: "0xx",
    numberofPage: "",
    place: "",
    size: "",
    layout: "",
    pageSelection: "",
    side: "",
    totalPage: "",
  },
];

function SpecifyProperties() {
  const location = useLocation();
  const selectedFile = location.state?.file;

  const [selectedPlace, setSelectedPlace] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState("");
  const [numberOfPages, setNumberOfPages] = React.useState("");
  const [numberOfSheetInPage, setNumberOfSheetInPage] = React.useState("");
  const [selectedLayout, setSelectedLayout] = React.useState("");
  const [selectedPage, setSelectedPage] = React.useState("");
  const [selectedSide, setSelectedSide] = React.useState("");

  const [numPages, setNumPages] = React.useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const prevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  }

  const nextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1);
  }

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
    orderData[0].place = event.target.value; // Update the place in orderData
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    orderData[0].size = event.target.value; // Update the size in orderData
  };
  const handleNumberOfPagesChange = (event) => {
    setNumberOfPages(event.target.value);
    orderData[0].numberofPage = event.target.value; // Update the numberofPage in orderData
  };

  const handleNumberOfSheetInPage = (event) => {
    setNumberOfSheetInPage(event.target.value);
    orderData[0].numberofPage = event.target.value; // Update the numberofPage in orderData
  };

  const handleLayoutChange = (event) => {
    setSelectedLayout(event.target.value);
    orderData[0].place = event.target.value; // Update the place in orderData
  };

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
    orderData[0].pageSelection = event.target.value; // Update the pageSelection in orderData
  };

  const handlePageSide = (event) => {
    setSelectedSide(event.target.value);
    orderData[0].pageSelection = event.target.value; // Update the pageSelection in orderData
  };

  const [totalPages, setTotalPages] = React.useState(0);

  const calculateTotalPages = () => {
    let total = 0;
    if (selectedSide === 'one-sided') {
      total = numberOfPages;
    } else if (selectedSide === 'two-sided') {
      total = Math.ceil(numberOfPages / 2);
    }
    setTotalPages(total);
    orderData[0].totalPage = total;
  };

  React.useEffect(() => {
    calculateTotalPages();
  }, [numberOfPages, selectedSide]);

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
        <div className={styles.properties}>
          <ul>
            <li>
              <Link to='/loggedinhomepage'><button>Quay lại</button></Link>
            </li>
            <li><p>Chọn lựa vị trí in</p></li>
            <li>
              <select name="places" id="places" required onChange={handlePlaceChange}>
                <option value="Chọn vị trí" selected>Chọn vị trí</option>
                <option value="Thư viện A2 CS1">Thư viện A2 CS1</option>
                <option value="Thư viện BK.B1 CS2">Thư viện BK.B1 CS2</option>
              </select>
            </li>
            <li><p>Số tờ</p></li>
            <li><input type="text" placeholder="Nhập số tờ" value={numberOfPages}
              onChange={handleNumberOfPagesChange} /></li>
            <li><p>Bố cục</p></li>
            <li>
              <select name="layout" id="layout" required onChange={handleLayoutChange}>
                <option value="Layout" selected>Layout</option>
                <option value="por">Portrait</option>
                <option value="land">Landscape</option>
              </select>
            </li>
            <li><p>Chọn trang cần in</p></li>
            <li>
              <input type="radio" id="even" name="page" value="even" onChange={handlePageChange} /><label for="even"
              >Chỉ trang chẵn</label>
            </li>
            <li>
              <input type="radio" id="odd" name="page" value="odd" onChange={handlePageChange} /><label for="odd"
              >Chỉ trang lẻ</label>
            </li>
            <li>
              <input type="radio" id="all" name="page" value="all" onChange={handlePageChange} /><label for="all"
              >Tất cả</label>
            </li>
            <li><p>Chọn khổ giấy</p></li>
            <li>
              <select name="size" id="size" required onChange={handleSizeChange}>
                <option value="size" selected>Size</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
              </select>
            </li>
            <li><p>Số trang trong một tờ</p></li>
            <li><input type="text" placeholder="Nhập số trang" value={numberOfSheetInPage}
              onChange={handleNumberOfSheetInPage} /></li>
            <li>
              <input type="radio" id="one-side" name="side" value="one-sided" onChange={handlePageSide} /><label
                for="one-side"
              >In 1 mặt</label>
            </li>
            <li>
              <input type="radio" id="two-side" name="side" value="two-sided" onChange={handlePageSide} /><label
                for="two-side"
              >In 2 mặt</label>
            </li>
            <li>
              <p>Số giấy tiêu hao: <span>{orderData[0].totalPage}</span></p>
            </li>
            <li>
              <Link to='/choose-printer'><button>Xác nhận</button></Link>
            </li>
            <li><p>Nhấn xác nhận sẽ chuyển sang phần chọn máy in</p></li>
          </ul>
        </div>

        <div className={styles.paper}>
          {/* <div className={styles.document}> */}
            {/* <img src={capstone} alt="document" /> */}
            <div className={styles.pdf}>
              <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}></Page> 
              </Document>
            </div>
        </div>
      </div>
    </body>
  );
}
export default SpecifyProperties;
