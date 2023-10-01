import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhim';
import BannerCarousel from '../../component/Carousel/Carousel';
import ListMovie from '../../component/ListMovie/ListMovie';
import { useDispatch } from 'react-redux';
import { getAllMovieApi } from '../../redux/phimSlice';
import TabHeThongRap from '../../component/TabHeThongRap/TabHeThongRap';
const Home = () => {
  const dispatch = useDispatch();
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
    dispatch(getAllMovieApi());
  }, []);

  return (
    <div>
      <BannerCarousel listBanner={listBanner} />
      <ListMovie />
      <TabHeThongRap />
    </div>
  );
};

export default Home;
