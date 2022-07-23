import React, { useCallback, useEffect, useState } from 'react';
import './Text.css';
import { useSelector, useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from 'ckeditor5-custom-build/build/ckeditor';
import { createReplacementModalAction } from '../../../redux/slice';
import { TYPE_TEXT } from '../../../utils/constantValue';
import { useUpdateTextWidgetData } from '../../../hooks/widget';

function TextEditor(props) {
  const { widgets, modal } = useSelector((state) => ({
    widgets: state.info.widgets,
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

  const [thumbnail, setThumbnail] = useState('');

  const { updateTextData } = useUpdateTextWidgetData();

  // const handleSubmit = useCallback(() => {
  //   if (modal.targetWidgetId !== '-1') {
  //     updateTextData(thumbnail);
  //   }
  // }, [thumbnail]);

  const originText = widgets.list.find(
    (element) => element.i === props.widgetId
  ).widget_data.thumbnail;

  // useEffect(() => {
  //   console.log(originText);
  //   console.log(thumbnail);
  //   if (originText !== thumbnail) {
  //     handleSubmit();
  //   }
  // }, [thumbnail, handleSubmit]);

  return (
    <div className='TextEditor'>
      <div className='Textbox'>
        <div className='Editor'>
          <CKEditor
            style={{ margin: 0, padding: 0 }}
            editor={InlineEditor}
            data={originText}
            config={{
              toolbar: {
                items: ['heading', '|', 'link', 'bold', 'italic', 'alignment'],
                isFloating: true,
                shouldNotGroupWhenFull: true,
              },
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
                options: ['left', 'center', 'right'],
              },
              link: {
                defaultProtocol: 'https://',
                decorators: {
                  isExternal: {
                    mode: 'automatic',
                    callback: (url) => url.startsWith('https://'),
                    attributes: {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  isDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                      download: 'file.png',
                    },
                  },
                },
              },
            }}
            onFocus={() => {
              if (props.widgetId !== undefined && props.widgetId !== -1) {
                setEditorWidgetId(props.widgetId);
              }
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              // setThumbnail(data);
              updateTextData(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
