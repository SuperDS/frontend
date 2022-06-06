/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function FeedbackContentsBox({ colorIndex, Feedback, isMinePublic }) {
  const colors = [blueColor, yellowColor, blackColor, orangeColor, greenColor];

  return (
    <div css={[FeedbackBoxCss, colors[colorIndex]]}>
      {Feedback ? (
        <>
          <div
            css={[orderWrapper, isMinePublic !== undefined && spaceBetwween]}
          >
            <p css={orderFont}>{Feedback.feedback_seq}번째 바람</p>
            {isMinePublic === 'y' && (
              <p css={orderFont}>좋은 의견 감사합니다!</p>
            )}
            {isMinePublic === 'n' && <p css={orderFont}>검토중인 의견입니다</p>}
          </div>
          <p css={contentsWrapper}>{Feedback.content}</p>
        </>
      ) : (
        <>
          <div css={orderWrapper}>
            <p css={orderFont}>온잇의 바람</p>
          </div>
          <p css={contentsWrapper}>
            온잇을 사용하며 불편했던 경험을 알려주세요!
          </p>
        </>
      )}
    </div>
  );
}

export function randomColor(prevColorIndex) {
  let newColorIndex = prevColorIndex;
  while (newColorIndex === prevColorIndex) {
    newColorIndex = Math.floor(Math.random() * 5);
  }
  return newColorIndex;
}

const blueColor = css`
  background-color: #507fe9;
  color: black;
`;
const yellowColor = css`
  background-color: #ffd376;
  color: black;
`;
const blackColor = css`
  background-color: #2e2e2e;
  color: white;
`;
const orangeColor = css`
  background-color: #ed754a;
  color: black;
`;
const greenColor = css`
  background-color: #84bfa4;
  color: black;
`;

const FeedbackBoxCss = css`
  width: 100%;
  padding: 14.78px 17.25px 20.328px;
  word-break: break-all;
  border-bottom-right-radius: 15px;
  box-sizing: border-box;
`;

const orderWrapper = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  margin-bottom: 9.8px;
`;

const spaceBetwween = css`
  justify-content: space-between;
`;

const orderFont = css`
  display: inline-block;
  padding: 0px;
  margin: 0px;
  font-size: 12.94px;
  font-weight: 700;
  line-height: 1.4503;
  letter-spacing: 0.6px;
`;

const contentsWrapper = css`
  display: -webkit-box;
  margin: 0px 0px 0px;
  font-size: 12.32px;
  font-weight: 500;
  line-height: 1.4;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  overflow: hidden;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
