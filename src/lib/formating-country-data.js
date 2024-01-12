export const formatcountryData = (country) => {
  var flag = country.flags.svg;

  const name = country.name.official;

  var nativeName = "None";

  if (Object.keys(country.name).includes("nativeName")) {
    nativeName = Object.entries(country.name.nativeName)[0][1].official;
  }

  const population = country.population;

  const region = country.region;
  const subRegion = country.subregion || "None";

  const capital = country.capital || "None";

  const topLevelDomain = country.tld;

  var currencies = "None";

  if (Object.keys(country).includes("currencies")) {
    currencies = Object.entries(country.currencies).map(
      (currency) => currency[1].name
    );
  }

  const languages = Object.values(country.languages || { placeholder: "None" });

  const borders = country.borders || "None";

  return {
    flag,
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  };
};
