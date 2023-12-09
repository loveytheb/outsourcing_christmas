import React from 'react'
import styled from 'styled-components';
import { auth } from '../../../firebase';
import { signOut } from "firebase/auth";
import { setModalOpen } from '../../../redux/modules/modalState';
import { setModalType } from '../../../redux/modules/modalState';
import { useDispatch, useSelector } from 'react-redux';

export default function AuthBtn() {
    const currentUser = useSelector((state) => state.authSlice.currentUser)
    const dispatch = useDispatch();

    const logOut = async (event) => {
        event.preventDefault();
        await signOut(auth)
        alert("로그아웃이 완료되었습니다.")
    }

    const loginClickHandler = () => {
        dispatch(setModalOpen(true));
        dispatch(setModalType("login"))
    }

    const signupClickHandler = () => {
        dispatch(setModalOpen(true));
        dispatch(setModalType("signup"))
    }
  return (
    <>
        <StLogInBtn onClick={loginClickHandler}>Log in</StLogInBtn>
        <StLogOutBtn onClick={logOut}>Log out</StLogOutBtn>
        <StSignupBtn onClick={signupClickHandler}>Sign up</StSignupBtn>
    </>
  )
}

const StLogInBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto 5px auto 1380px;
  border-radius: 20px;
  border: 1px solid green;
  background-color: white;
  color: green;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;
const StLogOutBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto 1.5rem auto 0;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;

  cursor: pointer;
`;
const StSignupBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto 1.5rem auto 0.5rem;
  border-radius: 20px;
  border: 1px solid red;
  background-color: white;
  color: red;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;
