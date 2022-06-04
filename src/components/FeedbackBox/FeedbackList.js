/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import FeedbackListCol from './FeedbackListCol';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function FeedbackList({ feedbacks }) {
  const [listDiv, setListdiv] = useState(<div />);
  const listDivOne = [];
  const listDivTwo = [];
  const listDivThree = [];

  useEffect(() => {
    if (feedbacks !== null && feedbacks !== undefined) {
      shuffleArray(feedbacks);
      feedbacks.forEach((noData, index) => {
        if (index % 3 === 0) {
          listDivOne.push(feedbacks[index]);
        } else if (index % 3 === 1) {
          listDivTwo.push(feedbacks[index]);
        } else {
          listDivThree.push(feedbacks[index]);
        }
      });
    }
    setListdiv(divideList());
  }, [feedbacks]);

  function divideList() {
    let needFeedbackInfo = 0;
    return [listDivOne, listDivTwo, listDivThree].map((list, index) => {
      if (list.length) {
        return <FeedbackListCol key={list[0].feedback_seq} list={list} />;
      } else needFeedbackInfo += 1;
      const uniqKey = index * 10;
      return (
        <FeedbackListCol
          key={uniqKey}
          list={[]}
          needFeedbackInfo={needFeedbackInfo}
        />
      );
    });
  }

  return <div css={ContentBox}>{listDiv}</div>;
}

const ContentBox = css`
  width: 100%;
  margin: 0 0 -20px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12.32px;
  box-sizing: border-box;
`;

export default FeedbackList;
