/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useMyInfo } from '../../hooks/myInfo';
import useRequestAuth from '../../hooks/useRequestAuth';
import { mainColor } from '../../styles/color';
import { getApiEndpoint } from '../../utils/util';

const inputColor = '#fff';

function FeedbackInputBox() {
  const [inputmessage, setInputmessage] = useState('');
  const { loggedIn } = useMyInfo();
  const endpoint = `${getApiEndpoint()}/feedback/register`;

  const { res, request } = useRequestAuth({
    endpoint: endpoint,
    method: 'post',
    data: {
      content: inputmessage,
    },
  });

  function sendAlert() {
    alert('피드백은 회원 가입 후에 작성 가능합니다!');
  }

  function sendQnA() {
    if (loggedIn) {
      if (inputmessage.length < 10) alert('10자 이상 작성해주셔야 합니다!');
      else {
        request();
        alert(
          '온잇 팀이 의견을 검토하기까지는 피드백 화면에서 나의 의견을 확인할 수 없어요. 소중한 의견을 신속하게 확인할게요!'
        );
      }
    } else {
      sendAlert();
    }
  }

  useEffect(() => {
    if (res && res.data) {
      window.location.reload();
    }
  }, [res]);

  const handleMessageChange = ({ target: { value } }) => {
    setInputmessage(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendQnA();
    }
  };

  return (
    <div css={[container]}>
      <input
        css={[removeInputCss, inputBox]}
        value={inputmessage}
        placeholder='온잇에 대한 생생한 의견을 보내주세요!'
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type='button'
        css={[removeButtonCss, buttonBox]}
        onClick={sendQnA}
      >
        보내기
      </button>
    </div>
  );
}

const container = css`
  background-color: ${inputColor};
  opacity: 1;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 43.2px 20px 24.7px;
  border-radius: 48px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
`;

const removeButtonCss = css`
    border: 0;
    outline 0;
`;

const buttonBox = css`
  width: 97.2px;
  height: 33.6px;
  margin-right: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: #ffffff;
  border-radius: 28px;
  background-color: #2e2e2e;
  &:hover {
    background-color: ${mainColor};
  }
`;

const removeInputCss = css`
  border: none;
  box-shadow: none;
  font-size: 1em;
  appearance: none;
`;

const inputBox = css`
  display: block;
  width: 100%;
  height: 24px;
  font-size: 13.55px;
  border-radius: 48px;
  background-color: ${inputColor};
  padding: 12px 20px;
`;

export default FeedbackInputBox;
