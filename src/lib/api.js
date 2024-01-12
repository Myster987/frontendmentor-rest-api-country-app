import axios from "axios";
import { formatcountryData } from "./formating-country-data";

export const getAllCountriesData = () =>
  axios
    .get(import.meta.env.VITE_COUNTRIES_API_ALL)
    .then((res) => res.data)
    .then((data) => data.map((country) => formatcountryData(country)));

export const getCountryDataByName = (officialName) => {
  officialName = officialName.replace(/_/g, " ");
  return axios
    .get(
      `${
        import.meta.env.VITE_COUNTRIES_API_BY_NAME
      }/${officialName}?fullText=true`
    )
    .then((res) => res.data)
    .then((data) => formatcountryData(data[0]));
};
