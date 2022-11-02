import { Table } from "antd";
import React from "react";

export const TableAntd = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      // to sort use sorter and sorting logic:-
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Graduted",
      key: "address",
      render: (payload) => {
        // we can write login here with the help of render and can get the value of datas by using payload
        return <p>{payload.age > 40 ? "Yes" : "No"}</p>;
      }
    }
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street"
    }
  ];

  return (
    <div>
      <Table flex={1} dataSource={dataSource} columns={columns}></Table>
    </div>
  );
};
