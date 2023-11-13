import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center ">
      <Link to="/movie/home" className="">
        <Button>Go to main</Button>
      </Link>
    </section>
  );
};

export default Index;
