import img from "./../../assets/meme.jpg";
import tom from "./../../assets/tomandjerry.webp";

import Item from "./item";
const products = [
  { id: 1, name: "Khang", age: 18 },
  { id: 2, name: "Khang2", age: 18 },
  { id: 3, name: "Khang3", age: 18 },
  { id: 4, name: "Khang4", age: 18 },
];

function ListCard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="mt-4">Sản phẩm nổi bật</h3>
          {products.map((item, index) => (
            <Item key={index} src={img} item={item.name} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="mt-4">Sản phẩm bán chạy</h3>
          {products?.map((item, index) => (
            <Item key={index} src={tom} item={item.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListCard;
