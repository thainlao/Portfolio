import React, { useEffect, useRef, useState } from "react";
import '../styles/about.css';

const About = () => {
  const canvasRef = useRef(null);
  const fontSize = 20;
  const columns = window.innerWidth / fontSize;

  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabetString = latin + nums;
  let rainDrops = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.08)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#f200b2';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 34);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleMouseOver = (event, index) => {
    if (!animationComplete[index]) return;

    let iteration = 0;
    setAnimationComplete(prevState => ({ ...prevState, [index]: false }));

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, idx) => {
          if (idx < iteration) {
            return event.target.dataset.value[idx];
          }

          return alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
        setAnimationComplete(prevState => ({ ...prevState, [index]: true }));
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOut = (event, index) => {
    if (!animationComplete[index]) return;
    event.target.innerText = event.target.dataset.value;
  };

  const [animationComplete, setAnimationComplete] = useState({
    0: true,
    1: true
  });

  return (
    <div className="section" id='martix'>
      <canvas className="matrix" ref={canvasRef}></canvas>
      <div className="about_section">
        <div className="about_text_section">
          <div className="text-animation">
            <a
              className="about_p"
              data-value='FRONT-END'
              onMouseOver={e => handleMouseOver(e, 0)}
              onMouseOut={e => handleMouseOut(e, 0)}
            >
              FRONT-END
            </a>
            <p className="about_p1_f">&</p>
            <a
              className="about_p"
              data-value='BLOCKCHAIN'
              onMouseOver={e => handleMouseOver(e, 1)}
              onMouseOut={e => handleMouseOut(e, 1)}
            >
              BLOCKCHAIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
