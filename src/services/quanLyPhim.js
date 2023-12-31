import { https } from './config';

export const quanLyPhimServ = {
  // phương thức gọi dữ liệu
  getAllBanner: () => {
    // tham số thứ nhất là endpoint của url được gọi
    // tham số thứ 2 là data, data sẽ được truyền vào nếu api cần gửi dữ liệu lên cụ thể là phương thức post
    return https.get('/api/QuanLyPhim/LayDanhSachBanner');
  },
  getAllMovie: () => {
    return https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04');
  },
  deleteMovie: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  addMovie: (data) => {
    return https.post('/api/QuanLyPhim/ThemPhimUploadHinh', data);
  },
};
