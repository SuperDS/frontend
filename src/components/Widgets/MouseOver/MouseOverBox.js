/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mouseover_widget } from '../../../asset';
import { GRID_MARGIN } from '../../../styles/style';

function MouseOverBox() {
  return (
    <div css={[remmoveBtnCss]}>
      <img alt='img' width='100%' height='100%' src={mouseover_widget} />
    </div>
  );
}

export default MouseOverBox;

const remmoveBtnCss = css`
  position: relative;
  top: -${GRID_MARGIN[0] / 2}px;
  left: -${GRID_MARGIN[0] / 2}px;
  width: calc(100% + ${GRID_MARGIN[0]}px);
  height: calc(100% + ${GRID_MARGIN[0]}px);
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;
