/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router';
import {
  NormalWrapper,
  NormalModeGrid,
  PageWrapper,
  Header,
} from '../components';
import {
  getApiEndpoint,
  isError,
  urlOwnerNotFound,
  urlMatched,
} from '../utils/util';
import { useGetUrl } from '../hooks/util';
import { useMyInfo } from '../hooks/myInfo';
import { useSaveWidgetsFromServer } from '../hooks/widget';
import { useRequest } from '../hooks/useRequest';
import { breakpoints, FlexCenter, FlexColCenter } from '../styles/GlobalStyles';
import { TYPE_IMAGE, TYPE_VIDEO } from '../utils/constantValue';
import VideoBox from '../components/Widgets/Video/VideoBox';

function getOrderedWidgetList(arr) {
  if (origin === null) {
    return null;
  }
  arr.sort((a, b) => {
    if (a.pos_y === b.pos_y) {
      return a.pos_x > b.pos_x ? 1 : -1;
    }
    return a.pos_y > b.pos_y ? 1 : -1;
  });
  return arr;
}

function NormalModePage() {
  const pageUrl = useGetUrl();
  const [userSeq, setUserSeq] = useState(null);
  const [userMatched, setUserMatched] = useState(null);
  const [nickname, setNickname] = useState(null);
  const history = useHistory();
  const { myInfo } = useMyInfo();
  const { res: pageUserRes, request: requestPageUserInfo } = useRequest({
    endpoint: `${getApiEndpoint()}/url/${pageUrl}/user`,
    method: 'get',
  });

  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMode, setMobileMode] = useState(false);

  // width에 따라서 모바일버전 on, off
  useEffect(() => {
    if (width) {
      if (width <= breakpoints[0]) {
        setMobileMode(true);
      } else if (width > breakpoints[0]) {
        setMobileMode(false);
      }
    }
    return () => setMobileMode(false);
  }, [width]);

  // resize 이벤트 받아서 width 변경
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  // 인스타 그램용 사이즈 조절
  useEffect(() => {
    if (window.screen.width < window.innerWidth) {
      setWidth(window.screen.width);
    }
  }, []);

  // 내 페이지인지 남의 페이지인지 확인 로직
  useEffect(() => {
    // 로그인 유무
    if (pageUrl) {
      // 내 페이지일 경우
      if (myInfo && urlMatched(myInfo.url, pageUrl)) {
        setUserMatched(true);
        setUserSeq(myInfo.user_seq);
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
      setUserSeq(null);
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

  // 위젯 데이터 받아올 준비
  const { res: widgetRes, request: requestWidgetData } = useRequest({
    endpoint: `${getApiEndpoint()}/user/${userSeq}/widgets`,
    method: 'get',
  });

  // 유저 시퀀스가 있으면 -> 해당 유저의 위젯 데이터 받아오기
  useEffect(() => {
    if (userSeq) {
      requestWidgetData();
    }
  }, [userSeq, requestWidgetData]);

  const { save } = useSaveWidgetsFromServer();

  // 받아온 위젯 데이터 리덕스에 저장 (-> 이건 고민을 좀 해봐야할 듯. 남의 페이지 들어갔을 경우는 저장할 필요 없음.)
  useEffect(() => {
    if (widgetRes) {
      save(widgetRes.data.widget_list);
    }
  }, [widgetRes]);

  // 모바일 버전용 위젯 div
  const ThumbnailImage = useMemo(() => {
    if (widgetRes) {
      const { widget_list } = widgetRes.data;
      const filtered = widget_list.filter(
        (element) => element.widget_data !== {} && element.widget_data.thumbnail
      );
      const ordered = getOrderedWidgetList(filtered);
      if (ordered) {
        return ordered.map((element) => {
          if (element.widget_type === TYPE_IMAGE) {
            return (
              <img
                key={element.widget_code}
                src={element.widget_data.thumbnail}
                alt='thumbnail'
                css={ThumbnailStyle}
              />
            );
          } else if (element.widget_type === TYPE_VIDEO) {
            return (
              <div key={element.widget_code} css={ThumbnailStyle}>
                <VideoBox element={element} mode='normal' />
              </div>
            );
          } else {
            return <></>;
          }
        });
      }
    }
    return <></>;
  }, [widgetRes]);

  return (
    <PageWrapper>
      {mobileMode && <div css={ThumbnailImagesContainer}>{ThumbnailImage}</div>}
      {!mobileMode && (
        <NormalWrapper>
          <Header
            userMatch={userMatched}
            pageUrl={pageUrl}
            pageUserName={nickname}
            pageType='normal'
          />
          <NormalModeGrid />
        </NormalWrapper>
      )}
    </PageWrapper>
  );
}

export default NormalModePage;

const ThumbnailImagesContainer = css`
  max-width: 100%;
  height: 100%;
  ${FlexColCenter}
  padding: 48px 40px 0 40px;
`;
const ThumbnailStyle = css`
  ${FlexCenter}
  max-width: 100%;
  margin-bottom: 16px;
  width: 348px;
  height: 260px;
  object-fit: cover;
`;
