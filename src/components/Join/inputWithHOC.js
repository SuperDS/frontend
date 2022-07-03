/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function inputWithHOC({
  id,
  type,
  _value,
  _setValue,
  label,
  inputContainerStyle,
  inputBoxStyle,
}) {
  return (
    <div css={{ ...inputContainer, ...inputContainerStyle }}>
      <label css={[labelStyles]} htmlFor={id || type}>
        {label}
      </label>
      <div css={{ ...inputBox, ...inputBoxStyle }}>
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
  margin-bottom: 49.28px;
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

const inputBox = css`
  width: 78%;
  height: 35px;
  border-radius: 22.5px;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.07);
  border: none;
  padding: 3px 15px;
  box-sizing: border-box;
`;

const commonInputStyle = css`
  width: 378.84px;
  height: 27.72px;
  outline: none;
  border-radius: 22.5px;
  border: 0;
`;
