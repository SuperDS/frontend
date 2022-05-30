/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function MyPage() {
  return (
    <div>
      Header
      <div css={MyPageWrapper}>
        <div css={MyPageAZone}>
          <div css={ProfileAZone}> profile</div>
          <br /> 이동섭
          <br /> Today 122 Following 64 Follower 1982
          <br />
          일러스트레이션 포토그래피 현대미술
        </div>
        <div css={MyPageBZone}>
          b zone
          <div>
            <div css={SiteViewBZone} />
            <div css={SiteViewBZone} />
            <div css={SiteViewBZone} />
            <div css={SiteViewBZone} />
          </div>
        </div>
        <div css={MyPageCZone}>c zone</div>
        <div css={MyPageDZone}>d zone</div>
      </div>
    </div>
  );
}

export default MyPage;

const MyPageWrapper = css`
  text-align: center;
`;

const MyPageAZone = css`
  width: 1470px;
  height: 320px;
  background-color: lightsalmon;
  display: inline-block;
`;

const ProfileAZone = css`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`;

const SiteViewBZone = css`
  width: 329px;
  height: 234px;
  border-radius: 20px 20px 20px 20px;
  background-color: white;
  display: inline-block;
  margin: 10px;
`;

const MyPageBZone = css`
  width: 1470px;
  height: 360px;
  background-color: lightblue;
  display: inline-block;
`;

const MyPageCZone = css`
  width: 735px;
  height: 1500px;
  background-color: lightseagreen;
  display: inline-block;
`;

const MyPageDZone = css`
  width: 735px;
  height: 1500px;
  background-color: lightyellow;
  display: inline-block;
`;
