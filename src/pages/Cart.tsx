import React from 'react';
import Container from '../views/atoms/Container';
import Loader from '../views/atoms/Loader';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { handleChange } from '../redux/features/cartSlice';
import { useAppDispatch } from '../redux/store';
import { Link } from 'react-router-dom';
import { AiOutlineCaretLeft } from 'react-icons/ai';

const Cart = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getCart = localStorage.getItem('cart');
  const dispatch = useAppDispatch();

  const removeCart = (index: number) => {
    const res = data.filter((item, idx) => {
      return idx !== index;
    });
    setData(res);
    localStorage.setItem('cart', JSON.stringify(res));
    dispatch(handleChange());
  };

  React.useEffect(() => {
    if (getCart) {
      const parseCart = JSON.parse(getCart);
      setData(parseCart);
    }
    setIsLoading((prev) => (prev = false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="px-5 sm:px-6 md:px-9 mt-5">
      <Link
        to="/movie/home"
        className="text-lg text-blue-400 flex items-center"
      >
        <AiOutlineCaretLeft className="inline-block" />
        Go Home
      </Link>
      <section className="flex flex-wrap justify-center md:justify-between gap-2">
        {data.length === 0 ? (
          <p>Empty Data</p>
        ) : (
          data.map((val, index) => {
            return (
              <Card className="mt-10 w-96 sm:w-64 lg:w-96" key={index}>
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={val.Poster}
                    alt="card-image"
                    className="h-56 w-full"
                  />
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
                    onClick={() => removeCart(index)}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            );
          })
        )}
      </section>
    </Container>
  );
};

export default Cart;
