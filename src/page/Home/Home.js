import React, { useEffect } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhim';

const Home = () => {
  useEffect(() => {
    quanLyPhimServ
      .getAllBanner()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Home</div>;
};

export default Home;
