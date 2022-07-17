/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToolBarButton } from '..';
import { createReplacementModalAction } from '../../redux/slice';
import { img, video, text } from '../../asset/index';
import { useInitWidget } from '../../hooks/widget';
import { TYPE_TEXT } from '../../utils/constantValue';

function ToolBar() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  const { init } = useInitWidget();

  const widgetList = [
    { type: 'image', label: '그림', emoji: img },
    { type: 'video', label: '비디오', emoji: video },
    { type: 'text', label: '텍스트', emoji: text },
  ];

  const new_widget_button_list = widgetList.map((value, i) => ({
    key: i,
    label: value.label,
    emoji: value.emoji,
    type: value.type,
    onClick: () => {
      if (value.type !== 'text') {
        dispatch(
          createReplacementModalAction({
            ...modal,
            popUpWindow: true,
            popUpWindowType: value.type,
          })
        );
      } else {
        const thumbnail = '';
        dispatch(
          createReplacementModalAction({
            ...modal,
            popUpWindow: false,
            popUpWindowType: value.type,
          })
        );
        init({ type: TYPE_TEXT, data: { thumbnail } });
      }
    },
  }));

  const NewWidgetButtons = new_widget_button_list.map((tool) => (
    <li key={tool.key} css={deleteListStyle}>
      <ToolBarButton
        action={tool.onClick}
        emoji={tool.emoji}
        type={tool.type}
        label={tool.label}
      />
    </li>
  ));

  return (
    <div css={toolBar}>
      <ul css={deleteListStyle}>{NewWidgetButtons}</ul>
    </div>
  );
}

export default ToolBar;

const toolBar = css`
  width: 150px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #eeeeee;
`;

const deleteListStyle = css`
  list-style-type: none;
  float: left;
  margin: 7.5px;
`;
