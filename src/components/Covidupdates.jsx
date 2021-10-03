import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import './covid.css';

const Covidupdates = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getcovidupdates();
  }, []);

  const getcovidupdates = async () => {
    const url = `https://api.covid19api.com/summary`
    try {
      const res = await fetch(url);
      const data = await res.json();
      const updatedData = await data.Countries[76];
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main>
        <h1>LIVE COVID UPDATES</h1>
        <h2>COVID-19 INDIA TRACKER</h2>
        <Grid container rowSpacing={1} lg={12}>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper">
              <div className="card_inner">
                <p className="card_section"> <span>OUR</span> COUNTRY </p>
                <p className="card_total card_small">{data.Country}</p>
              </div>
            </div>
          </p>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper_recovered">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> CONFIRMED </p>
                <p className="card_total card_small">{data.TotalConfirmed}</p>
              </div>
            </div>
          </p>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper_confirmed">
              <div className="card_inner">
                <p className="card_section"> <span>NEW</span> CONFIRMED </p>
                <p className="card_total card_small">{data.NewConfirmed}</p>
              </div>
            </div>
          </p>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper_death">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> DEATHS </p>
                <p className="card_total card_small">{data.TotalDeaths}</p>
              </div>
            </div>
          </p>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper_death">
              <div className="card_inner">
                <p className="card_section"> <span>TOTAL</span> DEATHS </p>
                <p className="card_total card_small">{data.TotalDeaths}</p>
              </div>
            </div>
          </p>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}><p style={{ color: 'white' }} className="card">
            <div className="card_upper_update">
              <div className="card_inner">
                <p className="card_section"> <span>LAST</span> UPDATE AT </p>
                <p className="card_total card_small">{data.Date}</p>
              </div>
            </div>
          </p>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Covidupdates;
