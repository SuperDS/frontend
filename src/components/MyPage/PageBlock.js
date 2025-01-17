/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { InitButtonStyle } from '../../styles/GlobalStyles';

// eslint-disable-next-line no-unused-vars
function PageBlock({ data, addBlock, popUp, setPopUp }) {
  // if (data) {
  // console.log(`data: ${data.title}`);
  // console.log(`data: ${data.url}`);
  // const pageurl = `/dongslee/${data.url}`;
  // console.log(pageurl);
  // }

  // console.log(addBlock);

  return (
    <>
      {!data ? (
        <>
          <button
            type='button'
            css={[InitButtonStyle, siteViewBZone]}
            onClick={() => setPopUp(!popUp)}
          >
            +
          </button>
        </>
      ) : (
        <div css={siteViewBZone}>
          <Link to={data.url ? `/dongslee/${data.url}` : ''}>
            <div
              css={css`
                height: 70%;
                background-image: url('https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjNfNDEg/MDAxNDk4MjExMTE1OTYy.RGjgC51-8rYSISInewpiERaIWLuYkk6h8-DHImZWlNog.6nJ1cYNwJuFRBYbzuXIlfFC2vAz9SSYihxEpnVX2ttUg.PNG.kkp0079/1.PNG?type=w800');
                border-radius: 20px 20px 0px 0px;
              `}
            />
          </Link>
          <div
            css={css`
              display: flex;
              text-align: center;
              align-items: center;
            `}
          >
            <div
              css={css`
                font-size: 20px;
                width: 70%;
                display: flex;
                margin: auto;
                margin-top: 20px;
              `}
            >
              {data ? `${data.title}` : ''}
            </div>
            <div
              css={css`
                font-size: 20px;
                display: flex;
                display: flex;
                margin: auto;
                margin-top: 20px;
              `}
            >
              수정
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PageBlock;

const siteViewBZone = css`
  width: 320px;
  height: 230px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 23.75px;
  margin-right: 23.75px;
  border-radius: 20px 20px 20px 20px;
  background-color: white;
  display: inline-block;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  font-size: 35px;
  color: gray;
`;
