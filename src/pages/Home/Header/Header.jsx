import React from 'react'
import styled from 'styled-components'
import { TbChristmasTree } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import AuthBtn from './AuthBtn';
import Modal from './Modal';
import { useSelector } from 'react-redux';

export default function Header() {
  const navigate = useNavigate();
  const modalOpen = useSelector((state) => state.modalState.modalOpen);

  return (
    <>
        <StHeader>
            <StTitleContainer onClick={() => {navigate('/')}}>
                <StHeaderImg>
                    <TbChristmasTree />
                </StHeaderImg>
                <StTItle>
                    산타의 핫스팟
                </StTItle>
                <AuthBtn />
            </StTitleContainer>
        </StHeader>
        { modalOpen && <Modal /> }
    </>
  )
}

const StHeader = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  position: fixed;
  z-index: 10;
  top: 0;
`
const StTitleContainer = styled.div`
  display: flex;
  cursor: pointer;
`
const StHeaderImg = styled.div`
  font-size: 80px;
  color: green;
  margin-top: 13px;
  margin-left: 10px;
`
const StTItle = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 700;
  margin-top: 33px;
`
const StSearchInput = styled.input`
    margin: 130px 450px 0 525px;
    padding-left: 40px;
    height: 60px;
    width: 900px;
    border-radius: 50px;
`