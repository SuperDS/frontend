/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory } from 'react-router';
import { logo } from '../../asset/index';
import {
  BUTTON_COLOR,
  FlexColSpaceAroundStart,
  InitButtonStyle,
  mq,
} from '../../styles/GlobalStyles';

function LeftBox() {
  const history = useHistory();

  return (
    <div css={[container, containerMQ()]}>
      <div css={[PageInfo]}>
        <button
          type='button'
          css={backButton}
          onClick={() => history.push('/main')}
        >
          &lt; 첫화면으로 돌아가기
        </button>
        <span css={[PageGuideMessage, PageGuideMessageMQ()]}>
          새 계정 생성을 위한 <wbr />
          정보를 입력해
          <wbr />
          주세요.
        </span>
      </div>
      <div>
        <img src={logo} width='20%' />
      </div>
    </div>
  );
}

export default LeftBox;

const container = css`
  box-sizing: border-box;
  width: 39.1%;
  height: inherit;
`;

export const containerMQ = () => {
  const normal = '39.1%';
  const narrow = '39.1%';
  const normalPadding = '9.6% 0 0 11%';
  const narrowPadding = '9.6% 0 0 5.5%';
  return mq({
    width: [narrow, narrow, normal, normal],
    alignItems: ['center', 'center', 'start', 'start'],
    padding: [narrowPadding, narrowPadding, normalPadding, normalPadding],
  });
};

const PageInfo = css`
  ${FlexColSpaceAroundStart}
  height: 20vh;
  width: 100%;
`;

const backButton = css`
  ${InitButtonStyle}
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${BUTTON_COLOR.greySecond};
  padding-bottom: 6.34%;
  &:hover {
    color: ${BUTTON_COLOR.greyThird};
  }
`;

const PageGuideMessage = css`
  font-size: 1.35rem;
  word-break: keep-all;
  font-weight: bold;
`;

export const PageGuideMessageMQ = () => {
  const normal = '45.7%';
  const narrow = '90.54%';
  return mq({
    width: [narrow, narrow, normal, normal],
  });
};
