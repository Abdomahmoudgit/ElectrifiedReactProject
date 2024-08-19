import React from "react";

function PageNum3() {
  return (
    <div className="therdPage bg-black text-light">
      <div className="container">
        <div className="d-flex divImg align-items-center justify-content-center">
          <img
            src="img/Group 147.png"
            alt="Group"
            className="img-fluid"
            id="imgForM"
          />
        </div>
        <div className="row">
          <div className="textPage fs-1 d-flex align-items-center justify-content-center">
            تعرف إن مصر فيها أكتر من
          </div>
          <div className="textPage fs-1 d-flex align-items-center justify-content-center">
            <span>١٧٠</span> محطة شحن؟
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div>
            <img src="/img/Group 145.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="fBottons2 text-center mt-5">
            <button className="btn ms-3 btn-success text-black rounded-4">
              <img src="img/Vector (1).png" alt="icon" /> اقرب محطة شحن
            </button>
            <button className="btn btn-light rounded-4">
              <img src="img/Vector (2).png" alt="icon" /> خريطة المحطات
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-end">
          <div className="col-lg-4 offset-md-1">
            <div className="imgPage3">
              <img src="img/image 94.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-center">
              <div className="imgPage3">
                <img src="img/Group 184.png" className="img-fluid" alt="" />
              </div>
              <div className="textPage3">
                <h2>عملية شحن مفيش أسهل</h2>
              </div>
              <p>
                ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن ويتم وضع
                النصوص النهائية المطلوبة للتصميم ويقول البعض العميل المبدئيه على
                التصميم يتم ازالة هذا النص من التصميم وعند موافقه
              </p>
            </div>
          </div>
        </div>
        {/* Start the two bottons */}
        {/* End the two bottons */}
        {/* Start a tow imgs and paragragh */}
      </div>
      {/* End a tow imgs and paragragh */}
    </div>
  );
}

export default PageNum3;
