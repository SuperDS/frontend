/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useRequestAuth } from '../../hooks/useRequestAuth';
import { getApiEndpoint, isError, urlOwnerNotFound } from '../../utils/util';
import FeedbackListCol from './FeedbackListCol';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState(null);
  const [listDiv, setListdiv] = useState(<div />);
  const listDivOne = [];
  const listDivTwo = [];
  const listDivThree = [];

  // 데이터 받아오는 코드 추가 예정
  useEffect(() => {
    requestFeedbacks();
  }, []);

  const { res: feedbacksRes, request: requestFeedbacks } = useRequestAuth({
    endpoint: `${getApiEndpoint()}/feedback`,
    method: 'get',
  });

  useEffect(() => {
    if (feedbacksRes && feedbacksRes.data) {
      const { code, data, message } = feedbacksRes.data;
      if (isError(code) && urlOwnerNotFound(message)) {
        alert('정보를 가져올 수 없습니다.');
      } else if (isError(code)) {
        alert('데이터 베이스 에러입니다.');
      }
      if (data) {
        setFeedbacks(data);
      }
    }
  }, [feedbacksRes]);

  useEffect(() => {
    if (feedbacks !== null) {
      shuffleArray(feedbacks);
      feedbacks.forEach((Feedback, index) => {
        if (index % 3 === 0) {
          listDivOne.push(feedbacks[index]);
        } else if (index % 3 === 1) {
          listDivTwo.push(feedbacks[index]);
        } else {
          listDivThree.push(feedbacks[index]);
        }
      });
      if (listDivOne.length !== 0) {
        setListdiv(divideList());
      }
    }
  }, [feedbacks]);

  function divideList() {
    return [listDivOne, listDivTwo, listDivThree].map((list, index) => {
      if (list.length) {
        return <FeedbackListCol key={list[0].feedback_seq} list={list} />;
      }
      const uniqKey = index * 1000;
      return <FeedbackListCol key={uniqKey} list={[]} />;
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
  gap: 20px;
  box-sizing: border-box;
`;

export default FeedbackList;
