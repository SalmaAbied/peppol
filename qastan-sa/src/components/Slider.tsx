import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const LogosSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { t } = useTranslation()

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center pb-10 text-xl font-bold">{t('Home.Slider.Title')}</h1>
      <hr className="border border-legoOrange" />
      <Slider ref={sliderRef} {...settings} className="py-10 flex justify-center">
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 1" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 2" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 3" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 4" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 5" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 6" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 7" className="mx-auto" /></div>
        <div className="px-5 flex justify-center"><img src="https://www.qastan.be/swfiles/files/logo.svg" alt="Logo 8" className="mx-auto" /></div>
      </Slider>  
      <button onClick={goToPrevSlide}>
        <ArrowLeftIcon size={24} />
      </button>
      <button onClick={goToNextSlide}>
        <ArrowRightIcon size={24} />
      </button>
      <hr className="border border-legoOrange" />
    </div>
  );
};

export default LogosSlider;
