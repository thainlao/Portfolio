
import React, { useState } from "react";
import '../styles/project.css';
import project1 from '../assets/art.png';
import project2 from '../assets/artnft.png';
import project3 from '../assets/cbk.png';
import project4 from '../assets/usa.png';
import project5 from '../assets/store.png';
import project6 from '../assets/clone.png';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const SliderData = [
    {
      image: project1,
      caption: 'Мой первый успешный NFT-проект, который остается моим любимым визуальным опытом. SPA-приложение с использованием JS, CSS, React и Solidity.'
    },
    {
        image: project2,
        caption: 'Мой первый проект на работе – одностраничное приложение. Простое, но значимое воспоминание в моей карьере.'
      },
      {
        image: project3,
        caption: 'Один из моих основательных проектов. Красивое приложение с множеством анимаций и эффектов. Использованные технологии: Tailwind, CSS, JS, React, Solidity.' 
      },
      {
        image: project4,
        caption: 'Incognitto NFT – еще один из моих фаворитов. Проект с эффектом матрицы, hidden Mint. Прекрасное одностраничное приложение.'
      },
      {
        image: project5,
        caption: 'Личный проект (Pet): интернет-магазин техники с регистрацией, корзиной, историей заказов и адаптивным дизайном. Использован стек: JS, React, CSS. '
      },
      {
        image: project6,
        caption: 'Личный проект (Pet): Моя гордость в визуальном дизайне – клон Яндекс.Музыки и Яндекс.Плюса. С регистрацией, адаптивным дизайном и множеством интересных модальных окон. Использованные технологии: Cookies, TS, React, CSS'
      },
  ];

const Project = () => {
    const [current, setCurrent] = useState(0); 

    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    };

    return (
        <div className="section" id="project">
            <div className="project">
            <section className='slider'>
                <div className="slider_tittle">
                    <h1 className="project_text">Мои</h1>
                    <span className="project_text_main">Проекты</span>
                </div>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                        <div>
                            <img 
                            src={slide.image} 
                            alt='travel image' 
                            className='image' 
                            />
                            <div className="img-text-conitaer">
                                <p className="img_text">{slide.caption}</p>
                            </div>
                        </div>
                        )}
                    </div>
                    );
                })}
                </section>
            </div>
        </div> 
    )
}

export default Project;