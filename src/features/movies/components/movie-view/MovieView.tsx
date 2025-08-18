
import { memo, type FC } from 'react';

interface Props {
    data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
    console.log(data);

    return (
        <div className="MovieView container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {data?.map((movie: any) => (
                <div key={movie.id} className="p-2 shadow rounded bg-white">
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto rounded"
                        />
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
