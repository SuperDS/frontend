/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeedbackContentsBox from './FeedbackContentsBox';

function FeedbackListCol({ seq, list, needFeedbackInfo }) {
  // eslint-disable-next-line
  let prevColorIndex = null;

  return (
    <div key={seq} css={listBox}>
      <ul css={AbsolUlCss} />
      <ul css={ulCss}>
        {list.length !== 0 &&
          list.map((Feedback) => {
            return (
              <li key={Feedback.feedback_seq} css={listItem}>
                <FeedbackContentsBox
                  Feedback={Feedback}
                  prevColorIndex={prevColorIndex}
                  needFeedbackInfo={needFeedbackInfo}
                />
              </li>
            );
          })}
        {needFeedbackInfo === 1 && (
          <li css={listItem}>
            <FeedbackContentsBox prevColorIndex={prevColorIndex} />
          </li>
        )}
      </ul>
    </div>
  );
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

export default FeedbackListCol;
