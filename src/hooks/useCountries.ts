import { useState, useEffect } from 'react';

type ICountry = {
  translations: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
};
export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=translations')
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((item: ICountry) => item.translations?.rus?.common);
        setCountries(countryNames.sort());
      })
      .catch((err) => console.error('Ошибка загрузки стран', err));
  }, []);

  return countries;
};
