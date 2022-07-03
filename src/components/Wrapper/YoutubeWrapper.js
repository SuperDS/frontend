/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function YoutubeWrapper({ children }) {
  return (
    <div css={[youtubePosition]}>
      <div css={videoRatio}>{children}</div>
    </div>
  );
}

const youtubePosition = css`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const videoRatio = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default YoutubeWrapper;
