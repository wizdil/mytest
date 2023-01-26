import React from "react";
import { Table } from "antd";
import { orderFields, rows } from "./data";

const AntTable = () => {
  return (
    <>
      <Table
        size="small"
        sticky
        // scroll={{ y: 480 }}
        columns={orderFields}
        pagination={false}
        dataSource={rows}
        defaultExpandAllRows={true}
        rowSelection={{
          type: "checkbox"
        }}
        key={120}
        expandable={{
          expandedRowRender: (record, index) => {
            return (
              <Table
                key={index}
                size="small"
                bordered
                rowSelection={{
                  type: "checkbox"
                }}
                pagination={false}
                columns={(record.subTable || {}).headings || []}
                dataSource={(record.subTable || {}).rows || []}
              />
            );
          }
        }}
      />
    </>
  );
};

export default AntTable;
