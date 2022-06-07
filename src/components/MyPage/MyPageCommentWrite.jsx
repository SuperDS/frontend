/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function MyPageCommentWrite() {
  return (
    <div css={MyPageCommentWrapper}>
      <div css={MyPageCommentAdd}>
        <h2>작가에게 하고싶은 말을 남기세요...</h2>
      </div>
      <div css={MyPageCommentPost}>
        <h1>POST</h1>
      </div>
    </div>
  );
}

export default MyPageCommentWrite;

const MyPageCommentWrapper = css`
  height: 75px;
  width: 95%;
  margin: 20px;
  background-color: white;
  display: flex;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  text-indent: 10px;
  align-items: center;
  text-align: center;
`;

const MyPageCommentAdd = css`
  color: gray;
  display: flex;
  /* border: 1px solid lightgray; */
  height: 85%;
  width: 90%;
  text-align: center;
`;

const MyPageCommentPost = css`
  color: gray;
  width: 10%;
  /* border: 1px solid lightgray; */
  display: flex;
`;
