import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((c) => c.json())
      .then((c) => setData(c));
  }, []);

  return (
    <div className="App">
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, title, price, category, image }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{price}</td>
              <td>{category}</td>
              <td>
                <img alt={title} style={{ height: "50px" }} src={image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
