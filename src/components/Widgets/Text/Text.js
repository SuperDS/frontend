import React, { useEffect, useRef } from 'react';
import './Text.css';
import { useSelector } from 'react-redux';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

function TextEditor(props) {
  const { widgets, modal } = useSelector((state) => ({
    widgets: state.info.widgets,
    modal: state.info.modal,
  }));
  const textWidgetRef = useRef(null);
  let originText = '';

  useEffect(() => {
    const items = JSON.parse(JSON.stringify(widgets.list));
    const found = items.find(
      (element) => element.widget_code === props.widgetCode
    );
    originText =
      found?.widget_data !== undefined &&
      found?.widget_data.thumbnail !== undefined
        ? found.widget_data.thumbnail
        : '';
    console.log(originText);
  }, [widgets]);

  return (
    <div className='TextEditor'>
      <div className='Textbox'>
        <div className='Editor' ref={textWidgetRef}>
          <CKEditor
            style={{ margin: 0, padding: 0 }}
            editor={InlineEditor}
            config={{
              plugins: [Alignment],
              toolbar: ['heading', '|', 'link', 'bold', 'italic', 'alignment'],
              placeholder: '텍스트를 입력하세요!',
              heading: {
                options: [
                  {
                    model: 'paragraph',
                    title: '보통',
                    class: 'ck-heading_paragraph',
                  },
                  {
                    model: 'heading1',
                    view: 'h1',
                    title: '기본크기',
                    class: 'ck-heading_heading1',
                  },
                  {
                    model: 'heading3',
                    view: 'h5',
                    title: '제목',
                    class: 'ck-heading_heading2',
                  },
                ],
              },
              alignment: {
                options: ['left', 'right'],
              },
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              props.setTextData(data);
            }}
            onReady={(editor) => {
              editor.setData(originText);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
