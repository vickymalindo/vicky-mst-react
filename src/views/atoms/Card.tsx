import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { useAppSelector } from '../../redux/store';
import { useQuery } from 'react-query';
import { fetchMovie } from '../../api/Movie';
import Loader from './Loader';
import Error from './Error';
import { useNavigate } from 'react-router-dom';

export function CardDefault() {
  const count = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovie', { count }],
    queryFn: () => fetchMovie(count),
    staleTime: Infinity,
    cacheTime: 0,
  });

  let dataStorage;

  const arr = [data];
  localStorage.setItem('datas', JSON.stringify(arr));
  localStorage.removeItem('datas');
  localStorage.setItem('datas', JSON.stringify(arr));
  const getStorage = localStorage.getItem('datas');
  const parseData = JSON.parse(getStorage!);
  dataStorage = parseData[0];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {data?.map((val: any, index: number) => {
        return (
          <Card className="mt-10 w-96 sm:w-64 lg:w-96" key={val.imdbID}>
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={val.Poster} alt="card-image" className="h-56 w-full" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-sm sm:text-base md:text-lg"
              >
                {val.Title}
              </Typography>
              <Typography as="p" className="font-semibold text-slate-400">
                {val.Year}
              </Typography>
              <Typography as="p" className="font-semibold text-slate-400">
                {val.Genre}
              </Typography>
              <Typography as="p" className="font-semibold text-slate-400">
                Rp. {val.price}
              </Typography>
              <Typography className="text-xs sm:text-sm md:text-base">
                {`${val.Plot.slice(0, 150)}....`}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                className="px-1.5 py-2.5 sm:px-2 sm:py-4 md:px-3 md:py-5"
                onClick={() => navigate(`/movie/detail/${index}`)}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
