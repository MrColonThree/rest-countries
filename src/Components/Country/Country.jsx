import independentImage from "../Images/independent.png";
const Country = ({ country, handleVisitedCountry, visitedCountries }) => {
  const { name, flags, capital, population, independent, currencies } = country;
  const currency = currencies?.[Object?.keys(currencies)?.[0]]?.name;
  const symbol = currencies?.[Object?.keys(currencies)?.[0]]?.symbol;

  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-lg shadow-lg w-3/4 md:w-full mx-auto ${
        visitedCountries.some(
          (visitedCountry) => visitedCountry.cca3 === country.cca3
        )
          ? "bg-yellow-100"
          : "bg-sky-100"
      }`}
    >
      <h3 className="text-2xl text-center font-semibold">{name.common}</h3>
      <img className="h-32 mx-auto my-5" src={flags.png} alt="" />
      <h3 className="flex gap-3">
        <span className="font-medium">Official Name:</span> {name.official}{" "}
        {independent ? <img className="w-7 h-7" src={independentImage} /> : ""}
      </h3>
      <p>
        <span className="font-medium">Capital:</span> {capital}
      </p>
      <p>
        <span className="font-medium">Population:</span> {population}
      </p>
      <p>
        <span className="font-medium">Currency:</span> {currency} ({symbol})
      </p>
      <div className="text-center">
        <button
          className={`text-white px-3 py-1 rounded-lg font-semibold mt-5 mx-auto ${
            visitedCountries.some(
              (visitedCountry) => visitedCountry.cca3 === country.cca3
            )
              ? "bg-yellow-500"
              : "bg-blue-600"
          }`}
          onClick={() => handleVisitedCountry(country)}
          disabled={visitedCountries.some(
            (visitedCountry) => visitedCountry.cca3 === country.cca3
          )}
        >
          {visitedCountries.some(
            (visitedCountry) => visitedCountry.cca3 === country.cca3
          )
            ? "Visited"
            : "Visit"}
        </button>
      </div>
    </div>
  );
};

export default Country;
