import React from "react";
import Slider from "react-slick";
import Sliders from "./Sliders";
import AluraMidiImg from "../../assets/Images/alura-midi.png";
import CrudImg from "../../assets/Images/crud-img.png";
import nutricionistaImg from "../../assets/Images/aparecida-nutricionista.png";
import ConsumindoApiImg from "../../assets/Images/consumindo API.png";
import PortfolioAntigoImg from "../../assets/Images/PortfolioAntigo.png";
import BootstrapImg from "../../assets/Images/bootstrap.png";
import VidracariaImg from "../../assets/Images/vidraçaria.png";


let data = [
  {
    imageSrc : VidracariaImg,
    descripton : "Neste projeto foi desenvolvido um site para uma vidraçaria, criado com react e Styled Components.",
    link: "https://vidracaria-react-allansf29s-projects.vercel.app"
  },
  {
    imageSrc : PortfolioAntigoImg,
    descripton : "Portfólio 1.0 criado no final de 2022, sendo o meu primeiro projeto criado do zero com HTML CSS e JAVASCRIPT.",
    link: "https://allansf29.github.io/"
  },
  {
    imageSrc : CrudImg,
    descripton : "Neste projeto foi criado funções de CREATE, READ, UPDATE e DELETE.",
    link: "https://allansf29.github.io/crud/"
  },
  {
    imageSrc : nutricionistaImg,
    descripton : "Neste projeto foi criado uma tabela que calcula o IMC, exclui os paciente e filtra.",
    link: "https://allansf29.github.io/Aparecida-Nutricionista/"
  },
  {
    imageSrc : AluraMidiImg,
    descripton : "Neste projeto foi criado um Midi com 9 botões com diferentes sons.",
    link: "https://allansf29.github.io/Midi/"
  },
  {
    imageSrc : ConsumindoApiImg,
    descripton : "Neste projeto após o usuário preencher o CEP será preenchido automanticamente o endereço.",
    link: "https://allansf29.github.io/projetos/Consumindo%20API%20CEP/index.html"
  },
  {
    imageSrc : BootstrapImg,
    descripton : "Neste projeto foi criado um site de receitas utilizando bootstrap.",
    link: "https://allansf29.github.io/fruta-e-fruto-bootstrap/"
  },

  
]

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,
  autoplay: false,
  speed: 200,
  autoplaySpeed: 5000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode : false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode : false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode : false
      }
    }
  ]
};

const SliderComp = () => {
  let sliderProject = "";
  sliderProject = data.map((project, item) => (
    <Sliders item = {project} key={item} />
  ))



  return (
    <Slider {...settings}>
      {sliderProject}
    </Slider>
  )
}

export default SliderComp;
