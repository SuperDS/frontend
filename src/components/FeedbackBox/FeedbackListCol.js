/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function FeedbackListCol({ seq, list }) {
  return (
    <div key={seq} css={listBox}>
      <ul css={AbsolUlCss} />
      <ul css={ulCss}>
        {list.length ? (
          list.map((Feedback) => {
            return (
              <li key={Feedback.feedback_seq} css={listItem}>
                <div css={[FeedbackBoxCss, randomColor()]}>
                  <div css={orderWrapper}>
                    <p css={orderFont}>{Feedback.feedback_seq}번째 바람</p>
                  </div>
                  <p css={contentsWrapper}>{Feedback.content}</p>
                </div>
              </li>
            );
          })
        ) : (
          <li css={listItem}>
            <div css={[FeedbackBoxCss, randomColor()]}>
              <div css={orderWrapper}>
                <p css={orderFont}>온잇의 바람</p>
              </div>
              <p css={contentsWrapper}>
                온잇을 사용하며 불편했던 경험을 알려주세요!
              </p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
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

const colors = [blueColor, yellowColor, blackColor, orangeColor, greenColor];

let prevColorIndex = null;

function randomColor() {
  let index = prevColorIndex;
  while (index === prevColorIndex) {
    index = Math.floor(Math.random() * 5);
  }
  prevColorIndex = index;
  return colors[index];
}

const listBox = css`
  position: relative;
  display: inline-block;
  flex-grow: 1;
  flex-basis: calc(33.3333% - 20px);
`;

const AbsolUlCss = css`
  position: absolute;
  top: 20px;
  right: 20px;
  left: 20px;
  padding: 0px;
  margin: 0px;
`;

const ulCss = css`
  box-sizing: border-box;
  margin: 0px;
  list-style: none;
`;
const listItem = css`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
  padding-bottom: 20px;
`;

const FeedbackBoxCss = css`
  padding: 17px 20px;
  word-break: break-all;
  border-bottom-right-radius: 40px;
`;

const orderWrapper = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  margin-bottom: 10px;
`;

const orderFont = css`
  display: inline-block;
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.6px;
`;

const contentsWrapper = css`
  display: block;
  margin: 11px 0px 0px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
`;

export default FeedbackListCol;
