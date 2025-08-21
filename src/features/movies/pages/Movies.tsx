import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../../cast/service/useCast';
// import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { getMovie } = useMovie()
    const { data } = getMovie()
  return (
    <div className="Movies gap-3">
     
            <MovieView data={data?.results} />
      <div className=' container '>
        {/* <div> */
        /* <ul className=' flex gap-20'>
          <li className=' text-red-300'>
            <NavLink to={"similar"}>Similar</NavLink></li>
          <li className=' text-red-300'><NavLink to={"cast"}>Cast</NavLink></li>
        </ul>
        </div> */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default memo(Movies);