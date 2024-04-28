import React from "react";
import '../styles/code.css';

const Code = () => {
    return (
        <div className="code">
            <div className="code_section">
                <h1 className="code_text">SOURCE CODE</h1>
                <h2 className="code_text_main">behind the Scene</h2>
                <div className="code_text_sub">
                    <h3>Примешь синюю таблетку, продолжаешь листать, уходишь с этого сайта и веришь во что хочешь. Примешь красную таблетку - останешься в стране чудес, а я покажу тебе, как глубока кроличья нора.</h3>
                </div>
                <a href="https://github.com/thainlao/portfolio" className="code_button">
                    <span className="code_button_span">Show me</span>
                </a>
            </div>
        </div>
    )
}

export default Code;