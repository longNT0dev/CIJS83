import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const CustomDatePicker = () => {
  const [inputValue, setInputValue] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const formatDate = (input) => {
    console.log(input)
    try {
      // Extract date components
      const day = input.slice(-8, -6);
      const month = input.slice(-6,-4);
      const year = input.slice(-4);

      // Pad day and month with leading zeros if necessary
      const paddedDay = day.padStart(2, '0');
      const paddedMonth = month.padStart(2, '0');

      // Reconstruct the formatted date
      const formattedDate = `${paddedDay}/${paddedMonth}/${year}`;

      return formattedDate;
    } catch (e) {
      console.log(e)
      return ''
    }

  };

  const handleFormatDate = (event) => {
    if (event.keyCode === 13) {
      const userInput = event.target.value;
      setInputValue(userInput);

      // Format the date and update the formattedDate state
      const formattedDate = formatDate(userInput);
      setFormattedDate(formattedDate);
    }

  };

  const handleChange = (e) => {
    setFormattedDate(e.target.value)
  }

  return (
    <div>
      <label htmlFor="dateInput">Enter date (DD/MM/YYYY):</label>
      <input
        type="text"
        id="dateInput"
        value={formattedDate}
        onKeyDown={handleFormatDate}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomDatePicker;
