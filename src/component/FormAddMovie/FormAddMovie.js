import { DatePicker, Switch } from 'antd';
import React from 'react';
import { useFormik } from 'formik';
import { quanLyPhimServ } from '../../services/quanLyPhim';
import axios from 'axios';
const FormAddMovie = () => {
  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      moTa: '',
      trailer: '',
      ngayKhoiChieu: '',
      sapChieu: true,
      dangChieu: true,
      hot: true,
      danhGia: 0,
      hinhAnh: '',
    },
    onSubmit: (values) => {
      console.log(values);
      const data = new FormData();
      // dùng vòng lặp
      for (let key in values) {
        if (key != 'hinhAnh') {
          data.append(key, values[key]);
        } else {
          data.append('File', values[key]);
        }
      }

      // quanLyPhimServ
      //   .addMovie(data)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     //
      //   });
    },
  });

  const { handleSubmit, handleChange, values, setFieldValue } = formik;

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            for="tenPhim"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Tên phim
          </label>
          <input
            type="text"
            id="tenPhim"
            name="tenPhim"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập tên phim"
            onChange={handleChange}
            value={values.tenPhim}
          />
        </div>
        <div>
          <label
            for="trailer"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Trailer
          </label>
          <input
            type="text"
            id="trailer"
            name="trailer"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập trailer"
            onChange={handleChange}
            value={values.trailer}
          />
        </div>
        <div>
          <label
            for="moTa"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Mô tả
          </label>
          <input
            type="text"
            id="moTa"
            name="moTa"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập mô tả"
            onChange={handleChange}
            value={values.moTa}
          />
        </div>
        <div>
          <label
            for="ngayKhoiChieu"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Ngày khởi chiếu
          </label>
          <DatePicker
            name="ngayKhoiChieu"
            onChange={(day, dateString) => {
              // console.log(dateString);
              setFieldValue('ngayKhoiChieu', dateString);
            }}
            format={'DD/MM/YYYY'}
          />
        </div>
        <div>
          <label
            for="dangChieu"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Đang chiếu
          </label>
          <Switch
            defaultChecked
            onChange={(checked, event) => {
              setFieldValue('dangChieu', checked);
            }}
          />
        </div>
        <div>
          <label
            for="sapChieu"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Sắp chiếu
          </label>
          <Switch
            defaultChecked
            onChange={(checked, event) => {
              setFieldValue('sapChieu', checked);
            }}
          />
        </div>
        <div>
          <label for="hot" class="block mb-2 text-sm font-medium text-gray-900">
            Hot
          </label>
          <Switch
            defaultChecked
            onChange={(checked, event) => {
              setFieldValue('hot', checked);
            }}
          />
        </div>
        <div>
          <label
            for="danhGia"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Số sao
          </label>
          <input
            type="text"
            id="danhGia"
            name="danhGia"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52"
            placeholder="Nhập số sao"
            onChange={handleChange}
            value={values.danhGia}
          />
        </div>
        <div>
          <label
            for="hinhAnh"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Hình ảnh
          </label>
          <input
            type="file"
            name="hinhAnh"
            onChange={(event) => {
              console.log(event.target.files);
              setFieldValue('hinhAnh', event.target.files[0]);
            }}
          />
          <img src="" alt="" />
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-5 rounded"
          >
            Thêm phim
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddMovie;
