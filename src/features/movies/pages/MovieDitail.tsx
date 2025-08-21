import { lazy, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../service/useMovie';
import Image from '../../../shared/components/image/Image';
import { IMAGE_URL } from '../../../shared/const';
const MovieView = lazy(() => import("../components/movie-view/MovieView"))

const MovieDitail = () => {
  const { id } = useParams()
  const { getMovieById, getMovieItems } = useMovie()
  const { data, isLoading } = getMovieById(Number(id))
  const { data: images, isLoading: isLoadingImages } = getMovieItems(Number(id), " images ")
  const { data: similarData } = getMovieItems(Number(id), " similar ")
  const { data: creaditsData } = getMovieItems(Number(id), "credits")
  console.log(creaditsData);

  const navigate =useNavigate()

  if (isLoading) {
    return <div className=' text-center text-4xl'>Loading...</div>
  }

  return (
    <div className="MovieDitail container ">
      <div>
        <div className='  gap-20 md:flex'>
          <div>
            <Image height={400} className=' h-[400px]' src={`${IMAGE_URL}${data.backdrop_path}`} />
          </div>
          <div className=' space-y-7'>
            <h2 className=' text-4xl text-red-500 '>{data?.title}</h2 >
            <h3 className=' text-xl text-red-500'> Language : {data?.original_language}</h3>
            <p className=' text-red-300'>
              {data?.release_date}
            </p>
            <p className=" line-clamp-5  text-red-300 w-[350px]">overview : {data?.overview}</p>
            <p className=' text-2xl text-green-300'>{data?.budget}$</p>
          </div>

        </div>
        <div className=' px-10 flex gap-3 mt-5 flex-wrap'>
          {images?.backdrops?.slice(0, 14).map((item: any, index: number) => (
            <img key={index} src={`${IMAGE_URL}${item.file_path}`} width={150} alt="" />
          ))
          }
        </div>
        <div className=' flex flex-wrap gap-5'>
          {
            creaditsData?.cast?.slice(0, 16).map((cast: any) => {
              const image = cast.profile_path ? `${IMAGE_URL}${cast.profile_path}` : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&psig=AOvVaw3Fdp3rEt7npboQByYsFoVO&ust=1755812933968000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDVx-PKmo8DFQAAAAAdAAAAABAE"
              return <div key={cast.id}>
                <img onClick={() => navigate(`/cast/${cast.id}`)} loading='lazy' src={image} width={150} alt="" />
                <h1 className=' text-2xl text-red-200 w-[100px] line-clamp-2'> {cast.original_name}</h1>
                <p className=' text-gray-50'>{cast.character}</p>
              </div>
            })
          }
        </div>
        <div>
          <MovieView data={similarData?.results?.slice(0, 8)} />
        </div>

      </div>
    </div>
  );
};

export default memo(MovieDitail);