/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { WIDGET_COMMON_RADIUS } from '../../../styles/style';
import { logoImg } from '../../../asset/index';
import { createReplacementModalAction } from '../../../redux/slice';

function NewBox({ element }) {
  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  const dispatch = useDispatch();
  const setEditorWidgetId = (id) => {
    dispatch(
      createReplacementModalAction({
        ...modal,
        targetWidgetId: id,
      })
    );
  };

  return (
    <div
      css={newWidget}
      onClick={() => {
        if (element.i !== undefined && element.i !== -1) {
          setEditorWidgetId(element.i);
        }
      }}
      onKeyDown={() => {
        if (element.i !== undefined && element.i !== -1) {
          setEditorWidgetId(element.i);
        }
      }}
    >
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
