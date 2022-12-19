import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen flex items-center font-bold justify-center text-3xl text-gray-900 bg-gray-200">
      {!data && <div>Loading...</div>}
      {data && (
        <div>
          {data.id}
          {data.title}
        </div>
      )}
    </div>
  );
};

export default Detail;
