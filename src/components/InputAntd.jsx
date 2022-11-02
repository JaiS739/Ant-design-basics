import React from "react";
import { Input } from "antd";
export const InputAntd = () => {
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <Input.Search placeholder="Enter Name" allowClear />
    </div>
  );
};
