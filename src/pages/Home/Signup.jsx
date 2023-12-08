import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { IoCloseCircleOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../redux/modules/modalState';

export default function Signup({ modalBackground, modalBackgroundOnclickHandler }) {
  const dispatch = useDispatch();

  const loginPageCLickHandler = () => {
    dispatch(setModalType("login"));
  }
  // 닉네임, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 오류 메세지 상태
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setconfirmPasswordMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  // 회원가입
  const signUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert("회원가입이 완료되었습니다.");
      // 회원가입 성공하면 모달창 닫히게
      loginPageCLickHandler();
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  // 닉네임
  const onChangeName = useCallback((event) => {
    setName(event.target.value);
    if (event.target.value.length < 2 || event.target.value.length > 8) {
      setNameMessage("2글자 이상 8글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 형식입니다.");
      setIsName(true);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((event) => {
    setEmail(event.target.value);
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(event.target.value)) {
      setEmailMessage("이메일 형식에 맞춰서 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);
    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(event.target.value)) {
      setPasswordMessage("숫자+영문자+특수문자(!@#$%^*+=-) 조합으로 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangeConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
      if (password === event.target.value) {
        setconfirmPasswordMessage("비밀번호가 일치합니다.");
        setIsConfirmPassword(true);
      } else {
        setconfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
        setIsConfirmPassword(false);
      }
    },
    [password]
  );
  return (
    <>
      <StModalContent onSubmit={signUp}>
      <StModalCloseBtn>
        <IoCloseCircleOutline ref={modalBackground} onClick={modalBackgroundOnclickHandler} />
      </StModalCloseBtn>
      <StModalSignupTitle>회원가입</StModalSignupTitle>
      <StModalLoginInput type="text" value={name} name="name" onChange={onChangeName} placeholder="닉네임" />
      {name.length > 0 && (
        <StWarningText className={`message ${isName ? "success" : "error"}`}>{nameMessage}</StWarningText>
      )}
      <StModalLoginInput
        type="email"
        value={email}
        name="email"
        onChange={onChangeEmail}
        required
        placeholder="이메일"
      />
      {email.length > 0 && (
        <StWarningText className={`message ${isEmail ? "success" : "error"}`}>{emailMessage}</StWarningText>
      )}
      <StModalLoginInput
        type="password"
        value={password}
        name="password"
        onChange={onChangePassword}
        required
        autoComplete="off"
        placeholder="비밀번호"
      />
      {password.length > 0 && (
        <StWarningText className={`message ${isPassword ? "success" : "error"}`}>{passwordMessage}</StWarningText>
      )}
      <StModalLoginInput
        autoComplete="off"
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        onChange={onChangeConfirmPassword}
        placeholder="비밀번호 확인"
      />
      {confirmPassword.length > 0 && (
        <StWarningText className={`message ${isConfirmPassword ? "success" : "error"}`}>
          {confirmPasswordMessage}
        </StWarningText>
      )}
      <StModalLonInBtn disabled={!(isName && isEmail && isPassword && isConfirmPassword)}>회원가입</StModalLonInBtn>
      <StModalSignupBtn onClick={loginPageCLickHandler}>로그인</StModalSignupBtn>
    </StModalContent>
    </>
  )
}

const StModalContent = styled.form`
  background-color: white;
  width: 400px;
  height: 500px;

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
const StModalSignupTitle = styled.div`
  width: 120px;
  font-size: 23px;
  font-weight: bold;
  margin: 40px 120px 20px 140px;
`;

const StModalLoginInput = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 73px;
`;
const StWarningText = styled.div`
  font-size: 13px;
  margin: 5px 78px 5px 73px;
  &.success {
    transition: 0.5s;
    color: green;
  }
  &.error {
    transition: 0.5s;
    color: red;
  }
`;
const StModalLonInBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 73px;

  cursor: pointer;
`;
const StModalSignupBtn = styled.span`
  border-bottom: 1px solid black;
  margin-left: 285px;
  font-size: 13px;

  cursor: pointer;
`;