import { useEffect } from "react";
import Country from "../Country/Country";
import { useState } from "react";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    if (
      !visitedCountries.some(
        (visitedCountry) => visitedCountry.cca3 === country.cca3
      )
    ) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold ml-10 md:ml-auto my-5">
          Visited Countries
        </h1>
        <ul className="text-xl list-decimal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-10 ml-10 md:ml-auto">
          {visitedCountries.map((country) => (
            <li className="" key={country.cca3}>
              <div className="flex justify-between items-center text-xl w-3/4 md:w-auto mx-auto ">
                {country.name.common}
                <img className="h-8" src={country.flags.png} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            visitedCountries={visitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
