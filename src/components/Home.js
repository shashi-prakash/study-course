import React from "react";

export default function Home() {
  return (
    <>
      <div className="pull-right toggle-right-sidebar">
        <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right" />
      </div>
      <div
        id="right-sidebar"
        className="right-sidebar-notifcations nav-collapse"
      >
        <div
          className="bs-example bs-example-tabs right-sidebar-tab-notification"
          data-example-id="togglable-tabs"
        >
          <div
            className="right-sidebar-panel-content animated fadeInRight"
            tabIndex={5003}
            style={{ overflow: "hidden", outline: "none" }}
          ></div>
        </div>
      </div>
      {/*header*/}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="index.html">
                <span className="fa fa-diamond" />
                Study Course <span className="logo">Journey to success</span>
              </a>
            </h1>
            {/* if logo is image enable this   
  <a class="navbar-brand" href="#index.html">
      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
  </a> */}
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item @@about__active">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item @@courses__active">
                  <a className="nav-link" href="courses.html">
                    Courses
                  </a>
                </li>
                <li className="nav-item dropdown @@pages__active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages <span className="fa fa-angle-down" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item @@b__active" href="blog.html">
                      Blog posts
                    </a>
                    <a
                      className="dropdown-item @@bs__active"
                      href="blog-single.html"
                    >
                      Blog single
                    </a>
                    <a
                      className="dropdown-item @@error__active"
                      href="error.html"
                    >
                      {" "}
                      404 Error page
                    </a>
                    <a className="dropdown-item" href="landing-single.html">
                      {" "}
                      Landing page
                    </a>
                  </div>
                </li>
                <li className="nav-item @@contact__active">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              {/*/search-right*/}
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search" aria-hidden="true" />
                </a>
                {/* search popup */}
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form
                      action="error.html"
                      method="GET"
                      className="search-box"
                    >
                      <input
                        type="search"
                        placeholder="Search"
                        name="search"
                        required="required"
                        autoFocus=""
                      />
                      <button type="submit" className="btn">
                        <span className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                  <a className="close" href="#close">
                    ×
                  </a>
                </div>
                {/* /search popup */}
              </div>
              <div className="top-quote mr-lg-2 text-center">
                <a href="login.html" className="btn login mr-2">
                  <span className="fa fa-user" /> login
                </a>
              </div>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container py-1">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
      {/*/header*/}
      {/* main-slider */}
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>50% Discount on all Popular Courses</h5>
                        <p className="mt-4 pr-lg-4">
                          Take the first step to your journey to success with us
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          {" "}
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info  banner-view banner-top1 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Learn and Improve Yourself in Less Time </h5>
                        <p className="mt-4 pr-lg-4">
                          Our self improvement courses is very effective{" "}
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          {" "}
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Be More Productive to Be More Successful</h5>
                        <p className="mt-4 pr-lg-4">
                          Don't waste your time, check out our productive
                          courses
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          {" "}
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Enhance your skills with best online courses</h5>
                        <p className="mt-4 pr-lg-4">
                          Take the first step to your journey to success with us
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          {" "}
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            />
          </svg>
        </div>
      </section>
      {/* /main-slider */}
      <section className="w3l-courses">
        <div className="blog pb-5" id="courses">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center mb-1">
              Join our learn Courses
            </h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Featured Online <span>Courses</span>
            </h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c1.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$35.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Open Programming Courses for everyone : Python
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o" />
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o" />
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a1.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Olivia</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c5.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="course-price-badge"> Free</div>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$0.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Learning to Write as a clean and Professional Author
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o" />
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o" />
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a2.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c6.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="course-price-badge-new"> New</div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$49.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o" />
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o" />
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a4.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> William</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-more">
              <p className="pt-md-3 sample text-center">
                Control your personal preference settings to get notified about
                appropriate courses
                <a href="courses.html">
                  View All Courses{" "}
                  <span className="pl-2 fa fa-long-arrow-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-features py-5" id="facilities">
        <div className="call-w3 py-lg-5 py-md-4 py-2">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Study and graduate</h5>
                <h3 className="title-big mb-4">Our Facilities </h3>
                <p className="text-para">
                  Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                  nisi ac sed, lacinia est. Quisque ut lectus consequat,
                  venenatis eros et, commodo risus. Nullam sit amet laoreet
                  elit. Suspendisse non magna a velit efficitur.
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas ab qui impedit, libero illo quia sequi quibusdam
                  iure. Error minus quod reprehenderit quae dolor velit soluta
                  animi voluptate dicta enim? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Odio, provident!
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="call-grids-w3 d-grid">
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-certificate" />
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Global Certificate
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      doloramet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-book" />
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Books &amp; Library
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-trophy" />
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Scholarship
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-graduation-cap" />
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Alumni Support
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <h5 className="title-small text-center mb-1">From the news</h5>
          <h3 className="title-big text-center mb-sm-5 mb-4">
            Latest <span>News</span>
          </h3>
          <div className="row top-pics">
            <div className="col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <a href="blog-single.html" className="blog-desc">
                    Enhance your educational skills and also experience with
                    best online courses
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team1.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Isabella ava</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o" /> 1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <a href="blog-single.html" className="blog-desc">
                    Be more productive to be more Successful. Take your first
                    jouney
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team2.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Charlotte mia</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o" /> 1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="top-pic3">
                  <div className="card-body blog-details">
                    <a href="blog-single.html" className="blog-desc">
                      {" "}
                      Our self improvement courses are more effective. Start
                      leaarning online
                    </a>
                    <div className="author align-items-center">
                      <img
                        src="assets/images/team3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <a href="#author">Elizabeth</a>
                        </li>
                        <li className="meta-item blog-lesson">
                          <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                          <span className="meta-value ml-2">
                            <span className="fa fa-clock-o" /> 1 min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-md-5 mt-4 text-more text-center">
            <a href="blog.html">
              View All Posts <span className="pl-2 fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="middle py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="welcome-left text-center py-lg-4">
            <h5 className="title-small mb-1">Start learning online</h5>
            <h3 className="title-big">
              Enhance your skills with best online courses
            </h3>
            <a
              href="#started"
              className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
            >
              Get started now
            </a>
            <a
              href="contact.html"
              className="btn btn-style btn-primary mt-sm-5 mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* //middle */}
      <section className="w3l-team py-5" id="team">
        <div className="call-w3 py-lg-5 py-md-4">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Experienced professionals</h5>
                <h3 className="title-big mb-4">Meet our teachers</h3>
                <p className="text-para">
                  Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                  nisi ac sed, lacinia est. Quisque ut lectus consequat,
                  venenatis eros et, commodo risus. Nullam sit amet laoreet
                  elit. Suspendisse non magna a velit efficitur.
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas ab qui impedit, libero illo quia sequi quibusdam
                  iure. Error minus quod reprehenderit quae dolor velit soluta
                  animi voluptate dicta enim? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Odio, provident!
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team1.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">James</a>
                        </h3>
                        <span className="post">Director</span>
                        <ul className="social">
                          <li>
                            <a href="#" className="facebook">
                              <span className="fa fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-sm-0 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team2.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Victoria</a>
                        </h3>
                        <span className="post">Managing Director</span>
                        <ul className="social">
                          <li>
                            <a href="#" className="facebook">
                              <span className="fa fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team3.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Isabella</a>
                        </h3>
                        <span className="post">Teacher</span>
                        <ul className="social">
                          <li>
                            <a href="#" className="facebook">
                              <span className="fa fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team4.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Elizabeth</a>
                        </h3>
                        <span className="post">Teacher</span>
                        <ul className="social">
                          <li>
                            <a href="#" className="facebook">
                              <span className="fa fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="w3l-testimonials" id="clients">
        {/* /grids */}
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-4 py-md-3 pb-lg-0">
            <h5 className="title-small text-center mb-1">Testimonials</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Happy Clients &amp; Feedbacks
            </h3>
            {/* /grids */}
            <div className="testimonial-width">
              <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team1.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>John wilson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Julia sakura</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Roy Linderson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team4.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Mike Thyson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
        {/* //grids */}
      </section>
      {/* //testimonials */}
      <section className="w3l-clients py-5" id="clients">
        <div className="call-w3 py-md-4 py-2">
          <div className="container">
            <div className="company-logos text-center">
              <div className="row logos">
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                  <img
                    src="assets/images/brand4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand5.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand6.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-md-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                <h6 className="footer-title-29">Contact Info </h6>
                <p>
                  Address : Study course, 343 marketing, #2214 cravel street, NY
                  - 62617.
                </p>
                <p className="my-2">
                  Phone : <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a>
                </p>
                <p>
                  Email :{" "}
                  <a href="/cdn-cgi/l/email-protection#96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb">
                    <span
                      className="__cf_email__"
                      data-cfemail="b5dcdbd3daf5d0cdd4d8c5d9d09bd6dad8"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </p>
                <div className="main-social-footer-29 mt-4">
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook" />
                  </a>
                  <a href="#twitter" className="twitter">
                    <span className="fa fa-twitter" />
                  </a>
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram" />
                  </a>
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Company</h6>
                  <li>
                    <a href="about.html">About company</a>
                  </li>
                  <li>
                    <a href="blog.html"> Latest Blog posts</a>
                  </li>
                  <li>
                    <a href="#teacher"> Became a teacher </a>
                  </li>
                  <li>
                    <a href="courses.html">Online Courses</a>
                  </li>
                  <li>
                    <a href="contact.html">Get in touch</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Programs</h6>
                <ul>
                  <li>
                    <a href="#traning">Training Center</a>
                  </li>
                  <li>
                    <a href="#documentation">Documentation</a>
                  </li>
                  <li>
                    <a href="#release">Release Status</a>
                  </li>
                  <li>
                    <a href="#customers"> Customers</a>
                  </li>
                  <li>
                    <a href="#helpcenter"> Help Center</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Suppport</h6>
                <a href="#playstore">
                  <img
                    src="assets/images/googleplay.png"
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <a href="#appstore">
                  <img
                    src="assets/images/appstore.png"
                    className="img-responsive mt-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <section className="w3l-copyright text-center">
          <div className="container">
            <p className="copy-footer-29">
              © 2020 Study Course. All rights reserved. Design by{" "}
              <a href="https://w3layouts.com/" target="_blank">
                W3Layouts
              </a>
            </p>
          </div>
          {/* move top */}
          <button onClick="topFunction()" id="movetop" title="Go to top">
            ⤴
          </button>
          {/* /move top */}
        </section>
        {/* //copyright */}
      </section>
    </>
  );
}
