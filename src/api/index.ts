import { Country } from "../interfaces";

export const getCountries = async (search: string): Promise<Country[]> => {
  return fetch(
    `https://restcountries.com/v3.1/name/${search}`
  ).then((response) => response.json())
}