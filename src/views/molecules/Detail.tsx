import React from 'react';
import { useParams } from 'react-router-dom';
// import { detailMovie } from '../../api/Movie';
// import { useQuery } from 'react-query';
import Loader from '../atoms/Loader';
import { Button, Typography } from '@material-tailwind/react';
import { useAppDispatch } from '../../redux/store';
import { increment } from '../../redux/features/cartSlice';

const Detail = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<{} | any>({});
  const { id } = useParams();
  const getDatas = localStorage.getItem('datas');
  const parseData = JSON.parse(getDatas!);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    const getCartStorage = localStorage.getItem('cart');
    if (getCartStorage === null) {
      const cart = [data];
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const parseCart = JSON.parse(getCartStorage);
      const insertCart = [...parseCart, data];
      localStorage.setItem('cart', JSON.stringify(insertCart));
      console.log(insertCart);
    }
    dispatch(increment());
    console.log(getCartStorage);
  };

  React.useEffect(() => {
    let findData;
    if (id) {
      findData = parseData[0][id];
      setData(findData);
    }
    setIsLoading((prev) => (prev = false));
  }, []);

  if (isLoading) {
    return <Loader />;
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
        <Button className="w-full" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default Detail;
