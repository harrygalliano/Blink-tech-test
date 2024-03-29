import importedData from "../../data/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Conversations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(importedData);
  }, []);

  console.log(data);
  return (
    <main>
      <h1>List of conversations</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/conversation/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
