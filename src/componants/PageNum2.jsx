import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PageNum2() {
  useEffect(() => {
    $("#partners-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $("#additional-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div className="secoundPage">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5">
            <div className="wordsInSec2">
              <h1>
                كل اللي بتتمناه ... <span>وأكتر!</span>
              </h1>
              <p>
                النهائية المطلوبة للتصميم ويقول البعض ان وضع يتم ازالة هذا النص
                من التصميم ويتم وضع النصوص وعند موافقه العميل المبدئيه على
                التصميم
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <img
              src="/img/mainCAr.png"
              className="img-fluid limited-img"
              alt="car"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-black-50">شركائنا</h3>
      </div>
      <div className="row" id="partners-slider">
        <div className="item img-fluid limited-img">
          <img src="img/Group 38.png" alt=" 1" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 39.png" alt=" 2" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 40.png" alt=" 3" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 41.png" alt=" 4" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 42.png" alt=" 5" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 43.png" alt=" 6" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 44.png" alt=" 7" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 45.png" alt=" 8" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 47.png" alt=" 9" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 50.png" alt=" 10" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 51.png" alt=" 11" />
        </div>
      </div>
      <div className="row mt-5" id="additional-slider">
        <div className="item img-fluid limited-img">
          <img src="img/Group 79.png" alt=" 12" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 80.png" alt=" 13" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 95.png" alt=" 14" />
        </div>
        <div className="item img-fluid limited-img">
          <img src="img/Group 96.png" alt=" 15" />
        </div>
      </div>
    </div>
  );
}

export default PageNum2;
