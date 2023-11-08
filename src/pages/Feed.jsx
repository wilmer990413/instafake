import React from "react";
import { useAuth } from "../data/userContext";

const Feed = () => {
  const { autenticado } = useAuth();
  return (
    <div>
      Feed
      {
        autenticado === true? "Entro" : "No ENTRO"
      }
      <button>1</button>
    </div>
  );
};

export default Feed;
