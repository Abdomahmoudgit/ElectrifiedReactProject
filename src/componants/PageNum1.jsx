import React from "react";

function pageNum1() {
  return (
    <div className="firstPage">
      <nav className="navbar shadow navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="abdoRectApp">
            <img src="img/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" />
          </button>
          <div
            className="collapse textColor justify-content-center navbar-collapse"
            id="main"
          >
            <ul className="navbar-nav text-center mx-auto mb-2 mb-lg-0 f-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="abdoRectApp"
                >
                  <p>الرئيسية</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>اشتري</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>بيع</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>اشحن</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>اتعامل</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>إعرف أكتر</p>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>دخول إلى الحساب</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abdoRectApp">
                  <p>تواصل معنا</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="landing gap-4 d-flex align-items-center align-content-center flex-wrap justify-content-start flex-row">
              <h1>وجهتك المتكاملة للمركبات الكهربائية في مصر!</h1>
              <p>
                وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من
                التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان
                وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
                الملاحظات او الانتقادات للتصميم الاساسي.
              </p>
              <div className="fBottons d-flex text-center gap-3 mt-2 ms-2 me-2">
                <button className="btn btn-success text-black rounded-4">
                  <i className="fa-solid fa-car" /> اشتري
                </button>
                <button className="btn btn-light rounded-4">
                  <img src="/img/Frame.png" alt="icon" /> اعرض للبيع
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pageNum1;
