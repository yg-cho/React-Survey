import React from 'react';
import styled from 'styled-components';

{/* js 스프레드연산자 사용하여 구조분해할당 으로 props 전달*/}
const TextInput = ({answer= '', setAnswer, options}) => {
  return(
    <Input
      type="text"
      value={answer}
      onChange={ (e)=> setAnswer(e.target.value) }
      placeholder={options.placeholder}
     {...(options?.max ? {maxlength: options?.max} : null)}
    />
  )
};

const Input = styled.input`
    border: 1px solid #e0c0c0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    line-height: 21px;
    padding: 12px 18px;
  `
export default TextInput;
