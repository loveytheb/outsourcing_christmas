import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showCustomModal } from "../../redux/modules/customModalSlice";

function AddButton() {
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(showCustomModal(true));
  };
  return (
    <>
      <StBtn onClick={handleAddButtonClick}>+</StBtn>
    </>
  );
}

const StBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto 1.5rem auto 0;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;

  cursor: pointer;
`;

export default AddButton;
