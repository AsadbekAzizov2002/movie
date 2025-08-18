
import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// @ts-ignore
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IMovie {
    id: number;
    title: string;
    backdrop_path: string | null;
}

const Corusel = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=40cc682e8ee428fa687ea8bb1a9a9cf4&language=en-US`
                );
                const data = await res.json();
                // faqat rasmli va 6ta film olish
                setMovies(data.results.filter((m: IMovie) => m.backdrop_path).slice(10, 36));
            } catch (err) {
                console.error("Filmlarni olishda xatolik:", err);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="w-full h-[500px] mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-2xl shadow-lg"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                            alt={movie.title}
                            className="w-full h-[500px] object-cover rounded-2xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default memo(Corusel);
