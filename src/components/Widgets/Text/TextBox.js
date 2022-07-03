import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextEditor from './Text';

function TextBox({ element }) {
  const [hasText, setHasText] = useState(false);
  const [textData, setTextData] = useState('');

  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  useEffect(() => {
    if (element.widget_data.thumbnail !== '') {
      setHasText(true);
    }
  }, []);

  const Viewer = ({ content }) => {
    return (
      <div
        className='ck-content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };
  // return hasText ? (
  //   <div className='TextEditor'>
  //     <Viewer content={element.widget_data.thumbnail} />
  //   </div>
  // ) : (
  //   <></>
  // );
  return (
    <TextEditor setTextData={setTextData} widgetCode={element.widget_code} />
  );
}

export default TextBox;
