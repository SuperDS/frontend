/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { WIDGET_COMMON_RADIUS } from '../../../styles/style';
import { logoImg } from '../../../asset/index';

function NewBox() {
  return (
    <div css={newWidget}>
      <img css={newWidgetNoticeStyle} src={logoImg} />
    </div>
  );
}

export default NewBox;

const newWidget = css`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: ${WIDGET_COMMON_RADIUS};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  box-sizing: border-box;
`;

const newWidgetNoticeStyle = css`
  width: 100%;
`;
