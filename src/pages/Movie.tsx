import { Link } from 'react-router-dom';
import Container from '../views/atoms/Container';
import Detail from '../views/molecules/Detail';
import { AiOutlineCaretLeft } from 'react-icons/ai';

const Movie = () => {
  return (
    <Container className="px-5 sm:px-6 md:px-9 mt-6">
      <Link
        to="/movie/home"
        className="text-lg text-blue-400 flex items-center"
      >
        <AiOutlineCaretLeft className="inline-block" />
        Go Home
      </Link>
      <Detail />
    </Container>
  );
};

export default Movie;
