import React from 'react';
import { Carousel } from 'antd';
import './carouselMovie.scss';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselMovie = ({ listPhim }) => {
  return (
    <div>
      <Carousel slidesToShow={4} rows={2}>
        {listPhim.map((item, index) => {
          // console.log(item);
          return (
            <div key={index} className="p-5">
              <div className="movieCarousel text-left">
                <img
                  className="h-72 object-cover w-full"
                  src={item.hinhAnh}
                  alt=""
                />
                <div className="movieTitle my-3 min-h-[64px]">
                  <h3 className="text-2xl">
                    <span className="text-white bg-orange-500 p-1 rounded mr-3">
                      C18
                    </span>
                    {item.tenPhim}
                  </h3>
                </div>
                <p className="decsription line-clamp-2 h-11">{item.moTa}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselMovie;
