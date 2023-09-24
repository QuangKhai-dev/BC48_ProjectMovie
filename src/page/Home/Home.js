import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhim';
import BannerCarousel from '../../component/Carousel/Carousel';

const Home = () => {
  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    quanLyPhimServ
      .getAllBanner()
      .then((result) => {
        console.log(result);
        // setState
        setListBanner(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <BannerCarousel listBanner={listBanner} />
    </div>
  );
};

export default Home;
