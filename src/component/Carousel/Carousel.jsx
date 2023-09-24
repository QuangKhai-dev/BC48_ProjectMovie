import React, { useState } from 'react';
import { Carousel } from 'antd';
import TrailerModal from '../TrailerModal/TrailerModal';
import './carousel.scss';
const contentStyle = {
  margin: 0,
  height: '500px',
  position: 'relative',
};
const trailerBanner = [
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/uqJ9u7GSaYM"
    title='Phim "Bàn Tay Diệt Quỷ" Trailer | KC 09.04.2021'
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/L-XhraxUsAs"
    title="Lật Mặt 6: Tấm Vé Định Mệnh | Trailer Chính thức | Netflix"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/NYH2sLid0Zc"
    title="Mortal Kombat (2021) - Official Red Band Trailer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];
const BannerCarousel = ({ listBanner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // contentModal đóng vai trò chứa dữ liệu hiển thị cho modal
  const [contentModal, setContentModal] = useState('');
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const removeContentModal = () => {
    setContentModal('');
  };

  return (
    <>
      <Carousel afterChange={onChange} id="banner" arrows={true}>
        {listBanner.map((item, index) => {
          console.log(item);
          // các slide chiều cao chưa giống nhau, nên có khoảng trắng
          return (
            <div key={index}>
              <div style={contentStyle}>
                <img
                  className="h-full w-full object-cover"
                  src={item.hinhAnh}
                  alt=""
                />
                <div
                  onClick={() => {
                    // mở modal
                    setIsModalOpen(true);
                    // set dữ liệu cho contentModal dựa trên index của slide đang có
                    setContentModal(trailerBanner[index]);
                  }}
                  className="icon_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[90px]"
                >
                  <i className="fa-regular fa-circle-play"></i>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <TrailerModal
        isModalOpen={isModalOpen}
        // phương thức onCancel gọi setState cho giá trị false để ẩn modal
        onCancel={() => {
          setIsModalOpen(false);
        }}
        contentModal={contentModal}
      />
    </>
  );
};

export default BannerCarousel;
