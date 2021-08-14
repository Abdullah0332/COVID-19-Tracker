import { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api/index";

import CoronaImage from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const handleCountryChange = (country) => {
    setCountry(country);
    fetchData(country).then((data) => setData(data));
  };

  return (
    <div className={styles.container}>
      <img src={CoronaImage} className={styles.image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
