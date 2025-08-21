import { memo } from 'react';
import { useMovie } from '../service/useMovie';
import { useParams } from 'react-router-dom';

const Images = () => {
 const { id } = useParams()
  const { getMovieById, getMovieItems } = useMovie()
  const { data, isLoading } = getMovieById(Number(id))
  const { data: images, isLoading: isLoadingImages } = getMovieItems(Number(id), " images ")
  console.log(images);
  
  const { data: similarData } = getMovieItems(Number(id), " similar ")
  console.log(similarData);

  if (isLoading) {
    return <div className=' text-center text-4xl'>Loading...</div>
  }

  return (
    <div className="Similar">
     
     <div>
      <div className=' flex flex-wrap'>
         
          {images?.backdrops?.slice(0, 10).map((item: any, index: number) => (
            <img key={index} src={`https://image.tmdb.org/t/p/original${item.file_path}`} width={150} alt="" />
          ))  
          }
        </div>
     </div>
    </div>
  );
};

export default memo(Images);