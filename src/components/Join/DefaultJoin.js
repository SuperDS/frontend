import React, { useState } from 'react';
import { inputWithHOC } from './inputWithHOC';

function DefaultJoin() {
  const [nicknameValue, setNicknameValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [hashTag, setHashTag] = useState('');

  return (
    <div>
      {inputWithHOC({
        type: 'nickname',
        _value: nicknameValue,
        _setValue: setNicknameValue,
        label: '닉네임',
      })}
      {inputWithHOC({
        type: 'url',
        _value: urlValue,
        _setValue: setUrlValue,
        label: '개인 URL(영문)',
      })}
      {inputWithHOC({
        type: 'hashTag',
        _value: hashTag,
        _setValue: setHashTag,
        label: '관심 분야 태그',
      })}
    </div>
  );
}

export default DefaultJoin;
