import { generateRandomNumber } from '../utils/randomNumber';

export const fetchMovie = async (page: number) => {
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=bb24b95d&s=avengers&page=${page}`
  );
  const jsondata = await data.json();
  const { Search } = jsondata;
  const result: Promise<any[]> = Promise.all(
    Search.map(async (val: any) => {
      const fullData = await fetch(
        `https://www.omdbapi.com/?apikey=bb24b95d&i=${val.imdbID}`
      );
      const fullDataJson = await fullData.json();
      const price = generateRandomNumber(100000, 1000000);
      const data = { price, ...fullDataJson };
      return data;
    })
  );

  return result;
};

export const detailMovie = async (id: string | undefined) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=bb24b95d&i=${id}`);
  const temp = await res.json();
  const price = generateRandomNumber(100000, 1000000);
  const data = { price, ...temp };
  return data;
};
