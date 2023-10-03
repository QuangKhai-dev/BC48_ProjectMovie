import { DatePicker, Switch } from 'antd';
import React from 'react';

const FormAddMovie = () => {
  return (
    <div>
      <form className="space-y-5">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Tên phim
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập tên phim"
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Trailer
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập trailer"
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Mô tả
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập mô tả"
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Ngày khởi chiếu
          </label>
          <DatePicker />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Đang chiếu
          </label>
          <Switch defaultChecked />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Sắp chiếu
          </label>
          <Switch defaultChecked />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Hot
          </label>
          <Switch defaultChecked />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Số sao
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52"
            placeholder="Nhập số sao"
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Hình ảnh
          </label>
          <input type="file" />
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
