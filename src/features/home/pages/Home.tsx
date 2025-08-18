import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import Corusel from '../../../shared/components/corusel/Corusel';

const Home = () => {
  const { getMovie } = useMovie()
  const { data } = getMovie()
  return (
    <div className="Home">
      <Corusel />
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Home);