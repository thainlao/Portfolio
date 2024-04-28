import '../styles/end.css';
import logo from '../assets/logo1.png';
import gt from "../assets/github (1).png";
import tg from "../assets/telegram.png";
import twitter from "../assets/twitter (1).png";

const End = () => {

    return (
        <div className="end">
            <div className="end_container">
                <div className="end_line"></div>
                <div className="logo_sector">
                <img src={logo} alt='logo' className="logo"/>
                </div>
                <div style={{marginBottom: '20px'}} className="end_subline"></div>
                <div className="text_sector">
                <a className="end_text" href="#home">HOME</a>
                <a className="end_text" href="#about">ABOUT</a>
                <a className="end_text" href="#skill">SKILL</a>
                <a className="end_text" href="#project">PROJECT</a>
                <a style={{marginBottom: '20px'}} href="#contact" className="end_text">CONTACT</a>
                </div>
                <div style={{marginBottom: '20px'}} className="end_subline"></div>
                <p className="end_text_logo">HOPE YOU ENJOY</p>
                <div className="links_section">
                    <a href="https://t.me/thaindsw">
                        <img className="w-9 h-9 transition ease-in-out delay-150 hover:translate-x-0.5" alt="telegram" src={tg} />
                    </a>
                    <a href="https://twitter.com/ThainlaoNft">
                        <img className="w-9 h-9 transition ease-in-out delay-150 hover:translate-x-0.5" alt="discrod" src={twitter} />
                    </a>
                    <a href="https://github.com/thainlao">
                        <img className="w-9 h-9 transition ease-in-out delay-150 hover:translate-x-0.5" alt="github" src={gt} />
                    </a>
                </div>
                <p className="end_text_logo">@ 2023 THAINLAO DEV</p>
            </div>
        </div>
    )
}

export default End;