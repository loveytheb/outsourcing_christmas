import React, { useState } from 'react'
import styled from 'styled-components';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setModalType } from '../../redux/modules/modalState';
import { setModalOpen } from '../../redux/modules/modalState';

export default function Login({ modalBackground, modalBackgroundOnclickHandler }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    
    const signupPageClickHandler = () => {
        dispatch(setModalType("signup"));
    }

    const onChange = (event) => {
      const {
        target: { name, value }
      } = event;
      if (name === "email") {
        setEmail(value);
      }
      if (name === "password") {
        setPassword(value);
      }
    };
  
    const logIn = async (event) => {
      event.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword( auth, email, password );
        console.log(userCredential);
        alert("로그인에 성공하였습니다.");
        // 로그인 성공하면 모달창 닫히게
        dispatch(setModalOpen(false));
      } catch (error) {
        console.log(error);
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    };

  return (
    <StModalContent onSubmit={logIn}>
      <StModalCloseBtn>
        <IoCloseCircleOutline ref={modalBackground} onClick={modalBackgroundOnclickHandler} />
      </StModalCloseBtn>
      <StLoginModalTitle>로그인</StLoginModalTitle>
      <StModalLoginInput
        type="email"
        value={email}
        name="email"
        onChange={onChange}
        required
        placeholder="이메일을 입력해주세요"
      />
      <StModalLoginInput
        type="password"
        value={password}
        name="password"
        onChange={onChange}
        required
        autoComplete="off"
        placeholder="비밀번호를 입력해주세요"
      />
      <StModalLonInBtn disabled={!(email && password)}>로그인</StModalLonInBtn>
      <StModalSignupBtn onClick={signupPageClickHandler}>회원가입</StModalSignupBtn>
    </StModalContent>
  )
}

const StModalContent = styled.form`
  background-color: white;
  width: 400px;
  height: 420px;

  z-index: 100;
`;
const StModalCloseBtn = styled.button`
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  float: right;
`;
const StLoginModalTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin: 135px 145px 20px 155px;
`;
const StModalLoginInput = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;
`;
const StModalLonInBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;

  cursor: pointer;
`;
const StModalSignupBtn = styled.span`
  border-bottom: 1px solid black;
  margin-left: 280px;
  font-size: 13px;

  cursor: pointer;
`;