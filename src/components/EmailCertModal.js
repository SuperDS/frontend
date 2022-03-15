/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import { closeSet } from '../asset';
import {
  COLOR_STYLE,
  commonBtn,
  FlexCenter,
  FlexColCenter,
  FlexColSpaceBetween,
  getAbsoluteBtn,
  InitButtonStyle,
  OrangeColorButton,
  RoundButtonSmall,
  SHADOW_STYLE,
} from '../styles/GlobalStyles';
import { useRequest } from '../hooks/useRequest';
import { getApiEndpoint, isOk } from '../utils/util';

function EmailCertModal({ closeModal, certSucceed, email, state }) {
  const label = '이메일 인증';
  const { btn, img } = getAbsoluteBtn(25, 42, 25);
  const endpoint = `${getApiEndpoint()}/auth/email/${email}`;

  const { res: sendRes, request: send } = useRequest({
    endpoint: endpoint,
    method: 'get',
  });

  const handleSubmit = () => {
    send();
  };

  const emailSend = useMemo(() => {
    if (sendRes && sendRes.data && isOk(sendRes.data.code)) {
      console.log(sendRes);
      return true;
    }
    return false;
  }, [sendRes]);

  const { res, request } = useRequest({
    endpoint: `${getApiEndpoint()}/auth/verification/${email}`,
    method: 'get',
  });
  const checkVerification = () => {
    request();
  };

  const resultMessage = useMemo(() => {
    if (res && res.data) {
      if (isOk(res.data.code)) {
        certSucceed();
        closeModal();
        return null;
      }
      return '이메일에서 인증 버튼을 먼저 눌러주세요!';
    }
    return null;
  }, [res]);

  return (
    <div css={[Container]}>
      <div css={PopupHeader}>
        <p css={[PopupLabel]}>{label}</p>

        <button
          type='button'
          css={[commonBtn, btn]}
          onClick={() => closeModal()}
        >
          <div css={img}>
            <img alt='img' height='50px' src={closeSet} />
          </div>
        </button>
      </div>

      <div css={[PopUpBody]}>
        {!state && (
          <>
            <div css={MessageWrapper}>
              <p css={MessageStyle}>현재 입력하신 이메일은 사용할 수 없어요!</p>
              <p css={MessageStyle}>다른 이메일로 다시 시도해주세요.</p>
            </div>
            <button
              type='button'
              css={[InitButtonStyle, OrangeColorButton, RoundButtonSmall]}
              onClick={() => closeModal()}
            >
              확인
            </button>
          </>
        )}
        {state && (
          <>
            {!emailSend && (
              <div css={MessageWrapper}>
                <p css={[MessageStyle, MessageEmphasizeStyle]}>{email}</p>
                <p css={MessageStyle}>
                  입력하신 주소로 인증 메일을 보내드릴게요.
                </p>
                <p css={MessageStyle}>아래 버튼을 눌러주세요!</p>
              </div>
            )}
            {emailSend && !resultMessage && (
              <div css={MessageWrapper}>
                <p css={MessageStyle}>메일 확인 후</p>
                <p css={MessageStyle}>아래 버튼을 눌러주세요.</p>
              </div>
            )}
            {emailSend && resultMessage && (
              <div css={MessageWrapper}>
                <p css={MessageStyle}>{resultMessage}</p>
              </div>
            )}
            {!emailSend && (
              <button
                type='button'
                css={[InitButtonStyle, OrangeColorButton, RoundButtonSmall]}
                onClick={() => {
                  handleSubmit();
                }}
              >
                인증하기
              </button>
            )}
            {emailSend && (
              <button
                type='button'
                css={[InitButtonStyle, OrangeColorButton, RoundButtonSmall]}
                onClick={() => {
                  checkVerification();
                }}
              >
                인증결과 확인하기
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EmailCertModal;

const Container = css`
  display: block;
  position: fixed;
  background-color: ${COLOR_STYLE.white};
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 360px;
  max-width: 360px;
  max-height: 300px;
  transform: translateY(-50%);
  ${FlexColCenter}
  box-shadow: ${SHADOW_STYLE.lightGrey}
  z-index: 1000;
  margin: 0 auto;
  padding: 10px;
  border-radius: 30px;
  border: solid 2px ${COLOR_STYLE.paleGrey};
`;

const PopupHeader = css`
  margin-bottom: 10px;
  ${'' /* height: 10px; */}
`;

const PopupLabel = css`
  font-family: NotoSansCJKKR;
  font-size: 1.3rem;
  font-weight: 800;
`;

const PopupColumnWrapper = css`
  ${FlexColSpaceBetween}
  width: 80%;
  margin: 0;
`;

const PopUpBody = css`
  ${PopupColumnWrapper}
  align-items: center;
  margin-top: 10px;
`;

const MessageWrapper = css`
  ${FlexColCenter}
  margin-top: 10px;
  margin-bottom: 25px;
`;

const MessageStyle = css`
  ${FlexCenter}
  font-size: 0.9rem;
  width: 100%;
  margin: 10px 5px 0px 5px;
  color: ${COLOR_STYLE.brownishGrey};
`;

const MessageEmphasizeStyle = css`
  font-weight: 700;
  padding: 8px 7px;
  border-radius: 15px;
  color: ${COLOR_STYLE.black};
  margin-bottom: 3px;
  background-color: ${COLOR_STYLE.paleGrey};
`;
