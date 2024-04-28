import React, { useEffect, useRef, useState } from "react";
import '../styles/feedback.css';
import Jobline from "./Jobline";

const Feedback = () => {
    const horizontalLineRef = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    entry.target.classList.add("nice_appearance");
                    setAnimationTriggered(true);
                }
            });
        }, { threshold: 0.5 });

        if (horizontalLineRef.current) {
            observer.observe(horizontalLineRef.current);
        }

        return () => {
            if (horizontalLineRef.current) {
                observer.unobserve(horizontalLineRef.current);
            }
        };
    }, [animationTriggered]);

    return (
        <div className="feedback_body">
            <div className="feedback_messages">
                <h1 className="main_text_title">Feed<span className="colored">back</span></h1>
            </div>
            <div className="feedback_title">
                <div className="line1">
                    <p className="line1st1">"Its just too much"</p>
                    <p className="line1st2">"How can I get back?"</p>
                </div>
                <div className="line2">
                    <p className="line1st3">"Not sure... What you think?"</p>
                    <p className="line1st4">"Its overwhelming"</p>
                </div>
                <div className="line3">
                    <p className="line1st5">'The rest of my team isn't using it'</p>
                    <p className="line1st6">"I just wanna sold it idc"</p>
                </div>
                <div className="line4">
                    <p className="line1st7">"Can you just make it better?"</p>
                </div>
                <div className="line5">
                    <p className="line1st9">"I don't know, do what you like"</p>
                    <p className="line1st10">"it takes too much space on my phone"</p>
                </div>
                <div className="line6">
                    <p className="line1st11">"Can we make it cheaper?"</p>
                    <p className="line1st12">"I would rather use free services for NFT"</p>
                </div>
                <div className="feedback_messages">
                </div>
                <div className="result">
                    <div className="feedback_messages_result">
                        <h1 className="main_text">
                            THE BIG IDEA
                        </h1>
                        <h2 className="sub_text_result">
                        "Каждая прошедшая работа для меня – ценный опыт, способствующий моему постоянному росту и развитию в сфере IT. Я глубоко убежден в том, что даже в самых разнообразных отзывах о своей деятельности скрыты уроки, которые помогают мне становиться более компетентным и профессиональным в своей области.
                        </h2>
                        <span className="text-[#f200b2] sub_text_result"> love it!</span>
                    </div>
                </div>
                <div ref={horizontalLineRef} className='horizontal_line_content'>
                <Jobline />
                </div>
                <div className="problems_section" style={{marginTop: '140px'}}>
                    <div className="problem_items">
                        <div style={{marginBottom: '45px'}} className="problems_item">
                            <p style={{opacity: '0.4', marginLeft: '20px'}} className="problem_title_main">Проблема(ы)</p>
                            <p></p>
                            <p className="problem_title_main"> Решение(я)</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Парадокс выбора</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Приоритет опций</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Перенасыщение информацией</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Упрощение, распределение</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Лаги, провисания</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Уменьшение графических элементов</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Нет конкретных дизайновых идей</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Создание собственного дизайна</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Проблемы с понимаем BLOCKCHAIN, NFT</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Пошаговое и последовательное создание NFT проекта с нуля</p>
                        </div>
                        <div className="problems_item">
                            <p className="problem_title">Проблемы с навигацией</p>
                            <div class="arrow-right"></div>
                            <p className="problem_text"> Добавление глобальной навигации</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;