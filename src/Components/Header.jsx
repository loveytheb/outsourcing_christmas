import React, { useState } from "react";
import styled from "styled-components";
import treeImg from "../assets/treeIcon.png";

function Header() {
  const [isLogin, setIsLogin] = useState(true); //redux로 상태관리 수정 필
  return (
    <>
      <MainHeader>
        <H1>Santa's HotSpot</H1>
        <TreeImg src={treeImg} />
        {isLogin ? <LoginBtn>Logout</LoginBtn> : <LoginBtn>Login</LoginBtn>}
      </MainHeader>
    </>
  );
}

export default Header;

const MainHeader = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 100px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0e3d11;
`;

const TreeImg = styled.img`
  width: 50px;
  height: 50px;
`;

const H1 = styled.h1`
  font-family: "Cookie-Regular";
  font-size: 36px;
  color: white;
`;

const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Cookie-Regular";
  font-size: 25px;
  color: white;

  cursor: pointer;
`;
