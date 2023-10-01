import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { quanLyRapServ } from '../../services/quanLyRap';
import TabLichChieu from '../TabLichChieu/TabLichChieu';

const TabHeThongRap = () => {
  const [listHeThongRap, setListHeThongRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .layThongTinHeThongRap()
      .then((res) => {
        // console.log(res);
        setListHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto tabHeThongRap my-20">
      <Tabs
        tabPosition={'left'}
        // items={new Array(3).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   return {
        //     label: `Tab ${id}`,
        //     key: id,
        //     children: `Content of Tab ${id}`,
        //   };
        // })}
        items={listHeThongRap.map((item, index) => {
          // console.log(item);
          return {
            label: <img className="w-10 h-10" src={item.logo} />,
            key: item.maHeThongRap,
            children: <TabLichChieu maHeThongRap={item.maHeThongRap} />,
          };
        })}
      />
    </div>
  );
};

export default TabHeThongRap;
