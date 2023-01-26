import * as React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import { BackTop } from "antd";

import "./styles.css";
import "antd/dist/antd.css";
import { AntTable } from "./components/";
export const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2302901_s2gjddlnewg.js"
});

const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AntTable />
      <BackTop />
    </div>
  );
}
