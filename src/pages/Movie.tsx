import Container from '../views/atoms/Container';
import Detail from '../views/molecules/Detail';

const Movie = () => {
  return (
    <Container className="px-5 sm:px-6 md:px-9 mt-6">
      <Detail />
    </Container>
  );
};

export default Movie;
