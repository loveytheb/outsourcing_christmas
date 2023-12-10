import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showCustomModal } from "../../redux/modules/customModalSlice";

function AddButton() {
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    console.log("handleAddButtonClick");
    dispatch(showCustomModal(true));
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
