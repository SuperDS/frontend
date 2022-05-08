/** @jsxImportSource @emotion/react */
import { useCallback, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router';
import { HeaderWrapper } from '..';
import { logo } from '../../asset';
import { getApiEndpoint, logout } from '../../utils/util';
import { useMyInfo } from '../../hooks/myInfo';
import Login from '../Login';

function Header({ userMatch, pageUrl, pageUserName, pageType }) {
  const history = useHistory();
  const [popUpLogin, setPopUpLogin] = useState(false);

  const { loggedIn, myInfo } = useMyInfo();

  const feedbackBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() => history.push(`/feedback`)}
    >
      제안하기
    </button>
  );

  const myPageBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() => history.push(`/${myInfo.url}/`)}
    >
      내 페이지
    </button>
  );

  const logInBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() => setPopUpLogin(!popUpLogin)}
    >
      LOG IN
    </button>
  );

  const logOutBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() => logout()}
    >
      로그아웃
    </button>
  );

  const joinPageBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() =>
        history.push({
          pathname: '/join',
          state: {
            endpoint: `${getApiEndpoint()}/auth/join/local`,
            joinType: 'local',
            userEmail: null,
          },
        })
      }
    >
      회원가입
    </button>
  );

  const pageEditBtn = (
    <button
      type='button'
      css={[commonButtonStyle, confirmButtonWidth, marginRight40]}
      onClick={() => history.push(`/${pageUrl}/edit`)}
    >
      페이지 수정
    </button>
  );

  const logoBtn = (
    <a href='/main' css={[marginLeft17, height21]}>
      <img alt='img' src={logo} css={hieght100p} />
    </a>
  );

  const noBtn = <></>;

  const goToMyPage = useMemo(() => {
    if (myInfo) return myPageBtn;
    return null;
  }, [myInfo]);

  const loginPopupWindow = (
    <div css={[loginPosition]}>
      <div css={[loginWindowCSS]}>
        <Login />
      </div>
    </div>
  );

  // 히스토리 푸시
  const headerBtn = useCallback(
    (btn1, btn2, btn3, btn4, btn5, btn6) => {
      if (loggedIn)
        return (
          <>
            {btn1}
            {btn2}
            {btn3}
          </>
        );
      else
        return (
          <>
            {btn4}
            {btn5}
            {btn6}
          </>
        );
    },
    [loggedIn, popUpLogin]
  );

  const headerForm = useCallback(
    (btn1, btn2, btn3, btn4, btn5, btn6) => {
      return (
        <>
          <div css={[flex, flexBtw]}>
            {logoBtn}
            <div css={rightCloumn}>
              {headerBtn(btn1, btn2, btn3, btn4, btn5, btn6)}
            </div>
          </div>
          {popUpLogin ? loginPopupWindow : <></>}
        </>
      );
    },
    [loggedIn, popUpLogin]
  );

  const normalHeader = (
    <>
      <div css={[flex, flexBtw]}>
        {logoBtn}
        <div>
          {userMatch && (
            <>
              {logOutBtn}
              {pageEditBtn}
            </>
          )}
          {!userMatch && loggedIn && goToMyPage}
        </div>
      </div>
      <div css={[abosulteCenter, flex, height21]}>
        <p css={fontStyle}>{pageUserName}님의 온잇</p>
      </div>
    </>
  );

  function chooseFitHeader() {
    if (pageType === 'main') {
      return headerForm(
        feedbackBtn,
        myPageBtn,
        logOutBtn,
        feedbackBtn,
        logInBtn,
        joinPageBtn
      );
    } else if (pageType === 'normal') {
      return normalHeader;
    } else if (pageType === 'feedback') {
      return headerForm(
        logOutBtn,
        myPageBtn,
        noBtn,
        noBtn,
        logInBtn,
        joinPageBtn
      );
    } else {
      return <div>정의되지 않은 타입입니다.</div>;
    }
  }

  return <HeaderWrapper>{chooseFitHeader()}</HeaderWrapper>;
}

const height21 = css`
  height: 21px;
`;

const hieght100p = css`
  height: 100%;
`;

const fontStyle = css`
  font-size: 16.5px;
  font-weight: 500;
  line-height: 26px;
  height: 26px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
`;

const marginLeft17 = css`
  margin-left: 25px;
`;

const marginRight40 = css`
  margin-right: 40px;
`;

const flex = css`
  display: flex;
  height: 100%;
`;

const flexBtw = css`
  justify-content: space-between;
  align-items: center;
`;

const abosulteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const confirmButtonWidth = css`
  width: fit-content;
`;

const commonButtonStyle = css`
  display: inline-block;
  text-align: justify;
  height: 35px;
  border-radius: 17px;
  border: none;
  font-size: 13.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000;
  padding: 0px;
  &:hover {
    color: #ef6408;
  }
`;

const rightCloumn = css`
  display: flex;
  flex-direction: row;
`;

const loginWindowCSS = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -15%);
  width: 360px;
  height: 500px;
  background-color: #fff;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
`;

const loginPosition = css`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Header;
