import { queryOptions } from "@tanstack/react-query";
import { getAllCountriesData, getCountryDataByName } from "./api.js";

export const allCountriesQueryOptions = queryOptions({
  queryKey: ["coutries"],
  queryFn: getAllCountriesData,
  staleTime: Infinity,
});

export const countryByNameQueryOptions = (officialName) =>
  queryOptions({
    queryKey: ["country", officialName],
    queryFn: () => getCountryDataByName(officialName),
    staleTime: Infinity,
  });
