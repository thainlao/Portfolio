import React, { useState, useEffect } from "react";
import '../styles/jobline.css';

const Jobline = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const steps = [
        "Анализ задачи",
        "Планирование",
        "Реализация",
        "Адаптация"
    ];

    return (
        <div className="jobline_container">
            <h1 className="main_text_job flex justify-center items-center gap-3">Системный подход -<span className="colored">продутивное решение задачи</span></h1>
        <div className="jobline_items">
            {steps.map((step, index) => (
                <div className={`jobline ${activeIndex === index ? "active_line" : ""}`} key={index}>
                    <div className="jobline_ball">
                        <div className={`ball ${activeIndex === index ? "active_ball" : ""}`} />
                        <p className={`step_text ${activeIndex === index ? "active" : ""}`}>
                            {step}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Jobline;