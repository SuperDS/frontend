/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function MyPageComment() {
  return (
    <div css={MyPageCommentWrapper}>
      <div css={MypageCommentProfileWrapper}>
        <div css={MypageCommentProfile} />
      </div>
      <div css={MyPageCommentCotentsWrapper}>
        <div>
          <div css={MyPageCommentCotentsName}>dongslee</div>
          <div css={MyPageCommentCotents}>
            안녕하세요! 작품 잘 보고 있습니다.
          </div>
        </div>
      </div>
      <div css={MyPageCommentCotentsName}>1일 답글달기 ♡ 15</div>
    </div>
  );
}

export default MyPageComment;

const MyPageCommentWrapper = css`
  height: 120px;
  width: 95%;
  margin: 20px;
  background-color: white;
  display: flex;
  /* border: 1px solid lightgray; */
  text-align: left;
  align-items: center;
`;

const MypageCommentProfileWrapper = css`
  margin: 10px;
  background-color: lightgray;

  justify-content: center;
  border-radius: 50%;
  display: flex;
`;

const MypageCommentProfile = css`
  width: 70px;
  height: 70px;
  background-color: lightgray;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  display: flex;
`;

const MyPageCommentCotentsWrapper = css`
  width: 70%;
  text-align: left;
  /* border: 1px solid lightgray; */
  display: flex;
`;

const MyPageCommentCotentsName = css`
  font-size: 13px;
  padding: 5px;
  color: gray;
  font-weight: bold;
`;

const MyPageCommentCotents = css`
  font-size: 17px;
  padding: 5px;
  font-weight: bold;
`;
