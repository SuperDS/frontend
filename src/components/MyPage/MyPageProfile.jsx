/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function MyPageComment() {
  return (
    <div css={MyPageCommentWrapper}>
      <div>
        <h2>
          사회 일반 어떤 문화나 대상을 누리어 지니는 사람
          <br />
        </h2>
        <div>
          지역에서 문화 예술 활동을 하고 있습니다.
          <br />
          <br />
          -공간 운영 11:30 ~ 22:00, 월요일 휴관
          <br />
          -전시 [자연스러운] ~ 22.06.30
          <br />
          <br />
          학력
          <br />
          서울대학교 회화과 졸업
        </div>
      </div>
    </div>
  );
}

export default MyPageComment;

const MyPageCommentWrapper = css`
  height: 95%;
  width: 100%;
  margin: 20px;
  background-color: white;
  display: flex;
  /* border: 1px solid lightgray; */
  text-align: left;
  line-height: 160%;
  font-size: 20px;
`;
