import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useCast } from '../service/useCast';
import { IMAGE_URL } from '../../../shared/const';
import MovieView from '../../movies/components/movie-view/MovieView';

const CastDetail = () => {
  const { id } = useParams()
  const { getCastById, getCastItem } = useCast()
  const { data } = getCastById(Number(id))
  const {data:moviesData} = getCastItem(Number(id),"movie_credits")
  console.log(moviesData);

  return (
    <div className="CastDetail">
      <div className=' flex gap-10'>
        <div>
          <img src={`${IMAGE_URL}${data?.profile_path}`} width={300} alt="" />
        </div>
        <div>
          <h2 className=' text-red-300 text-4xl'>{data?.name}</h2>
          <p className=' text-red-200'>birthday :{data?.birthday}</p>
          <p className=' text-red-200 text-xl flex gap-2'>place_of_birth: {data?.place_of_birth}</p>
          <p className=' text-red-300 text-xl'>known_for_department : {data?.known_for_department}</p>
          <h3 className=' text-red-200 w-[400px] line-clamp-16'>biography :{data?.biography}</h3>

        </div>
      </div>
      <div>
        <MovieView data={moviesData?.cast}/>
      </div>

    </div>
  );
};

export default memo(CastDetail);