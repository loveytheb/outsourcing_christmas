import React, { useState } from "react";
import styled from "styled-components";
import treeImg from "../assets/treeIcon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthBtn from "../pages/Home/Header/AuthBtn";
import Modal from "../pages/Home/Header/Modal";
import AddButton from "./common/AddButton";
import CustomModal from "./common/CustomModal";

function Header() {
  const navigate = useNavigate();
  const modalOpen = useSelector((state) => state.modalState.modalOpen);
  const isOpen = useSelector((state) => state.customModalSlice.isOpen);

  const [isLogin, setIsLogin] = useState(true); //redux로 상태관리 수정 필
  return (
    <>
      <MainHeader>
        <H1
          onClick={() => {
            navigate("/");
          }}
        >
          Santa's HotSpot
        </H1>
        <TreeImg src={treeImg} />
        <AuthBtn />
        <AddButton />
        {isLogin ? <LoginBtn>Logout</LoginBtn> : <LoginBtn>Login</LoginBtn>}
      </MainHeader>
      {modalOpen && <Modal />}
      {isOpen && <CustomModal />}
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
