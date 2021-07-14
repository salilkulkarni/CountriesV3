import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../components/Country.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Country = () => {
  const [country, setCountry] = useState([]);
  var { name } = useParams();
  name = name.trimStart();

  useEffect(() => {
    const fetchCountryData = async () => {
      var uuu = `https://restcountries.eu/rest/v2/name/${name}`;
      //uuu = encodeURIComponent(decodeURIComponent(uuu).replace(/\s+/g, ''));
      console.log(uuu);
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryData();
  }, []);
  return (
    <>
      <Link to="/" className="btn-light">
        <FaLongArrowAltLeft /> Back
      </Link>
      <section className="country">
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            languages,
            capital,
            currencies,
            borders
          } = c;

          return (
            <article key={numericCode} className="Second">
              <div className="flag">
                <img src={flag} alt={name}></img>
              </div>

              <div className="info">
                <h2>{name}</h2>

                <div className="country-info">
                  <div className="details">
                    <h5>
                      Native Name: <span>{nativeName}</span>{" "}
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>{" "}
                    </h5>
                    <h5>
                      Population: <span>{population}</span>{" "}
                    </h5>
                    <h5>
                      Currency: <span>{currencies[0].name}</span>{" "}
                    </h5>
                    <h5>
                      Languages: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>

                <h3>Border Countries:</h3>
                <div className="Borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
