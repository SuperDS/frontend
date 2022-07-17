import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReplacementModalAction } from '../../../redux/slice';
import PopTypeComponent from './PopTypeComponent';

function PopWidgets() {
  const dispatch = useDispatch();

  const { modal } = useSelector((state) => ({
    modal: state.info.modal,
  }));

  // 팝업 삭제 함수
  // 모든 하위 위젯 컴포넌트에 넣어줘야함
  const endPop = () => {
    dispatch(
      createReplacementModalAction({
        ...modal,
        popUpWindow: false,
      })
    );
  };

  return modal.popUpWindowType !== 'text' ? (
    <div style={backGroundPopStyle}>
      {/* <div style={widgetBoxPopStyle}> */}
      <PopTypeComponent endPop={endPop} />
      {/* </div> */}
    </div>
  ) : (
    <></>
  );
}

const backGroundPopStyle = {
  position: 'fixed',
  zIndex: '1000',
  top: '0px',
  backgroundColor: 'rgba( 0, 0, 0, 0.2 )',
  width: '100vw',
  minHeight: `calc(100vh)`,
};

// 이거 Css -> PopTypeComponent로 이동
// const widgetBoxPopStyle = {
//   position: 'fixed',
//   zIndex: '11',
//   top: `50%`,
//   left: `50%`,
//   transform: 'translate(-50%, -50%)',
//   width: '540px',
//   height: `250px`,
//   backgroundColor: 'white',
//   borderRadius: '20px',
// };

export default PopWidgets;
