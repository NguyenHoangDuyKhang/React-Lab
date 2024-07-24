import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import ItemData from "./item";

function List() {
  const [data, setData] = useState([]);

  const student = [
    {
      code: 1,
      fullname: "Nguyen Haong Duy Khang",
      class: "WD18303",
      phoneNumber: "011111111110",
    },
    {
      code: 2,
      fullname: "Nguyen Haong Duy Khang 2",
      class: "WD18303",
      phoneNumber: "011111111111",
    },
    {
      code: 3,
      fullname: "Nguyen Haong Duy Khang 3",
      class: "WD18303",
      phoneNumber: "011111111112",
    },
  ];

  useEffect(() => {
    setData(student);
  }, []);

  return (
    <>
    <div className="container">
      <Table striped="columns" className="mt-5">
        <thead>
          <tr>
            <th>Code</th>
            <th>Fullname</th>
            <th>Class</th>
            <th>Phonenumber</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <ItemData data={data}/>
        </tbody>
      </Table>
    </div>

    </>
  );
}

export default List;
