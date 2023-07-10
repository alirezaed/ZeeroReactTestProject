import "./App.css";
import { useEffect, useState } from "react";
import HeaderRow from "./components/HeaderRow";
import TableRow from "./components/TableRow";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((c) => c.json())
      .then((c) => setData(c));
  }, []);

  if (!data) return "Loading...";
  
  return (
    <div className="App">
      <table>
        <HeaderRow />
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
