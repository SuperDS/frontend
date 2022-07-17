/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useMyInfo } from '../../hooks/myInfo';

function MultiHeader() {
  const pages = ['image', 'video', 'info', '하이', '바밤바'];
  const [selected, setSelected] = useState('');
  const { myInfo } = useMyInfo();
  const history = useHistory();

  const navList = pages.map((page, i) => {
    const selectPage = (index) => {
      setSelected(index);
      history.push(`/${myInfo.url}/aa/${page}`);
    };

    const key = i + 1;
    return (
      <li key={key} css={[pureList]}>
        <button
          type='button'
          css={[pureButton, selected === i && underline]}
          onClick={() => selectPage(i)}
        >
          {page}
        </button>
      </li>
    );
  });

  return (
    <header>
      <div css={displayCenter}>
        <h1>제목</h1>
      </div>
      <div css={displayCenter}>
        <ul>{navList}</ul>
      </div>
    </header>
  );
}

export default MultiHeader;

const displayCenter = css`
  display: flex;
  justify-content: center;
`;

const pureList = css`
  list-style: none;
  float: left;
  margin: 10px;
`;

const pureButton = css`
  padding: 0;
  border: 0;
  outline: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const underline = css`
  text-decoration: underline;
`;
