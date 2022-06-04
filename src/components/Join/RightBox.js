/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useLocation } from 'react-router';

function RightBox() {
  const location = useLocation();
  const { joinType } = location.state;
  const [value, setValue] = useState('');

  function inputWithHOC({ id, type, _value, _setValue, label }) {
    return (
      <div css={inputContainer}>
        <label css={[labelStyles]} htmlFor={id || type}>
          {label}
        </label>
        <div css={[inputBoxStyle]}>
          <input
            id={id || type}
            type={type}
            value={_value}
            onChange={(e) => {
              _setValue(e.currentTarget.value);
            }}
            css={[commonInputStyle]}
          />
        </div>
      </div>
    );
  }

  const inputContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const labelStyles = css`
    width: auto;
    font-family: NotoSansCJKKR;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: black;
  `;

  const inputBoxStyle = css`
    width: 78%;
    height: 35px;
    border-radius: 22.5px;
    box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.07);
    border: none;
    padding: 3px 15px;
    box-sizing: border-box;
  `;

  const commonInputStyle = css`
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 30px;
    border: 0;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #fff inset;
    }
  `;

  return (
    <>
      <div css={[InputListWrapper]}>
        <form css={[formStyle]} onSubmit={() => console.log('dd')}>
          {joinType === 'local' &&
            inputWithHOC({
              type: 'email',
              _value: value,
              _setValue: setValue,
              label: '이메일',
            })}
        </form>
      </div>
    </>
  );
}

export default RightBox;

const InputListWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 60.9%;
  border-radius: 30px;
  background-color: white;
`;

const formStyle = css`
  width: 615px;
`;
