import React, { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import ebg from '../assets/ebg.png';
import ebg1 from '../assets/ebg3.png';
import ebg2 from '../assets/ebg2.png';
import Form from "./Form";
import '../styles/form.css';
import End from "./End";
import pochta from '../assets/pochta.png';
import Code from "./Code";
import Jobline from "./Jobline";

const Contact = () => {
  const [isSeen1, setIsSeen1] = useState(false);
  const [isSeen2, setIsSeen2] = useState(false);
  const [isSeen3, setIsSeen3] = useState(false);
  const textSectionRef1 = useRef(null);
  const textSectionRef2 = useRef(null);
  const textSectionRef3 = useRef(null);

  const [isModalOpen, setIsModelOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModelOpen(true);
  }

  const handleModalClose = () => {
    setIsModelOpen(false);
  }

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isSeen1) {
          entry.target.classList.add("animate-from-right");
          setIsSeen1(true);
        }
      });
    }, { threshold: 0.5 });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isSeen2) {
          entry.target.classList.add("animate-from-left");
          setIsSeen2(true);
        }
      });
    }, { threshold: 0.5 });

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isSeen3) {
          entry.target.classList.add("animate-from-right");
          setIsSeen3(true);
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
    };
  }, [isSeen1, isSeen2, isSeen3]);

  return (
    <div className="section" id="contact">
      <div className="contact_section">
        <div className="contact_elements">
          <p className="contact_text">Contact</p>
          <div className="section1" ref={textSectionRef1}>
            <p style={{ marginLeft: "20px" }} className="contact_text_sub">
            Связывая свою будущую карьеру с Front-end разработкой, я уверен, что смогу принести вклад в развитие современных веб-приложений и создавать удивительные пользовательские интерфейсы, которые будут радовать множество людей.
            </p>
            <img
              style={{ marginRight: "20px" }}
              className="section_img_ebg"
              src={ebg}
              alt="tailwind"
            />
          </div>
          <div className="section2" ref={textSectionRef2}>
            <img
              style={{ marginLeft: "20px" }}
              className="section_img_ebg"
              src={ebg1}
              alt="react"
            />
            <p
              style={{ marginRight: "20px" }}
              className="contact_text_sub animate-from-left"
            >
          Я верю, что постоянное обучение и развитие являются ключевыми элементами успеха в сфере Front-end разработки, и я всегда стремлюсь быть в курсе последних тенденций и лучших практик. Мои навыки и преданность своей работе позволяют мне реализовывать свои творческие идеи и достигать выдающихся результатов.
            </p>
          </div>
          <div className="section3" ref={textSectionRef3}>
            <p
              style={{ marginLeft: "20px" }}
              className="contact_text_sub animate-from-right"
            >
            Моя страсть к Front-end разработке только растет с каждым новым проектом. Владение современными инструментами и языками программирования позволяет мне создавать элегантные и удобные пользовательские интерфейсы. Я с удовольствием принимаю сложные вызовы и нахожу креативные решения для достижения поставленных целей.
            </p>
            <img
              style={{ marginRight: "20px" }}
              className="section_img_ebg"
              src={ebg2}
              alt="tailwind"
            />
          </div>
        </div>
        <div className="form-sent_section">
          <p className="form-sent_section_text">Заинтересованы в работе со мной?</p>
          <p className="form-sent_section_subtext" style={{marginLeft: '20px'}}>Я всегда открыт к дискусиям по поводу работы или сотрудничества</p>
          <button className="form-sent_section_button" onClick={handleModalOpen}>
            Let's go
          </button>
          <div className="pochta_div">
          <img src={pochta} className="pochta"/>
          <p className="form-sent_section_subtext">sashanosko2@gmail.com</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <Form onCloseModal={handleModalClose}/>
          </div>
        </div>
      )}
      <Code />
      <End />
    </div>
  );
};

export default Contact;
