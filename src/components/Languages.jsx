import React, { useEffect, useRef, useState } from "react";
import '../styles/languages.css';
import tailwind from '../assets/pngwing.com (1).png';
import css from '../assets/pngwing.com (2).png';
import html from '../assets/pngwing.com (3).png';
import react from '../assets/pngwing.com (4).png';
import js from '../assets/pngwing.com (5).png';
import TypeScript from '../assets/pngwing.com (6).png';
import { Tilt } from "react-tilt";

const Languages = () => {
    const [isSeen1, setIsSeen1] = useState(false);
    const [isSeen2, setIsSeen2] = useState(false);
    const [isSeen3, setIsSeen3] = useState(false);
    const [isSeen4, setIsSeen4] = useState(false);
    const [isSeen5, setIsSeen5] = useState(false);
    const [isSeen6, setIsSeen6] = useState(false);
    const [isSeen7, setIsSeen7] = useState(false);

    const textSectionRef1 = useRef(null);
    const textSectionRef2 = useRef(null);
    const textSectionRef3 = useRef(null);
    const textSectionRef4 = useRef(null);
    const textSectionRef5 = useRef(null);
    const textSectionRef6 = useRef(null);
    const textSectionRef7 = useRef(null);
  
    useEffect(() => {
      const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen1) {
            entry.target.classList.add("left");
            setIsSeen1(true);
          }
        });
      }, { threshold: 0.5 });
  
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen2) {
            entry.target.classList.add("top");
            setIsSeen2(true);
          }
        });
      }, { threshold: 0.5 });
  
      const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen3) {
            entry.target.classList.add("right");
            setIsSeen3(true);
          }
        });
      }, { threshold: 0.5 });
  
      const observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen4) {
            entry.target.classList.add("left");
            setIsSeen4(true);
          }
        });
      }, { threshold: 0.5 });

      const observer5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen5) {
            entry.target.classList.add("bottom");
            setIsSeen5(true);
          }
        });
      }, { threshold: 0.5 });

      const observer6 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen6) {
            entry.target.classList.add("bot");
            setIsSeen6(true);
          }
        });
      }, { threshold: 0.5 });

      const observer7 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSeen7) {
            entry.target.classList.add("top");
            setIsSeen7(true);
          }
        });
      }, { threshold: 0.5 });
  
      if (textSectionRef1.current) {
        observer1.observe(textSectionRef1.current);
      }
      if (textSectionRef2.current) {
        observer2.observe(textSectionRef2.current);
      }
      if (textSectionRef3.current) {
        observer3.observe(textSectionRef3.current);
      }
  
      if (textSectionRef4.current) {
        observer4.observe(textSectionRef4.current);
      }

      if (textSectionRef5.current) {
        observer4.observe(textSectionRef5.current);
      }

      if (textSectionRef6.current) {
        observer6.observe(textSectionRef6.current);
      }
      if (textSectionRef7.current) {
        observer7.observe(textSectionRef7.current);
      }
  
      return () => {
        if (textSectionRef1.current) {
          observer1.unobserve(textSectionRef1.current);
        }
        if (textSectionRef2.current) {
          observer2.unobserve(textSectionRef2.current);
        }
        if (textSectionRef3.current) {
          observer3.unobserve(textSectionRef3.current);
        }
        if (textSectionRef4.current) {
          observer4.unobserve(textSectionRef4.current);
        }
        if (textSectionRef5.current) {
            observer5.unobserve(textSectionRef5.current);
        }
        if (textSectionRef6.current) {
            observer6.unobserve(textSectionRef6.current);
        }
        if (textSectionRef7.current) {
            observer7.unobserve(textSectionRef7.current);
        }
          
      };
    }, [isSeen1, isSeen2, isSeen3, isSeen4, isSeen5, isSeen6, isSeen7]);

    return (
        <div className="languages_section" id="skill">
            <p ref={textSectionRef7} className="languages_text">My <span className="languages_text_colored">Stack</span></p>
            <div className="languages_container">
                <div className="javascript grid_span" ref={textSectionRef1}>
                    <img className="lang_pic" src={js}/>
                    <p className="lang_text">JAVASCRIPT</p>
                </div>
                <div className="tailwind" ref={textSectionRef2}>
                    <img className="lang_pic" src={tailwind}/>
                    <p className="lang_text">python</p>
                </div>
                <div className="typeScript" ref={textSectionRef3}>
                    <img className="lang_pic" src={TypeScript}/>
                    <p className="lang_text">TypeScript</p>
                </div>
                <div className="html" ref={textSectionRef4}>
                    <img className="lang_pic" src={html}/>
                    <p className="lang_text">HTML</p>
                </div>
                <div className="react" ref={textSectionRef5}>
                    <img className="lang_pic" src={react}/>
                    <p className="lang_text">React</p>
                </div>
                <div className="css" ref={textSectionRef6}>
                    <img className="lang_pic" src={css}/>
                    <p className="lang_text">CSS</p>
                </div>
            </div>
        </div>
    )
}

export default Languages;