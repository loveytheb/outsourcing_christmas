import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import MainPosts from "../Components/MainPosts";
import treeImg from "../assets/treeIcon.png";
import AddButton from "../Components/common/AddButton";
import CustomModal from "../Components/common/CustomModal";
import { useSelector } from "react-redux";

function Main() {
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.customModalSlice.isOpen);

  return (
    <>
      <Header />
      <MapBox>
        <SearchBox>
          <SearchInput type="text" placeholder="장소 검색" />
          <SearchButton>검색</SearchButton>
        </SearchBox>
        <Tmp>지도 영역</Tmp>
        <AddButtonContainer>
          <AddButton />
        </AddButtonContainer>
      </MapBox>

      <ReadingBox>
        <ReadingPost>
          <H2>🎄 추천 크리스마스 트리 스팟 🎄</H2>
          <MainPosts />
          <UpBtn
            src={treeImg}
            alt="to up btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </ReadingPost>
      </ReadingBox>
      {isOpen && <CustomModal />}
    </>
  );
}

export default Main;

const Tmp = styled.div`
  width: 100%;
  height: 600px;

  background-color: black;
  color: white;
  font-size: 50px;
`;

const MapBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const AddButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 30px;
`;

const SearchInput = styled.input`
  padding: 5px;
  width: 500px;
  height: 30px;
  margin-right: 10px;
  border: solid 1px #971717;
  border-radius: 12px;

  font-family: "Dovemayo_gothic";
`;

const SearchButton = styled.button`
  width: 50px;
  height: 30px;

  border: solid 1px #971717;

  border-radius: 12px;
  padding: 5px;

  background-color: #971717;

  font-family: "Dovemayo_gothic";
  color: white;
`;

const ReadingBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ReadingPost = styled.div`
  width: 900px;
  margin: 30px 0 150px 0;
`;

const H2 = styled.h2`
  margin-bottom: 20px;

  font-family: "Dovemayo_gothic";
  font-size: 30px;
  font-style: italic;
  text-shadow: 0.5px 0.5px white;
`;

const UpBtn = styled.img`
  width: 100px;
  height: 100px;

  margin: 50px 400px;
  cursor: pointer;
`;
