import React from 'react';
import { Popconfirm, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyPhimServ } from '../../services/quanLyPhim';
import { getAllMovieApi } from '../../redux/phimSlice';

const TablePhim = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      key: 'maPhim',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      render: (text, record, index) => {
        return <img src={text} className="h-20" />;
      },
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      key: 'tenPhim',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      key: 'moTa',
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className="text-xl text-blue-500">
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá phim"
            description="Bạn có chắc muốn xoá phim?"
            onConfirm={() => {
              console.log(record);
              // xoá phim khỏi danh sách
              quanLyPhimServ
                .deleteMovie(record.maPhim)
                .then((res) => {
                  console.log(res);
                  // gọi dữ liệu mới về
                  dispatch(getAllMovieApi());
                  // thông báo xoá thành công
                })
                .catch((err) => {
                  console.log(err);
                  // thông báo lí do xoá thất bại
                });
            }}
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{ className: 'bg-red-500 hover:bg-red-600' }}
          >
            <button className="text-xl text-red-500">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const { listPhim } = useSelector((state) => state.phimSlice);
  console.log(listPhim);

  return (
    <div>
      <Table columns={columns} dataSource={listPhim} />
    </div>
  );
};

export default TablePhim;
