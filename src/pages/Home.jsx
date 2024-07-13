import React from "react";
import Button from "../components/common/Button";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/salary/salarySlice";

const Home = () => {
  const 월급 = useSelector((state) => {
    return state.salary;
  });
  const dispatch = useDispatch(); //변경 요청을 보내주는 함수

  console.log(월급);
  return (
    <div>
      <Header></Header>
      <h1>Home</h1>
      <span>월급 : {월급}</span>
      <Button
        btnText="월급업"
        func={() => {
          dispatch(increment());
        }}
      />
      <Button
        btnText="월급다운"
        func={() => {
          dispatch(decrement());
        }}
      />
    </div>
  );
};

export default Home;
