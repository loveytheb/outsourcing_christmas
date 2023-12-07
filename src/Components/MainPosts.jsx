import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MainPosts() {
  const navigate = useNavigate();

  return (
    <>
      <MainInfo>
        <Div>
          <div>
            <PlaceName>신세계 백화점 본점</PlaceName>
            <PlaceInfo>서울 중구 소공로 63</PlaceInfo>

            <PlaceTips>
              "백화점 건너편도로에서 보는게 가장 좋습니다. 회현지하쇼핑센터
              1번출구 쪽을 추천해요."
            </PlaceTips>
            <ToDetailBtn onClick={() => navigate("/detail/1")}>
              더 자세한 방문후기 보러가기
            </ToDetailBtn>
          </div>
          <Img
            src="https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2022/12/Sub-16.png"
            alt=""
          />
        </Div>
      </MainInfo>
      <MainInfo>
        <Div>
          <div>
            <PlaceName>더 현대 서울 H 빌리지</PlaceName>
            <PlaceInfo>서울 영등포구 여의대로 108</PlaceInfo>

            <PlaceTips>
              "어렵게 예약해서 다녀왔어요. 포토스팟에서 사진을 찍으려면 줄을
              서야해서 아쉬웠지만 인생샷 건져서 너무 좋았습니다."
            </PlaceTips>
            <ToDetailBtn onClick={() => navigate("/detail/2")}>
              더 자세한 방문후기 보러가기
            </ToDetailBtn>
          </div>
          <Img
            src="https://cdn.newsquest.co.kr/news/photo/202311/213961_107027_326.jpg"
            alt=""
          />
        </Div>
      </MainInfo>
    </>
  );
}

export default MainPosts;

const MainInfo = styled.div`
  border: solid 5px #195e1d;
  border-radius: 20px;
  padding: 30px 50px;
  margin-bottom: 20px;
  background-color: white;
`;

const PlaceName = styled.p`
  font-size: 24px;
  font-family: "Dovemayo_gothic", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const PlaceInfo = styled.p`
  font-family: "Dovemayo_gothic", sans-serif;

  margin: 5px 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceTips = styled.p`
  font-family: "Dovemayo_gothic", sans-serif;
  font-style: italic;
  font-size: 18px;
  margin: 0 30px 20px 0;
  line-height: 2;
`;

const ToDetailBtn = styled.button`
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

const Img = styled.img`
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`;
