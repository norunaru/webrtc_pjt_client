import { createSlice } from "@reduxjs/toolkit";

//state 하나를 slice라고 부름
export const salarySlice = createSlice({
  name: "salary",
  initialState: 3000000,
  reducers: {
    increment: (state) => {
      return (state += 100000);
    },
    decrement: (state) => {
      return (state -= 100000);
    },
  },
});

//state 수정함수들 export할땐 .actions를 붙인다. {}형태로 남음
export const { increment, decrement } = salarySlice.actions;

export default salarySlice;
