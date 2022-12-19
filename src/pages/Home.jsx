import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col space-y-6 items-center justify-center text-3xl text-gray-900 bg-gray-200">
      {data &&
        data?.map((item) => (
          <Link key={item.id} to={`/${item.id}`}>
            {item.title}
          </Link>
        ))}
    </div>
  );
};

export default Home;
