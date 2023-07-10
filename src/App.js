import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderRow from "./components/HeaderRow";
import TableRow from "./components/TableRow";
import SEARCH from "./assets/icons/search.png";

function App() {
  const [data, setData] = useState([]);
  const [colId, setColId] = useState(0);
  const [mainData, setMainData] = useState([])
  const [searchedPhrase, setSearchedPhrase] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((c) => c.json())
      .then((c) => {setData(c);setMainData(c)});
  }, []);

  useEffect(() => {
    const searchedData = mainData.filter((item) =>
      item.title.toLowerCase().includes(searchedPhrase.toLowerCase())
    );
    setData(searchedData);
  }, [searchedPhrase]);

  useEffect(() => {
    if (colId === 1) {
      setData((prevData) =>
        [...prevData].sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        )
      );
    } else if (colId === 2) {
      setData((prevData) =>
        [...prevData].sort((a, b) => a.price - b.price)
      );
    } else if (colId === 3) {
      setData((prevData) =>
        [...prevData].sort((a, b) =>
          a.category.toLowerCase().localeCompare(b.category.toLowerCase())
        )
      );
    }
  }, [colId]);

  const onChangeText = (searchText) => {
    setSearchedPhrase(searchText);
  };

  if (!data) return "Loading...";

  return (
    <div className="App">
      <div
        className="SearchBar"
        style={{ width: "100%", height: 100, flexDirection: "row", backgroundColor: "#ccc" }}
      >
        <input
          onChange={(e) => onChangeText(e.target.value)}
          style={{ width: "80%", height: 40, borderWidth: 1, margin: 10, borderRadius: 10 }}
        />
        <img src={SEARCH} alt="search" style={{ height: 40 }} />
      </div>
      <table>
        <HeaderRow setColId={setColId} />
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
