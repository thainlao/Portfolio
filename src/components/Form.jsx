import React, { useEffect, useState, useRef } from "react";
import '../styles/form.css';
import emailjs from '@emailjs/browser';
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/react";

const Form = ({ onCloseModal }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true); 
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    /* MODALS */
    const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  `;
  
    const [loading, setLoading] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isNameEmpty, setIsNameEmpty] = useState(false);

    const handleSuccessClose = () => {
        setSuccessModalVisible(false);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    
        const emailIsValid = newEmail.includes('@') && newEmail.includes('.');
        setIsEmailValid(emailIsValid);
    
        if (isFormSubmitted) {
            setIsFormSubmitted(false);
        }
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    
        const nameIsValid = newName.length >= 4;
        setIsNameValid(nameIsValid);
    
        if (isFormSubmitted) {
            setIsFormSubmitted(false);
        }
    }

    const handleMessageChange = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);

        setCharacterCount(newMessage.length);
    }
    
    /* SUBMIT BUTTON */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' && name.trim() === '') {
            setErrorModalVisible(true)
        }
    
        const emailIsValid = email.includes('@') && email.includes('.');
        const nameIsValid = name.length >= 4;
    
        setIsFormSubmitted(true);
    
        if (emailIsValid && nameIsValid) {
            setLoading(true);
            emailjs
                .send(
                    'service_6t2vgce',
                    'template_qmgfn42',
                    {
                        from_name: name,
                        to_name: 'Sasha',
                        from_email: email,
                        to_email: 'sashanosko2@gmail.com',
                        message: message,
                    },
                    'NzJQElqVvqagmOO2q'
                )
                .then(() => {
                    setLoading(false);
                    setSuccessModalVisible(true);
    
                    setEmail('');
                    setName('');
                    setMessage('');
                })
                .catch((error) => {
                    setLoading(false);
    
                    console.log(error);
    
                    setErrorModalVisible(true);
                });
        } else {
            console.log('введите данные правильно')
        }
    };

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
                <div className="form_sector">
                    <p className="form_text">E-MAIL</p>
                    <input
                        className={`form_input ${(!isEmailValid && isFormSubmitted) || (!isNameValid && isFormSubmitted) ? 'invalid' : ''}`}
                        placeholder=" Your E-MAIL" 
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {!isEmailValid && isFormSubmitted && <p className="error_text"> Invalid email format</p>}
                </div>
                
                <div className="form_sector">
                <p className="form_text">USERNAME</p>
                    <input
                        className={`form_input ${(!isEmailValid && isFormSubmitted) || (!isNameValid && isFormSubmitted) ? 'invalid' : ''}`}
                        placeholder=" Your Name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    {!isNameValid && isFormSubmitted && <p className="error_text"> Must be 4 characters long</p>}
                </div>
                <div className="form_sector_message">
                    <p className="form_text">MESSAGE</p>
                    <input
                        className={`form_input_message ${message.length > 200 ? 'invalid' : ''}`}
                        placeholder=" Your Message"
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <p className="character_count">{characterCount}/200 characters</p>
                </div>
                <div className="form_buttons">
                    <button className="form_submit_button" onClick={handleSubmit}>
                        {loading ? 'Sending' : 'Submit'}
                    </button>
                    <button onClick={onCloseModal} className="modal-close">
                        Close
                    </button>
                </div>
                <hr style={{marginTop: '15px'}} className="form_line"/>
            </div>
            <p style={{marginTop: '15px'}} className="form_sub">Thainlao Dev.</p>
            <div className={`loading_modal ${loading ? 'visible' : ''}`}>
                <div className="modal-overlay">
                    <div className="modal-loading">
                    <ScaleLoader
                        css={override}
                        size={150}
                        color={"#f200b2"}
                        loading={loading}
                    />
                    </div>
                </div>
            </div>
            <div className={`success_modal ${successModalVisible ? 'visible' : ''}`}>
                <div className="modal-overlay">
                    <div className="success-loading">
                        <p className="success_text">Your message successfully send!</p>
                        <button onClick={onCloseModal} className="success-button">Close</button>
                    </div>
                </div>
            </div>
            <div className={`error_modal ${errorModalVisible ? 'visible' : ''}`}>
                <div className="modal-overlay">
                    <div className="error-loading">
                        <p className="success_text">Введите правильные данные</p>
                        <button onClick={() => setErrorModalVisible(false)} className="success-button">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
