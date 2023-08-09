import React, { useState } from "react";
import { Input } from "antd-mobile";
import "../styles/header.scss";
export default function Header() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="header">
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </div>
  );
}
