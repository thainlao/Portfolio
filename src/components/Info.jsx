import React, { useEffect, useState } from "react";
import '../styles/form.css';

const Info = ({ onCloseModal }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onCloseModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onCloseModal]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className={`form_body ${isVisible ? 'visible' : ''}`}>
            <div className="form_contect">
            <h1 className="form_tittle">Communication</h1>
            <hr className="form_line"/>
            <div className="info_text_title">
                <div className="info_text_para">
                    <p className="info_text_main">Образование:</p>
                    <p className="info_text">МГЛУ</p>
                </div>
                <div className="info_text_para">
                    <p className="info_text_main">Возраст:</p>
                    <p className="info_text">21</p>
                </div>
                <div className="info_text_para">
                    <p className="info_text_main">Стек:</p>
                    <p className="info_text">JS, TS, CSS, Tailwind, React, HTML</p>
                </div>
            </div>
            <p className="info_text_sub">
            <span className="info_text_main">О себе:</span>
            Имею огромные цели стать лучшим из лучших в IT сфере и с каждым днем становлюсь к этому ближе
            Быстро адаптируюсь к новым технологиям и постоянно стремлюсь к самосовершенствованию. В моей работе я всегда стараюсь создавать качественные и инновационные проекты, которые приносят пользу и радость пользователям.
            Ответственность и дисциплина мое втрое имя.
            </p>
            <button onClick={onCloseModal} className="info_button">Close</button>
          <hr style={{marginTop: '15px'}} className="form_line"/>
            <p className="form_sub">Thainlao Dev.</p>
        </div>
        </div>
    )
}

export default Info;