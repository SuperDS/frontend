/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mouseover_widget } from '../../../asset';

function MouseOverBox() {
  return (
    <div css={[remmoveBtnCss]}>
      <img alt='img' width='100%' height='100%' src={mouseover_widget} />
    </div>
  );
}

export default MouseOverBox;

const remmoveBtnCss = css`
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;
