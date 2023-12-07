import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Posts from "../Components/Posts";
import treeImg from "../assets/treeIcon.png";

import dummy from "../dummy.json";

function Detail() {
  const { id } = useParams();
  //디테일 페이지 장소에 해당하는 데이터 가져오기
  const placeData = dummy.filter((e) => e.placeId == id);
  const {
    FounderId,
    placeName,
    placeAddr,
    opDate,
    opHour,
    tips,
    imgUrl,
    posts,
  } = placeData[0];
  const navigate = useNavigate();
  console.log(posts === undefined);

  return (
    <>
      <Div>
        <Container>
          <MainImg src={imgUrl} alt="이미지 자리" />
          <HomeBtn onClick={() => navigate("/")}>←</HomeBtn>
          <MainInfo>
            <Visitor>{FounderId}님이 처음 발견한 공간이에요!</Visitor>
            <PlaceName>{placeName}</PlaceName>
            <PlaceInfo>📌 {placeAddr}</PlaceInfo>
            <PlaceInfo>📅 {opDate}</PlaceInfo>
            <PlaceInfo>🕒 {opHour}</PlaceInfo>
            <PlaceTips>" {tips} "</PlaceTips>
            <AddPostBtn>user999님의 방문 후기를 추가해보세요!</AddPostBtn>
          </MainInfo>
          {posts !== undefined ? (
            <>
              <div>
                {posts.map((post) => (
                  <Posts post={post} />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          <UpBtn
            src={treeImg}
            alt="to up btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </Container>
      </Div>
    </>
  );
}

export default Detail;

const HomeBtn = styled.button`
  position: absolute;
  top: 30px;
  left: 430px;

  padding: 10px;

  font-family: "Dovemayo_gothic", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #cc3939;
  text-shadow: 2px 2px #230606;

  background-color: transparent;

  cursor: pointer;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 900px;
  margin-bottom: 150px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  margin: 20px 0 5px 0;

  border-radius: 20px;
`;

const MainInfo = styled.div`
  border: solid 5px #195e1d;
  border-radius: 20px;
  padding: 30px 50px;
  background-color: white;
`;

const Visitor = styled.p`
  font-size: 16px;
  color: gray;
  font-family: "Dovemayo_gothic", sans-serif;
  margin-bottom: 10px;
`;

const PlaceName = styled.p`
  font-size: 32px;
  font-family: "Dovemayo_gothic", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PlaceInfo = styled.p`
  font-family: "Dovemayo_gothic", sans-serif;

  margin: 5px 0;
`;

const PlaceTips = styled.p`
  font-family: "Dovemayo_gothic", sans-serif;
  font-style: italic;
  font-size: 18px;

  margin: 20px 30px 20px 0%;
  line-height: 2;
`;

const AddPostBtn = styled.button`
  font-family: "Dovemayo_gothic", sans-serif;
  font-style: italic;
  font-size: 16px;

  text-decoration: underline;
  color: darkgray;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #b81c1c;
  }
`;

const UpBtn = styled.img`
  width: 100px;
  height: 100px;

  margin: 50px 400px;
  cursor: pointer;
`;
