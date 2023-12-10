import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { showCustomModal } from "../../redux/modules/customModalSlice";
import { __isLogin } from "../../redux/modules/authSlice";

function AddButton() {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.authSlice.isLogined);

  const handleAddButtonClick = () => {
    if (!isLogined) {
      alert("로그인이 필요합니다. 로그인부터 해주세요.");
      dispatch(showCustomModal(false));
    } else {
      dispatch(showCustomModal(true));
    }
  };

  return (
    <>
      <StBtn onClick={handleAddButtonClick}>+</StBtn>
    </>
  );
}

const StBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

export default AddButton;
