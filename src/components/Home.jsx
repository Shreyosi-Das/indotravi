import React, { useState } from 'react'
import styles from '../App.module.css'
import DatePicker from 'react-datepicker'
import '../datePicker.css'
import 'react-datepicker/dist/react-datepicker.css'



const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  
  return (
    <div className={styles.home}>
      <h1>Extraordinary natural and cultural charm</h1>
      <div className={styles.home_section}>
        <div className='date-picker-container' >
          <i className="fas fa-calendar-alt calendar-icon"></i>
          <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="custom-date-input" // Apply custom class
          placeholderText="Date"
        />
        <i className="fas fa-caret-down dropdown-icon"></i>
          {/* <input type="date" className={styles.dateInput} /> */}
        </div>
      </div>
    </div>
  )
}

export default Home