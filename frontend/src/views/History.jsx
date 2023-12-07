import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import styles from '../styles/History.module.css';
import logo_hcmut from '../images/logo_hcmut.png';
import vi from 'date-fns/locale/vi';
import LogTable from "../component/LogTable/logtable";
import { Outlet, Link } from "react-router-dom";

const hardcodedPrintingLogs = [
    {
        id: 1,
        sid: '2110120',
        pid: 'P001',
        file_name: 'SE_chap1.pdf',
        start: '16:00:12',
        stop: '16:00:30',
        date: new Date(2023,10,2),
        page_number: 20,
        
    },
    {
        id: 2,
        sid: '2110120',
        pid: 'P001',
        file_name: 'SE_chap2.pdf',
        start: '16:31:12',
        stop: '16:31:30',
        date: new Date(2023,10,21),
        page_number: 30,
        
    },
    {
        id: 3,
        sid: '2110120',
        pid: 'P001',
        file_name: 'SE_chap3.pdf',
        start: '16:00:12',
        stop: '16:00:30',
        date: new Date(2023,11,7),
        page_number: 30,
        
    },
    {
        id: 4,
        sid: '2110120',
        pid: 'P001',
        file_name: 'SE_chap4.pdf',
        start: '16:00:12',
        stop: '16:00:30',
        date: new Date(2023,11,15),
        page_number: 32,
        
    },
    {
        id: 5,
        sid: '2110120',
        pid: 'P001',
        file_name: 'SE_chap5.pdf',
        start: '16:00:12',
        stop: '16:00:30',
        date: new Date(2023,11,25),
        page_number: 45,
        
    },
];

const filterPrintingLogs = (startDate, endDate) => {
    return hardcodedPrintingLogs.filter(log => {
        // Check start_date if defined and not equal
        if (startDate !== null && log.date < startDate) {
            return false;
        }

        // Check end_date if defined and not equal
        if (endDate !== null && log.date > endDate) {
            return false;
        }
        // If all conditions pass, include the log in the result
        return true;
    });
};

function History() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [filteredPrintingLogs, setFilteredPrintingLogs] = useState(() => filterPrintingLogs(null, null));
    const [selectAllDates, setSelectAllDates] = useState(false);
  
    const handleSelectAllDatesChange = (event) => {
      if (!selectAllDates) {
        setStartDate(null)
        setEndDate(null)
      }
      setSelectAllDates(event.target.checked);
    };
  
    const updateTable = (startDate, endDate) => {
      const logs = filterPrintingLogs(startDate, endDate);
      setFilteredPrintingLogs(logs);
    };
  
    useEffect(() => {
      updateTable(startDate, endDate);
    }, [selectAllDates, startDate, endDate]);
  
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

            <div className={styles.history}>
                <div className={styles.historytitle}>
                    <h1>Lịch sử in</h1>
                </div>
                <div className={styles.filter}>
                    <div className={styles.inputcontainer}>
                        <label htmlFor="startDate">Từ </label>
                            <DatePicker
                                id="startDate"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd/MM/yyyy"
                                locale={vi}
                                readOnly={selectAllDates}
                            />
                    </div>
                    <div className={styles.inputcontainer}>
                        <label htmlFor="endDate">Đến </label>
                            <DatePicker
                                id="endDate"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd/MM/yyyy"
                                locale={vi}
                                readOnly={selectAllDates}
                            />
                    </div>
                    <div className={styles.inputcontainer}>
                        <label htmlFor="selectAllDates">Tất cả các ngày </label>
                        <input
                            type="checkbox"
                            id="selectAllDates"
                            name="selectAllDates"
                            checked={selectAllDates}
                            onChange={handleSelectAllDatesChange}
                        />
                    </div>
            </div>
            <LogTable printingLogs={filteredPrintingLogs} />
        </div>
        </body>
    );
}
export default History;