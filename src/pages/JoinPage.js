/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  COLOR_STYLE,
  mq,
  FlexSpaceBetweenCenter,
} from '../styles/GlobalStyles';

import LeftBox from '../components/Join/LeftBox';
import RightBox from '../components/Join/RightBox';

function JoinPage() {
  return (
    <div css={[Container, ContainerMQ()]}>
      <LeftBox />
      <RightBox />
    </div>
  );
}

export default JoinPage;

const Container = css`
  width: 100%;
  background-color: ${COLOR_STYLE.lightGrey};
  ${FlexSpaceBetweenCenter}
`;

export const ContainerMQ = () => {
  const narrow = 'auto';
  const normal = '100vh';

  return mq({
    flexDirection: ['column', 'column', 'row', 'row'],
    height: [narrow, narrow, normal, normal],
  });
};
