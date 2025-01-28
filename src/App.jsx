import { useState } from "react";

import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  const handleDataRetrieval = async () => {
    try {
      const response = await fetch("http://localhost:8080/examples", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setData([...data.exampleData]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <h1>Result frontend from probonio</h1>
      <button className='button' onClick={handleDataRetrieval}>
        Get data
      </button>
      <h3>List of data</h3>
      {data.map((entry) => (
        <div className='entry' key={entry._id}>
          <h4>User: {entry.name}</h4>
          <div className='content'>
            <span>Bookname: {entry.bookName}</span>
            <span>Chapter: {entry.chapter}</span>
            <span>Verse number: {entry.verseNumber}</span>
          </div>
        </div>
      ))}
    </>
  );
}
