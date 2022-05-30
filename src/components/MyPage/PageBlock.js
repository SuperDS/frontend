/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { InitButtonStyle } from '../../styles/GlobalStyles';

function PageBlock({ addBlock, popUp, setPopUp }) {
  return (
    <>
      {addBlock ? (
        <>
          <button
            type='button'
            css={[InitButtonStyle, siteViewBZone]}
            onClick={() => setPopUp(!popUp)}
          >
            추가하기
          </button>
        </>
      ) : (
        <button
          type='button'
          css={[InitButtonStyle, siteViewBZone]}
          onClick={() => {
            /* 여기에 함수 넣으면 됩니다. */
          }}
        >
          위젯 그림
        </button>
      )}
    </>
  );
}

export default PageBlock;

const siteViewBZone = css`
  width: 329px;
  height: 234px;
  border-radius: 20px 20px 20px 20px;
  background-color: white;
  display: inline-block;
  margin: 10px;
`;
