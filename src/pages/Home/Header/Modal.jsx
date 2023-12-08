import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Login from '../Login';
import Signup from '../Signup';
import { setModalOpen } from '../../../redux/modules/modalState';

export default function Modal() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modalState.modalType);
  const modalBackground = useRef();

  const modalBackgroundOnclickHandler = () => {
    dispatch(setModalOpen(false));
  }
  return (
    <StModalContainer>
        {modalType === "login" && (
            <Login
              modalBackground={modalBackground}
              modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}  
            />
          )}
          {modalType === "signup" && (
            <Signup
              modalBackground={modalBackground}
              modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}  
            />
          )}
    </StModalContainer>
  )
}

const StModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`