import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

function MainPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postQuery = query(collection(db, "places"));
      const postSnapshot = await getDocs(postQuery);
      const postList = postSnapshot.docs.map((doc, idx) => ({
        ...doc.data(),
        postId: doc.id,
      }));
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <>
      {posts.map((post, idx) => {
        const img = new Image();
        img.src = post.imgUrl;
        return (
          <>
            <MainInfo key={idx}>
              <Div>
                <div>
                  <PlaceName>{post.placeName}</PlaceName>
                  <PlaceInfo>{post.placeAddr}</PlaceInfo>

                  <PlaceTips>{post.tips}</PlaceTips>
                  <ToDetailBtn
                    onClick={() => navigate(`/detail/${post.postId}`)}
                  >
                    더 자세한 방문후기 보러가기
                  </ToDetailBtn>
                </div>
                <Img src={post.imgUrl} alt="" $img={img} />
              </Div>
            </MainInfo>
          </>
        );
      })}
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
  ${(props) => {
    let img = props.$img;
    if (img.width > img.height) {
      return css`
        width: 400px;
      `;
    }
  }}
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`;
