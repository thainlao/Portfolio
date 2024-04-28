import React, {useEffect} from "react";
import '../styles/home.css';
import tailwind from '../assets/pngwing.com (1).png';
import css from '../assets/pngwing.com (2).png';
import html from '../assets/pngwing.com (3).png';
import react from '../assets/pngwing.com (4).png';
import js from '../assets/pngwing.com (5).png';
import solidity from '../assets/pngwing.com (6).png';
import Particles from "particles.js";

const ParticleContainer = () => {
    useEffect(() => {
        const particlesConfig = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            retina_detect: true
        };

        window.particlesJS("particles-js", particlesConfig);
    }, []);

    return (
        <div id="particles-js"></div>
    );
};

const Home = () => {
    return (
        <div className="section" id="home">
            <ParticleContainer />
            <div className="home">
                <div className="home_left">
                    <h2 className="home_left_tittle">
                        <h3>ПРИВЕТ, Я АЛЕКСАНДР</h3>
                        <h4>FRONTEND & BLOCKCHAIN</h4>
                    </h2>
                    <p className="home_left_text">Я Front-End Web Разработчик</p>
                    <a href="#martix" className="home_btn">START</a>
                </div>

                <div className="home_right">
                    <ul className="home_icon">
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={solidity} className="img_home_css" alt="solidity"/>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={css} className="img_home_css" alt="css"/>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={tailwind} className="img_home_tailwind" alt="tawilind"/>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={html} className="img_home_js" alt="html"/>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={react} className="img_home_tailwind" alt="react"/>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                            <img src={js} className="img_home_js" alt="js"/>
                            </span>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Home