/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { COLOR_STYLE, FlexSpaceBetweenCenter } from '../styles/GlobalStyles';

import LeftBox from '../components/Join/LeftBox';
import RightBox from '../components/Join/RightBox';
import { MIN_WIDTH } from '../styles/style';

function JoinPage() {
  return (
    <div css={[Container]}>
      <LeftBox />
      <RightBox />
    </div>
  );
}

export default JoinPage;

const Container = css`
  width: 100%;
  height: 100vh;
  min-width: ${MIN_WIDTH};
  background-color: ${COLOR_STYLE.lightGrey};
  ${FlexSpaceBetweenCenter}
`;
