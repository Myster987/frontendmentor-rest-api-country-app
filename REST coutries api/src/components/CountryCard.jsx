const CountryCard = ({ countryData }) => {
  return (
    <li className="min-h-80 overflow-hidden rounded-md bg-light-mode-background shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text">
      <img
        className="aspect-video min-h-36 object-cover"
        src={countryData.flag}
        alt={`Flag of ${countryData.name}`}
      />

      <div className="p-4 text-sm">
        <h4 className="text-lg font-semibold">{countryData.name}</h4>
        <div className="my-2 grid gap-1">
          <div className="flex gap-1">
            <p className="font-semibold">Population:</p>{" "}
            <p className="font-light">
              {countryData.population.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Region:</p>{" "}
            <p className="font-light">{countryData.region}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Capital:</p>{" "}
            <p className="font-light">{countryData.capital}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
