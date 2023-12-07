import React from "react";
import styled, { css } from "styled-components";

function Posts(props) {
  const { post } = props;
  const img = new Image();
  img.src = post.imgUrl;
  return (
    <>
      <Post>
        <Visitor>user2 님의 방문 후기</Visitor>
        <Content $img={img}>
          <Tips>" {post.tips} "</Tips>
          <Img $img={img} src={post.imgUrl} alt="" />
        </Content>
      </Post>
    </>
  );
}

export default Posts;

const Post = styled.div`
  border: dashed 5px #195e1d;

  border-radius: 20px;
  padding: 30px 50px;

  background-color: white;

  margin: 15px 0;
`;

const Visitor = styled.p`
  font-size: 16px;
  color: gray;
  font-family: "Dovemayo_gothic", sans-serif;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  ${(props) => {
    const img = props.$img;
    if (img.height > img.width) {
      return css`
        height: 300px;
        object-fit: cover;
        border-radius: 15px;
      `;
    }
    return css`
      height: 300px;
      object-fit: cover;
      border-radius: 15px;
    `;
  }}
`;

const Tips = styled.p`
  font-family: "Dovemayo_gothic", sans-serif;
  font-size: 18px;

  margin: auto 30px auto 0;
  line-height: 2;
`;
