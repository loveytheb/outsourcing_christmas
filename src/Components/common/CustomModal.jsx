import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showCustomModal } from "../../redux/modules/customModalSlice";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";

function CustomModal() {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    opDate: "",
    opHour: "",
    placeAddr: "",
    placeName: "",
    tips: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

  const uploadDataToFirebase = async () => {
    try {
      const storageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);

      const imageUrl = await getDownloadURL(storageRef);
      const placesCollectionRef = collection(db, "places");
      const newPlace = {
        imgUrl: imageUrl,
        opDate: formData.opDate,
        opHour: formData.opHour,
        placeAddr: formData.placeAddr,
        placeName: formData.placeName,
        tips: formData.tips,
        posts: [],
      };

      await addDoc(placesCollectionRef, newPlace);
      showCustomModal(false);
    } catch (error) {
      console.error("에러", error);
    }
  };

  const handleUpload = () => {
    uploadDataToFirebase();
    dispatch(showCustomModal(false));
  };

  const handleCloseModal = () => {
    dispatch(showCustomModal(false));
  };

  return (
    <CustomModalContainer>
      <CustomModalContent>
        {imagePreview && (
          <ImagePreviewContainer>
            <img src={imagePreview} alt="Preview" />
          </ImagePreviewContainer>
        )}
        <CustomModalInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <CustomModalInput
          type="text"
          value={formData.placeName}
          onChange={handleChange}
          name="placeName"
          required
          placeholder="핫스팟의 이름을 알려주세요!"
        />
        <CustomModalInput
          type="text"
          value={formData.placeAddr}
          onChange={handleChange}
          name="placeAddr"
          required
          placeholder="핫스팟의 위치를 알려주세요!"
        />
        <CustomModalInput
          type="text"
          value={formData.opDate}
          onChange={handleChange}
          name="opDate"
          required
          placeholder="핫스팟은 언제까지 유지되나요?"
        />
        <CustomModalInput
          type="text"
          value={formData.opHour}
          onChange={handleChange}
          name="opHour"
          required
          placeholder="핫스팟은 몇시까지 구경할 수 있나요?"
        />
        <CustomModalInput
          type="text"
          value={formData.tips}
          onChange={handleChange}
          name="tips"
          required
          placeholder="핫스팟을 방문할 때 팁을 알려주세요!"
        />

        <ButtonContainer>
          <CustomModalBtn onClick={handleUpload}>등록</CustomModalBtn>
          <CustomModalBtn onClick={handleCloseModal}>닫기</CustomModalBtn>
        </ButtonContainer>
      </CustomModalContent>
    </CustomModalContainer>
  );
}

const CustomModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 600;
`;

const CustomModalContent = styled.form`
  background-color: white;
  width: 400px;
  height: 550px;
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

const ButtonContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 75px;
  gap: 5px;
`;

const CustomModalBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 50%;
  height: 40px;
  border: 1px solid gainsboro;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default CustomModal;
