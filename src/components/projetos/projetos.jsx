import React, { useState } from "react";
import "./projetos.scss";
import IconComponent from "../../shared/icons/iconComponent";
import itau from "../../shared/images/projects/itau.jpg";
import omnik from "../../shared/images/projects/omnik.jpg";
import fcamara from "../../shared/images/projects/fcamara.jpg";
import picpay from "../../shared/images/projects/picpay.png";
import classNames from "classnames";

const Projetos = () => {
  const carrouselData = [
    {
      src: picpay,
      title: "desafio de contratação picpay",
      description:
      "aplicação de agendamento de pagamento que inclui funcionalidades de login e CRUD.",
      link:'https://github.com/joaomarcos70/frontend-challenge-picpay'
    },
     {
      src: itau,
      title: "itaú",
      description:
      "plataforma de consultoria financeira integrada, aprimorando eficiência e experiência do cliente no Itaú.",
      link:'https://www.linkedin.com/in/joaoalbuquerq/details/experience/'
    },
    {
      src: omnik,
      title: "omnik",
      description:
      "projeto voltado a área de marketplace, sendo a Omnik um marketplace totalmente white label flexível e adaptável ao e-commerce do cliente.",
      link:'https://www.linkedin.com/in/joaoalbuquerq/details/experience/'
    },
    {
      src: itau,
      title: "itaú",
      description:
        "projeto centralizado em documentação, API's e suporte, otimizando processos e mantendo padrões de qualidade no Itaú.",
        link:'https://www.linkedin.com/in/joaoalbuquerq/details/experience/'
    },
    {
      src: fcamara,
      title: "fcamara",
      description:
        "plataforma integrada que facilita a administração abrangente, incluindo criação de vagas, gerenciamento de consultores, controle de projetos e despesas, aprovações e geração de documentos.",
        link:'https://www.linkedin.com/in/joaoalbuquerq/details/experience/'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBeforeClick, setBeforeClick] = useState(false);
  const [isAfterClick, setAfterClick] = useState(false);

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carrouselData.length);
    setAfterClick(true);
    setBeforeClick(false);
  };
  const before = () => {
    setBeforeClick(true);
    setAfterClick(false);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carrouselData.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="container-projects">
      <div className="display">
      <label>projetos</label>
      {carrouselData.length > 1 && ( 
        <div className="chevrons">
          <div className="icon" onClick={next}>
            <IconComponent icon="chevron-left" className="chevron" />
          </div>
          <div className="line"></div>
          <div className="icon" onClick={before}>
            <IconComponent icon="chevron-right" className="chevron" />
          </div>
        </div>
        )}
      </div>

      {carrouselData.map((item, index) =>
        index === currentSlide ? (
          <section className="container-carrousel" key={item.title}>
            <div
              className={classNames("carrousel", {
                before: isBeforeClick,
                after: isAfterClick,
              })}
            >
              <img src={item.src} alt={item.title} />
              <h1>{item.title}</h1>
              <div className="text">
                <p>{item.description}</p>
              </div>
            <div className="description" onClick={() => window.open(item.link)}>
              <a>saiba mais</a>
            </div>
            </div>
          </section>
        ) : null
      )}
    </section>
  );
};

export default Projetos;
