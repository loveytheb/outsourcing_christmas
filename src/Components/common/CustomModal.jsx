import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { showCustomModal } from "../../redux/modules/customModalSlice";

function CustomModal() {
  console.log("rendering now");
  const dispatch = useDispatch();
  const modalBackground = useRef();
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const closeModal = () => {
    dispatch(showCustomModal(false));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <CustomModalContainer>
      <CustomModalContent>
        {" "}
        <CustomModalCloseBtn onClick={closeModal}>
          <IoCloseCircleOutline ref={modalBackground} />
        </CustomModalCloseBtn>
        {imagePreview && (
          <ImagePreviewContainer>
            <img src={imagePreview} alt="Image Preview" />
          </ImagePreviewContainer>
        )}
        <CustomModalInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <CustomModalInput
          type="text"
          value={content}
          name="text"
          required
          placeholder="팁을 공유해주세요!"
        />
        <CustomModalInput
          type="text"
          value={content}
          name="text"
          required
          placeholder="팁을 공유해주세요!"
        />
        <CustomModalInput
          type="text"
          value={content}
          name="text"
          required
          placeholder="팁을 공유해주세요!"
        />
        <CustomModalBtn disabled={!content}>등록</CustomModalBtn>
      </CustomModalContent>
    </CustomModalContainer>
  );
}

const CustomModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

const CustomModalContent = styled.form`
  background-color: white;
  width: 400px;
  height: 500px;
  z-index: 100;
`;

const ImagePreviewContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CustomModalCloseBtn = styled.button`
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  float: right;
`;

const CustomModalInput = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;
`;

const CustomModalBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;
  cursor: pointer;
`;
export default CustomModal;
