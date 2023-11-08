import { useEffect, useState } from "react";

const useServidorJSON = () => {
  const [data, setData] = useState(null);
  

  const url = "http://localhost:3001/publicaciones"; // URL del JSON o api 

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data};
};

export default useServidorJSON;
