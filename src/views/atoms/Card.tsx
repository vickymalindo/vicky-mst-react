import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { useAppSelector } from '../../redux/store';

export function CardDefault() {
  const count = useAppSelector((state) => state.counter.value);
  console.log(count);
  return (
    <Card className="mt-10 w-96 sm:w-64 lg:w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
          UI/UX Review Check
        </Typography>
        <Typography className="text-xs sm:text-sm md:text-base">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="px-1.5 py-2.5 sm:px-2 sm:py-4 md:px-3 md:py-5">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
