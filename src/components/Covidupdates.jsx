import React, { useEffect, useState } from 'react';
import './covid.css';

const Covidupdates = () => {

  const [data, setData] = useState([])

  const getcovidupdates = async () => {
    const url = `https://data.covid19india.org/data.json`
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getcovidupdates();
  }, []);

  return (
    <>
      <main>
        <h1>LIVE COVID UPDATES</h1>
        <h2>COVID-19 INDIA TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card_upper">
              <div className="card_inner">
                <p className="card_section"> <span>OUR</span> COUNTRY </p>
                <p className="card_total card_small">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_upper_recovered">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> RECOVERED </p>
                <p className="card_total card_small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_upper_confirmed">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> CONFIRMED </p>
                <p className="card_total card_small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_upper_death">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> DEATHS </p>
                <p className="card_total card_small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_upper_active">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> ACTIVE </p>
                <p className="card_total card_small">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_upper_update">
              <div className="card_inner">
                <p className="card_section"> <span>LAST</span> UPDATE AT </p>
                <p className="card_total card_small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Covidupdates;
