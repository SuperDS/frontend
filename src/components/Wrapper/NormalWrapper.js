import React from 'react';
import { css } from '@emotion/css';

const NormalWrapper = ({ children }) => (
  <div
    className={css`
      width: 100%;
      min-width: 1124px;
      height: 100vh;
      margin-left: auto;
      margin-right: auto;
    `}
  >
    {children}
  </div>
);

export default NormalWrapper;
