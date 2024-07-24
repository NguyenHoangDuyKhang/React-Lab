import { toast } from "react-toastify";
import { useState, useEffect } from "react";
function ItemData(props) {
  const { data } = props;
  let [student, Setstudent] = useState([]);

  useEffect(() => {
    Setstudent(data);
  }, [data]);

  const handleDelete = (code) => {
    try {
      const studentData = student.filter((item) => item.code !== code);
      Setstudent(studentData);
      toast.success("Delete success!");
    } catch (error) {
      toast.error("Error, Can not Delete");
      console.error(error);
    }
  };

  return (
    <>
      {student.map((item, index) => (
        <tr key={index}>
          <td>{item.code}</td>
          <td>{item.fullname}</td>
          <td>{item.class}</td>
          <td>{item.phoneNumber}</td>
          <td>
            <button
              onClick={() => handleDelete(item.code)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ItemData;
