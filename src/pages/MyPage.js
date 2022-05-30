/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Header } from '../components';
import AddPagePopUp from '../components/MyPage/AddPagePopUp';
import PageBlock from '../components/MyPage/PageBlock';
import { useMyInfo } from '../hooks/myInfo';
import { useRequest } from '../hooks/useRequest';
import { useGetUrl } from '../hooks/util';
import {
  getApiEndpoint,
  isError,
  urlMatched,
  urlOwnerNotFound,
} from '../utils/util';

function MyPage() {
  const { myInfo } = useMyInfo();
  const history = useHistory();
  const pageUrl = useGetUrl();
  const [userSeq, setUserSeq] = useState(null);
  const [userMatched, setUserMatched] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [popUp, setPopUp] = useState(false);

  const { res: pageUserRes, request: requestPageUserInfo } = useRequest({
    endpoint: `${getApiEndpoint()}/url/${pageUrl}/user`,
    method: 'get',
  });
  // 나중에 필요할거라서, 일단 쓰는 중
  console.log(userSeq);
  // 내 페이지인지 남의 페이지인지 확인 로직
  useEffect(() => {
    // 로그인 유무
    if (pageUrl) {
      // 내 페이지일 경우
      if (myInfo && urlMatched(myInfo.url, pageUrl)) {
        setUserMatched(true);
        setNickname(myInfo.nickname);
        // 다른 사람 페이지일 경우
      } else {
        setUserMatched(false);
        // 해당 페이지 정보 가져옴 -> pageUserRes에 변화
        requestPageUserInfo();
      }
    }
    return () => {
      setUserMatched(null);
      setNickname(null);
    };
  }, [pageUrl, myInfo]);

  // pageUserRes에 변화가 있으면 -> 데이터를 받아서 userseq, nickname 세팅.
  useEffect(() => {
    if (pageUserRes && pageUserRes.data) {
      const { code, data, message } = pageUserRes.data;
      if (isError(code) && urlOwnerNotFound(message)) {
        alert('페이지를 찾을 수 없습니다.');
        history.goBack();
      } else if (isError(code)) {
        alert('데이터 베이스 에러입니다.');
      }
      if (data) {
        setUserSeq(data.user_seq);
        setNickname(data.nickname);
      }
    }
    return () => {
      setUserSeq(null);
      setNickname(null);
    };
  }, [pageUserRes]);

  return (
    <div css={[positionRelative]}>
      <Header
        userMatch={userMatched}
        pageUrl={pageUrl}
        pageUserName={nickname}
        pageType='normal'
      />
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
          <div css={[overFlowHidden]}>
            <PageBlock addBlock setPopUp={setPopUp} popUp={popUp} />
            <PageBlock />
            <PageBlock />
            <PageBlock />
          </div>
        </div>
        <div css={MyPageCZone}>c zone</div>
        <div css={MyPageDZone}>d zone</div>
      </div>
      {popUp && <AddPagePopUp setPopUp={setPopUp} popUp={popUp} />}
    </div>
  );
}

export default MyPage;

const positionRelative = css`
  position: relative;
`;

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

const overFlowHidden = css`
  overflow: hidden;
`;
