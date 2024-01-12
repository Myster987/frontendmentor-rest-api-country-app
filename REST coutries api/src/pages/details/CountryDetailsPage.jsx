import { Link, useLoaderData } from "@tanstack/react-router";

const CountryDetailsPage = () => {
  const countryData = useLoaderData({});

  return (
    <div className="grid gap-2 p-6 md:grid-cols-2 md:gap-12 md:pt-12">
      <div>
        <Link
          to="/"
          className="mb-4 flex w-max flex-wrap gap-2 rounded-sm bg-light-mode-background px-6 py-1 font-light text-light-mode-text shadow-lg hover:bg-gray-200 dark:bg-dark-mode-elements dark:text-dark-mode-text dark:hover:bg-gray-600 md:mb-10"
        >
          <img
            className="dark:white-svg-fill"
            id="arrowLeft"
            src="\arrow_left.svg"
            alt="Arrow"
          />
          <p>Back</p>
        </Link>

        <img
          className="my-3"
          src={countryData.flag}
          alt={`Image of ${countryData.name}`}
        />
      </div>
      <div className="grid gap-6">
        <h1 className="text-xl font-semibold text-light-mode-text dark:text-dark-mode-text">
          {countryData.name}
        </h1>

        <div className="grid gap-2">
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Native Name:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.nativeName || "None"}
            </p>
          </div>
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Population:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.population}
            </p>
          </div>
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Region:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.region}
            </p>
          </div>
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Sub Region:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.subRegion}
            </p>
          </div>
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Capital:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.capital.join(", ")}
            </p>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Top Level Domain:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.topLevelDomain.join(", ")}
            </p>
          </div>

          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Currencies:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.currencies.join(", ") || "None"}
            </p>
          </div>

          <div className="country-data-row">
            <p className="country-data-bold-text text-light-mode-text dark:text-dark-mode-text">
              Languages:
            </p>{" "}
            <p className="font-light text-light-mode-text dark:text-dark-mode-text">
              {countryData.languages.join(", ") || "None"}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-light-mode-text dark:text-dark-mode-text">
            Border Coutries:
          </h3>

          {countryData.borders != "None" ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {countryData.borders.map((country, index) => (
                <li
                  className="rounded-sm bg-light-mode-background px-6 py-1 font-light text-light-mode-text shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text"
                  key={index}
                >
                  {country}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 w-fit rounded-sm bg-light-mode-background px-6 py-1 font-light text-light-mode-text shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text">
              None
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
