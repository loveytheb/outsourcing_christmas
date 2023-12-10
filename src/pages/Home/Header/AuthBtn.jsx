import React from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { setModalOpen } from "../../../redux/modules/modalState";
import { setModalType } from "../../../redux/modules/modalState";
import { useDispatch, useSelector } from "react-redux";
import { __isLogin } from "../../../redux/modules/authSlice";

export default function AuthBtn() {
  // const currentUser = useSelector((state) => state.authSlice.currentUser)
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.authSlice.isLogined);
  console.log(isLogined);

  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
    dispatch(__isLogin({ isLogined: false, userId: "" }));
    alert("로그아웃이 완료되었습니다.");
  };

  const loginClickHandler = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalType("login"));
  };

  const signupClickHandler = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalType("signup"));
  };
  return (
    <>
      {isLogined ? (
        <LoginBtn onClick={logOut}>Log out</LoginBtn>
      ) : (
        <LoginBtn onClick={loginClickHandler}>Log in</LoginBtn>
      )}
      {/* <StSignupBtn onClick={signupClickHandler}>Sign up</StSignupBtn> */}
    </>
  );
}

const StLogInBtn = styled.button`
  /* width: 110px;
  height: 40px;
  margin: auto 5px auto 1380px;
  border-radius: 20px;
  border: 1px solid green;
  background-color: white;
  color: green; */
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;
const StLogOutBtn = styled.button`
  /* width: 110px;
  height: 40px;
  margin: auto 1.5rem auto 0;
  border-radius: 20px;
  border: 1px solid black; */
  background-color: white;

  cursor: pointer;
`;
const StSignupBtn = styled.button`
  /* width: 110px;
  height: 40px;
  margin: auto 1.5rem auto 0.5rem;
  border-radius: 20px;
  border: 1px solid red;
  background-color: white; */
  color: red;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Cookie-Regular";
  font-size: 25px;
  color: white;

  cursor: pointer;
`;
