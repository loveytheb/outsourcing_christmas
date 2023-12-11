import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Posts from "../Components/Posts";
import treeImg from "../assets/treeIcon.png";
import TipModal from "../Components/common/TipModal";
import { showCustomModal } from "../redux/modules/customModalSlice";
import { setModalOpen, setModalType } from "../redux/modules/modalState";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { __isLogin } from "../redux/modules/authSlice";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mainPost, setMainPost] = useState(null);
  const userInfo = useSelector((state) => state.authSlice);
  const userName = userInfo.userId;
  const isLogined = userInfo.isLogined;
  console.log(useSelector((state) => state.authSlice));

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "places", id);
      const docsnap = await getDoc(docRef);
      setMainPost(docsnap.data());
    };
    fetchPost();
  }, [id]);

  console.log(mainPost);
  const isOpen = useSelector((state) => state.customModalSlice.isOpen);

  if (!mainPost) return <div>Loading...</div>;

  const handleAddPostBtn = () => {
    if (!isLogined) {
      alert("로그인이 필요합니다. 로그인부터 해주세요.");
      dispatch(setModalOpen(true));
      dispatch(setModalType("login"));
      dispatch(showCustomModal(false));
      navigate("/");
    } else {
      dispatch(showCustomModal(true));
    }
  };

  return (
    <>
      <Div>
        <Container>
          <MainImg src={mainPost.imgUrl} alt="이미지 자리" />
          <HomeBtn onClick={() => navigate("/")}>←</HomeBtn>
          <MainInfo>
            <Visitor>{mainPost.founderId}님이 처음 발견한 공간이에요!</Visitor>
            <PlaceName>{mainPost.placeName}</PlaceName>
            <PlaceInfo>📌 {mainPost.placeAddr}</PlaceInfo>
            <PlaceInfo>📅 {mainPost.opDate}</PlaceInfo>
            <PlaceInfo>🕒 {mainPost.opHour}</PlaceInfo>
            <PlaceTips>" {mainPost.tips} "</PlaceTips>
            <AddPostBtn onClick={handleAddPostBtn}>
              {userName
                ? `${userName}님의 방문 후기를 추가해보세요!`
                : "로그인 후 방문 후기를 추가해보세요!"}
            </AddPostBtn>
          </MainInfo>
          {mainPost.posts.length !== 0 ? (
            <>
              <div>
                {mainPost.posts.map((post, idx) => (
                  <Posts key={idx} post={post} />
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
