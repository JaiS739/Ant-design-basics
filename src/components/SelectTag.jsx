import React from "react";
import { Select } from "antd";
export const SelectTag = () => {
  let names = ["jai", "krishna", "anshul", "manoj"];

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <Select
        mode="multiple"
        allowClear
        placeholder="search"
        maxTagCount="responsive"
        style={{ width: "100%" }}
      >
        {names.map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
      </Select>
    </div>
  );
};
