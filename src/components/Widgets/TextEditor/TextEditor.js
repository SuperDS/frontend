import React, { useState } from 'react';
import './TextEditor.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

function TextEdiotr() {
  const [textsetup, setTextsetup] = useState(false);

  const textOnclick = function () {
    if (textsetup === true) {
      setTextsetup(false);
    } else setTextsetup(true);
  };

  const [text, setText] = useState('텍스트를 입력하세요.'); // 처음 텍스트위젯 생성시 표시되는 텍스트

  return (
    <div className='TextEditor'>
      <h2>text widget </h2>
      <div className='Textbox'>
        <button type='button' onClick={textOnclick}>
          수정
        </button>
        <div className='Editor'>
          {textsetup ? (
            <CKEditor
              style={{ margin: 0, padding: 0 }}
              editor={InlineEditor}
              data={text} // 수정된 텍스트가 저장되는 곳
              config={{
                toolbar: ['|', 'heading', '|', 'link', 'bold', 'italic'],
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
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          ) : (
            <p>{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextEdiotr;
