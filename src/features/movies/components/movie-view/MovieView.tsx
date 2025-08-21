import { memo, type FC } from 'react';
import Image from '../../../../shared/components/image/Image';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className="MovieView container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {data && data?.slice(0, 8).map((movie: any) => (
                <div key={movie.id} className="p-2 shadow rounded bg-white">
                    <div onClick={() => navigate(`/movie/${movie.id}`)}>
                        <Image height={300} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                    </div>
                    <div className="mt-2">
                        <h3
                            className="font-black line-clamp-1"
                            title={movie.title}
                        >
                            {movie.title}
                        </h3>
                        <p className="text-sm text-gray-600">⭐ {movie.vote_average}</p>
                    </div>
                </div>
            ))}
           
        </div>
    );
};

export default memo(MovieView);
