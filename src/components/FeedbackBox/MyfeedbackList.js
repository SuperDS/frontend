/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeedbackContentsBox from './FeedbackContentsBox';

function MyfeedbackList({ myFeedbacks, myInfo }) {
  // eslint-disable-next-line
  let prevColorIndex = null;

  console.log(myFeedbacks);
  return (
    <div css={[ContentBox]}>
      <p css={[nicknameBox]}>{myInfo.nickname}님의 의견</p>
      <div css={[listBox]}>
        {myFeedbacks ? (
          myFeedbacks.map((Feedback) => {
            return (
              <div key={Feedback.feedback_seq} css={listItem}>
                <FeedbackContentsBox
                  Feedback={Feedback}
                  prevColorIndex={prevColorIndex}
                  isMinePublic={Feedback.public}
                />
              </div>
            );
          })
        ) : (
          <p>{myInfo.nickname}님의 의견을 불러오는 중입니다.</p>
        )}
      </div>
    </div>
  );
}

const ContentBox = css`
  display: flex;
  margin: 20px 20px 17.25px;
  box-sizing: border-box;
  flex-direction: column;
`;

const nicknameBox = css`
  margin-bottom: 9.86px;
  font-size: 14.8px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const listBox = css`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15.4px;
  width: 100%;
  min-height: 150px;
  padding-left: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
`;

const listItem = css`
  display: flex;
  align-items: stretch;
  margin: 14.784px 0;
  height: 135.52px;
  flex-basis: calc(33.3333% - 20px);
  width: 100%;
  overflow: hidden;
`;

export default MyfeedbackList;
