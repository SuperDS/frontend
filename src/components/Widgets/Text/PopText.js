/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  commonBtn,
  FlexColCenter,
  InitButtonStyle,
  OrangeColorButton,
  RoundButtonSmall,
  getAbsoluteBtn,
  SHADOW_STYLE,
} from '../../../styles/GlobalStyles';
import TextEditor from './Text';
import { closeSet } from '../../../asset';
import { useInitWidget } from '../../../hooks/widget';
import { TYPE_TEXT } from '../../../utils/constantValue';

function PopText(props) {
  const { label, endPop } = props;
  const { btn, img } = getAbsoluteBtn(25, 42, 25);
  const [textData, setTextData] = useState('');

  const { init } = useInitWidget();

  const editWidget = () => {
    init({ type: TYPE_TEXT, data: { thumbnail: textData } });
  };

  const handleSubmit = () => {
    if (textData !== '') {
      editWidget();
    }
    endPop();
  };

  return (
    <div css={[Container]}>
      <div css={PopupHeader}>
        <p css={[PopupLabel]}>{label}</p>
        <button
          type='button'
          css={[commonBtn, btn]}
          onClick={() => {
            endPop();
          }}
        >
          <div css={img}>
            <img alt='img' height='50px' src={closeSet} />
          </div>
        </button>
      </div>
      <TextEditor setTextData={setTextData} />
      <button
        type='button'
        css={[InitButtonStyle, OrangeColorButton, RoundButtonSmall, topMargin]}
        onClick={handleSubmit}
      >
        저장
      </button>
    </div>
  );
}

const Container = css`
  ${FlexColCenter}
  ${SHADOW_STYLE.pale}
  width: 100%;
  margin: 30px 0 20px 0;
`;

const PopupHeader = css`
  margin-bottom: 35px;
  height: 20px;
`;

const PopupLabel = css`
  font-size: 1.3rem;
  font-weight: 800;
`;

const topMargin = css`
  margin-top: 10px;
`;

export default PopText;
