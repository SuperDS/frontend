/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mainColor } from '../../styles/color';
import {
  BUTTON_COLOR,
  COLOR_STYLE,
  InitButtonStyle,
} from '../../styles/GlobalStyles';

function ConfirmButton({ nowInput }) {
  function hello() {
    console.log(nowInput);
  }
  return (
    <button type='button' css={[inputInnerButton]} onClick={() => hello()}>
      <span css={[buttonText]}>다음으로</span>
    </button>
  );
}

export default ConfirmButton;

const inputInnerButton = css`
  ${InitButtonStyle}
  width: 104.72px;
  height: 27.72px;
  border-radius: 22.5px;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.07);
  color: ${COLOR_STYLE.brownishGrey};
  background-color: ${mainColor};
  &:hover {
    background-color: ${BUTTON_COLOR.orangeSecond};
  }
  float: right;
`;

const buttonText = css`
  width: 35.73px;
  height: 14.784px;
  font-size: 9.8px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;
