import Search from 'antd/es/input/Search';
import React, { useEffect } from 'react';
import TablePhim from '../../component/TablePhim/TablePhim';
import { useDispatch } from 'react-redux';
import { getAllMovieApi } from '../../redux/phimSlice';
import { useNavigate } from 'react-router-dom';
const ListPhimAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovieApi());
  }, []);

  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-medium text-3xl">Quản lí phim</h2>
      <button
        onClick={() => {
          navigate('/admin/them-phim');
        }}
        className="bg-green-500 text-white py-2 px-5 rounded hover:bg-green-600 duration-500"
      >
        Thêm phim
      </button>
      <div>
        <Search
          placeholder="Tìm kiếm phim"
          // onSearch={onSearch}
        />
      </div>
      <TablePhim />
    </div>
  );
};

export default ListPhimAdmin;
