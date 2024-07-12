import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/name/Kazakhstan"
        );
        setCountryData(response.data[0]);
        console.log("countyrkodata", countryData.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountryData();
  }, []);
  //dependencies

  return (
    <div>
      <div>
        <h1>Country Detail</h1>
      </div>
      <div className="max-w-sm rounded-sm bg-slate-400 px-8 py-4 shadow-md">
        <h2>{countryData.name.common}</h2>
        <p>Country ko Capital</p>
        <p>Country Region</p>
        <p>Population</p>
      </div>
    </div>
  );
};

export default Card;
