import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextEditor from './Text';

function TextBox({ element, mode }) {
  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  const Viewer = ({ content }) => {
    return (
      <div
        className='ck-content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };
  return mode === 'normal' ? (
    <Viewer content={element.widget_data.thumbnail} />
  ) : (
    <TextEditor widgetId={element.i} />
  );
}

export default TextBox;
