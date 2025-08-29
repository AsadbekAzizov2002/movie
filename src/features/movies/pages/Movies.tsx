// import { memo, useState } from 'react';
// import MovieView from '../components/movie-view/MovieView';
// import { useMovie } from '../service/useMovie';
// import { Pagination, Select } from 'antd';
// import { useSearchParams } from 'react-router-dom';
// import { useGenre } from '../service/useGenre';

// const Movies = () => {

//   const [params, setParams] = useSearchParams()
//   const { getGenres } = useGenre()
//   // const limit =param.get("limit")
//   // const [page, setPage] = useState(1)
// // const [genre , setGenre]=useState("")
//   const page = params.get("page") || "1"
//   const with_genres =params.get("genre")||""



//   const { getMovie } = useMovie()
//   const { data } = getMovie({ page, with_genres })
//   const { data: generData } = getGenres()
//   // setGenre(generData);
//   params.set("genre",value )
//   setParams(params)
//   const options = generData?.genres?.map(({id, name}:any )=>({value :id.toString() ,label:name }))


//   const handleChange = (value: number) => {

//     // setPage(value)
//     params.set("page", value.toString())
//     setParams(params)

//     // param.set("imit" , "10")
//     // setParam(param)

//   }
//   const handleChangeGenre=(value:string)=>{}
//   return (<div className=' movie '>
//     <div className="container">
//       <Select onChange={handleChangeGenre} className=' w-40' placeholder="selecet genre" options={options} />
//     </div>
//     <div className="Movies gap-3">

//       <MovieView data={data?.results} />
//       <div className=' container '>
//         <div className=' flex justify-center mt-5   bg-blue-200'>
//           <Pagination showSizeChanger={false} onChange={handleChange} total={data?.total_pages} defaultPageSize={1} />
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default memo(Movies);




import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../service/useMovie';
import { Pagination, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGenre } from '../service/useGenre';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const { getGenres } = useGenre();

  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";

  const { getMovie } = useMovie();
  const { data } = getMovie({ page, with_genres });
  const { data: generData } = getGenres();

  const options = generData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name
  }));

  // pagination uchun
  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  // genre tanlash uchun
  const handleChangeGenre = (value: string) => {
    params.set("genre", value);
    params.set("page", "1"); // yangi genre tanlansa page 1 ga qaytarish kerak
    setParams(params);
    console.log("Selected genre:", value);
  };

  return (
    <div className='movie'>
      <div className="container">
        <Select 
          onChange={handleChangeGenre} 
          className='w-40' 
          placeholder="Select genre" 
          options={options} 
          value={with_genres || undefined} // bu tanlangan genre Selectda ko‘rinsin
        />
      </div>

      <div className="Movies gap-3">
        <MovieView data={data?.results} />

        <div className='container'>
          <div className='flex justify-center mt-5 bg-blue-200'>
            <Pagination 
              showSizeChanger={false} 
              onChange={handleChange} 
              total={(data?.total_pages || 1) * 1} 
              defaultPageSize={1} 
              current={+page} // active page ni to‘g‘ri ko‘rsatish
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Movies);
















// // import { useMovie } from '../../cast/service/useCast';
// // import { NavLink } from 'react-router-dom';
// {/* <div> */
// /* <ul className=' flex gap-20'>
//   <li className=' text-red-300'>
//     <NavLink to={"similar"}>Similar</NavLink></li>
//   <li className=' text-red-300'><NavLink to={"cast"}>Cast</NavLink></li>
// </ul>
// </div> */}