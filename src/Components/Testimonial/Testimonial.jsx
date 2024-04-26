import React, { useEffect } from 'react';
import './Testimonial.css';
import Swiper from 'swiper';

const Testimonial = () => {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        756: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  }, []);

  return (
    <section className="testimonial-group">
      <div className="container">
        <h2 className="headerstyle">Testimonial</h2>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slider-wrapper">
                <p>
                  "Dr. Dukle's Hospital and Research Center sets the standard
                  for excellence in healthcare."
                </p>
                <h5>-Tonny Starc</h5>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-wrapper">
                <p>
                  "Dr. Dukle's Hospital and Research Center sets the standard
                  for excellence in healthcare."
                </p>
                <h5>-Rubina</h5>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-wrapper">
                <p>
                  "Dr. Dukle's Hospital and Research Center sets the standard
                  for excellence in healthcare."
                </p>
                <h5>-Ichigo</h5>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-wrapper">
                <p>
                  "Dr. Dukle's Hospital and Research Center sets the standard
                  for excellence in healthcare."
                </p>
                <h5>-Peter Paris</h5>
              </div>
            </div>
            {/* Add more swiper slides as needed */}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
