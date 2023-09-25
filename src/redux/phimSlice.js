import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../services/quanLyPhim';

const initialState = {
  listPhim: [],
};

// đây là thunk giúp xử lí các bất đồng bộ và nhận một kết quả trả về trước khi đi vào bên trong store và xử lí
export const getAllMovieApi = createAsyncThunk('phim/getAllMovie', async () => {
  const res = await quanLyPhimServ.getAllMovie();
  console.log(res);
  return res.data.content;
});

const phimSlice = createSlice({
  name: 'phim',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
      // xử lí khi gọi dữ liệu thành công
      state.listPhim = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = phimSlice.actions;

export default phimSlice.reducer;
