import { memo } from 'react';
import searchIcon from "../../shared/assets/searchIcon.svg"
const Search = () => {
  return (
    <div className="Search container justify-center mx-auto">
     <div className=' w-[380px] h-16 bg-[#1111] flex space-x-2 border items-center mx-auto '>
<img className=' w-6 h-6 mt-1 ml-4' src={searchIcon} alt="" />
     <form action="" >
          <input className=' mt-1 h-5' placeholder='Названия фильма' type="text" />
     </form>
     </div>
     <div className=' justify-center mr-auto ml-auto '>
        <h2 className=' w-[193px] h-6  mt-[250px] justify-center mr-auto ml-auto'>Страница пока пуст</h2>
        <h3 className=' w-[378px] mt-10 h-6 justify-center mr-auto ml-auto '>По вашему запросу ничего не найдена</h3>
     </div>
    </div>
  );
};

export default memo(Search);