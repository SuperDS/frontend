import React from 'react';
import { useSelector } from 'react-redux';
import PopImage from '../Image/PopImage';
import PopVideo from '../Video/PopVideo';
import PopNonType from '../NonType/PopNonType';
import PopText from '../Text/PopText';

const PopTypeComponent = (props) => {
  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  const { endPop } = props;

  function getModalBody(type) {
    if (type === 'image') {
      return (
        <div style={widgetBoxPopStyle}>
          <PopImage endPop={endPop} label='이미지 추가' />
        </div>
      );
    } else if (type === 'video') {
      return (
        <div style={widgetBoxPopStyle}>
          <PopVideo endPop={endPop} label='비디오 추가' />
        </div>
      );
    } else if (type === 'text') {
      return (
        <div style={tempStyle}>
          <PopText endPop={endPop} label='텍스트 추가' />
        </div>
      );
    } else {
      return <PopNonType endPop={endPop} label='안내' />;
    }
  }

  const modalBody = getModalBody(modal.popUpWindowType);

  return <>{modalBody}</>;
};

const widgetBoxPopStyle = {
  position: 'fixed',
  zIndex: '11',
  top: `50%`,
  left: `50%`,
  transform: 'translate(-50%, -50%)',
  width: '540px',
  height: `250px`,
  backgroundColor: 'white',
  borderRadius: '20px',
};

const tempStyle = {
  position: 'fixed',
  zIndex: '11',
  top: `50%`,
  left: `50%`,
  transform: 'translate(-50%, -50%)',
  width: '380px',
  height: `450px`,
  backgroundColor: 'white',
  borderRadius: '20px',
};

export default PopTypeComponent;
