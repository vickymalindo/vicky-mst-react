import { useParams } from 'react-router-dom';
import { detailMovie } from '../../api/Movie';
import { useQuery } from 'react-query';
import Loader from '../atoms/Loader';
import Error from '../atoms/Error';
import { Button, Typography } from '@material-tailwind/react';

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovie', { id }],
    queryFn: () => detailMovie(id),
    staleTime: Infinity,
    cacheTime: 0,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="flex gap-4 flex-col sm:flex-row my-3">
      <img src={data.Poster} alt={data.Title} className="object-contain" />
      <div>
        <Typography variant="h2">{data.Title}</Typography>
        <Typography variant="h5">{data.Genre}</Typography>
        <Typography variant="h5">Rp. {data.price}</Typography>
        <Typography variant="h5">Release : {data.Released}</Typography>
        <Typography variant="h5">Director : {data.Director}</Typography>
        <Typography variant="h5">Writer : {data.Writer}</Typography>
        <Typography variant="h5">Type : {data.Type}</Typography>
        <Typography variant="h5">Duration : {data.Runtime}</Typography>
        <Typography variant="h5">Actors : {data.Actors}</Typography>
        <Typography variant="h5">Rate : {data.imdbRating}</Typography>
        <Typography variant="paragraph" className="mt-3">
          {data.Plot}
        </Typography>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </section>
  );
};

export default Detail;
