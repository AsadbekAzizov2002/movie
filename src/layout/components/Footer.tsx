import { memo } from 'react';
import Logo2 from "../../shared/assets/logo2.svg"
import Google from "../../shared/assets/googlePlay.png"
import Apps from "../../shared/assets/appstore.png"
import icon2 from "../../shared/assets/icon2.svg"
import icon3 from "../../shared/assets/logo3.svg"
import icon4 from "../../shared/assets/logo4.svg"
import icon5 from "../../shared/assets/logo5.svg"
import icon6 from "../../shared/assets/logo5.svg"
import icon7 from "../../shared/assets/logo7.svg"
import icon8 from "../../shared/assets/logo8.svg"
import icon9 from "../../shared/assets/logo9.svg"
import icon10 from "../../shared/assets/logo10.svg"
import icon11 from "../../shared/assets/logo11.svg"
import icon12 from "../../shared/assets/logo12.svg"

const Footer = () => {
  return (
    <div className="Footer container w-[1180px] h-[240px] mt-16 bg-[#111111] flex justify-between items-center">
      <div className=' items-center'>
        <img className=' ml-4 mb-5 w-[56px] h-[36px] ' src={Logo2} alt="logo" />
        <img className=' mb-2' src={Google} alt="img" />
        <img src={Apps} alt="img" />
      </div>
      <div>
        <h2 className=' text-white'>О нас</h2>
        <button className=' flex gap-3'>
          <img src={icon2} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Публичная оферта</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon3} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Реклама</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon4} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>F.A.Q</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon5} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Контакты  </h2>
        </button>
      </div>
      <div >
        <h2 className=' text-white'>Категории</h2>
        <button className=' flex gap-3'>
          <img src={icon6} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Кино</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon7} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Театр</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon8} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Концерты</h2>
        </button>
        <button className=' flex gap-3'>
          <img src={icon9} alt="" />
          <h2 className=' text-[#A1A1A1] active:text-red-600'>Спорт</h2>
        </button>
      </div>
      <div className=' pr-2'>
        <h2 className=' mb-2 text-white'>Связаться с нами</h2>
        <h1 className=' text-red-600 mb-6'>+998 (95) 897-33-38</h1>
        <h2 className=' text-white mb-2'>Социальные сети</h2>
        <span className=' flex gap-5'>
          <img src={icon10} alt="" />
          <img src={icon11} alt="" />
          <img src={icon12} alt="" />
        </span>
      </div>
    </div>
  );
};

export default memo(Footer);