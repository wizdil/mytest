import { Switch } from "antd";

const addItemtoShipment = (value) => {
  console.log(value, "switch value");
};

const subHeadings = [
  { title: "Item Nr", dataIndex: "item_nr", key: "item_nr" },
  { title: "Data Nr", dataIndex: "data_nr", key: "data_nr" },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (value) => {
      return (
        <>
          <Switch
            onChange={addItemtoShipment}
            unCheckedChildren="Pending"
            checkedChildren="Ship Now"
          />
          {value}{" "}
        </>
      );
    }
  }
];

const rows: any = [
  {
    key: 1,
    order_nr: "1234545",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: 50090 }]
    }
  },
  {
    key: 2,
    order_nr: "124422323",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: "454535" }]
    }
  },
  {
    key: 3,
    order_nr: "124422323",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: "454535" }]
    }
  },
  {
    key: 4,
    order_nr: "124422323",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: "454535" }]
    }
  },
  {
    key: 5,
    order_nr: "124422323",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: "454535" }]
    }
  },
  {
    key: 6,
    order_nr: "124422323",
    subTable: {
      headings: subHeadings,
      rows: [{ item_nr: "23423", data_nr: "454535" }]
    }
  }
];
const orderFields: any = [
  { title: "Order Nr", dataIndex: "order_nr", key: "order_nr" }
];

export { orderFields, rows, subHeadings };
