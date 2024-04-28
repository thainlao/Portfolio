import React, { useEffect, useRef, useState } from "react";
import '../styles/skill.css';
import me from '../assets/me.jpeg'
import { Tilt } from "react-tilt";
import Info from "./Info";

const Skill = () => {
    const textSectionRef = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const handleInfoOpen = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    const handleModalClose = () => {
        setIsInfoOpen(false);
      }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    entry.target.classList.add("animate-from-bottom");
                    setAnimationTriggered(true);
                }
            });
        }, { threshold: 0.5 });

        if (textSectionRef.current) {
            observer.observe(textSectionRef.current);
        }

        return () => {
            if (textSectionRef.current) {
                observer.unobserve(textSectionRef.current);
            }
        };
    }, [animationTriggered]);

    return (
        <div id="about">
            <div className="skill_section" ref={textSectionRef}>

                <div className="text_section">
                    <p className="skill_text">
                        <h1 className="skill_main_text">About <span className="skill_text_colored">Me</span></h1>
                        <h2 className="skill_text_sub">Я Front-end Разработчик!</h2>
                        <h3 style={{marginTop: '30px'}}>Мой опыт включает в себя реализацию разработки Smart-contracts на Solidity и создание сайтов для этих проектов.
                            В мою работы входила задача создании оптимизированого, дешевого и много-функционального smart-contract (De-fi, IPFS, Whitelists, AirDrop, Premint, PreSale, MerkleTree, Gas Optimisation)
                            Создание веб-сайтов к smart-contracts
                            SPA, MPA, Адаптивная верстка, интеграция сайта с контрактом. (JS, TypeScript, React, CSS, HTML, TailwindCSS, Solidity)
                        </h3>
                        <h4>Достижения и особенности проектов:

                        Более 10 коммерческих готовых проектов (Лендинг, многостраничные, SPA, MPA WEB) Все они есть в моем GitHub</h4>
                        <div className="flex gap-[3rem]">
                        <button className="skill_a" onClick={handleInfoOpen}>
                            Learn More
                        </button>
                        <a className="skill_a" href="https://ordinalknights.fun/">
                            Мой NFT-Сайт
                        </a>
                        </div>
                    </p>
                </div>
            </div>
            {isInfoOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                          <Info onCloseModal={handleModalClose}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Skill;