// DataContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/publicaciones")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("Data from JSON Server:", jsonData);
        setData(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
