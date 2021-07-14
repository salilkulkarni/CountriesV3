import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  //const removeCountry= (numericCode) => {
  //   const newCountry = countries.filter((country)=> country.numericCode !== numericCode)
  // setCountries(newCountry)
  //}

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, capital, population, flag } = country;
          return (
            <article key={numericCode}>
              <div>
                <span>
                  <div className="biginfo">
                    <img src={flag} alt={name} />

                    <div className="info">
                      <h3 className="country-name">
                        {" "}
                        <strong>{name}</strong>
                      </h3>
                      <h4>
                        Capital Country:<span>{capital}</span>
                      </h4>
                      <h4>
                        Population: <span>{population}</span>
                      </h4>

                      <div className="buttons">
                        <Link to={`/countries/ ${name}`} className="btn">
                          {" "}
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
