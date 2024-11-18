import React from "react";

const Banner = () => {
  return (
    <div id="carouselExample" className="carousel carousel-fade my-2" data-bs-ride="carousel" data-bs-interval="4000" >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="5"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/melalaunchbanner01bb-891238_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/melalaunchbanner01cc-814966_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/melalaunchbanner01dd-932488_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/melalaunchbanner01ddd-582469_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 4"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/onaya-websitesep23a-318929l-699411_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 5"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopaccino.com/onayafashions/slideshows/onaya-websitesep23b-453258l-336392_l.jpg?v=521"
            className="h-[18rem] md:h-[32rem] lg:h-[40rem] d-block w-100 "
            alt="Fashion collection 6"
          />
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
