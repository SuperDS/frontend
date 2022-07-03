import React, { useEffect, useState } from 'react';
import { inputWithHOC } from './inputWithHOC';

function LocalJoin({ seIisLocalInputEnd }) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  useEffect(() => {
    // if 절차가 다 끝나면
    seIisLocalInputEnd(true);
  }, []);
  return (
    <>
      {inputWithHOC({
        type: 'email',
        _value: emailValue,
        _setValue: setEmailValue,
        label: '이메일',
      })}
      {inputWithHOC({
        type: 'password',
        _value: passwordValue,
        _setValue: setPasswordValue,
        label: '비밀번호',
      })}
    </>
  );
}

export default LocalJoin;
