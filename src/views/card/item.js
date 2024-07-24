import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function Item(props) {
  let { item, src, key } = props;
  let [count, SetCount] = useState(0);

  const handleClick = () => {
    SetCount(count++);
  };

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <Card className="mt-2 mx-auto col col-lg-3" key={key}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{item}</Card.Title>
          <Card.Text>text ở đây nè!</Card.Text>
          <Card.Text>Số lượng sản phẩm: {count}</Card.Text>
          <Button variant="primary" className="mx-2">Chi Tiết</Button>
          <Button variant="success" onClick={() => handleClick()}>Thêm sản phẩm</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
