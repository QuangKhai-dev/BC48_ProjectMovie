import React from 'react';

const ListMovie = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-3xl font-bold">Danh sách các phim</h2>
      <div className="grid grid-cols-4">{/* dàn layout phim vào  */}</div>
    </div>
  );
};

export default ListMovie;
