import { https } from './config';

export const quanLyNguoiDungServ = {
  dangNhap: (data) => {
    // data = {
    //   taiKhoan: 'aaaa',
    //   matKhau: '',
    // };
    return https.post('/api/QuanLyNguoiDung/DangNhap', data);
  },
};
