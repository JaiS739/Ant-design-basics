import React, { useState } from "react";
import { DatePicker, Space } from "antd";

export const DatePic = () => {
  const [dateValue, setDateValue] = useState([]);

  const onChange = (date, dateString) => {
    if (dateString !== "") {
      setDateValue([...dateValue, dateString]);
    }
  };

  console.log(dateValue);

  return (
    <div>
      <DatePicker onChange={onChange} />
      {dateValue && dateValue.map((ele, index) => <h2 key={index}>{ele}</h2>)}
    </div>
  );
};
