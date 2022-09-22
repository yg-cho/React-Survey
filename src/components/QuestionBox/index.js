import React from 'react';
import Title from '../Title';
import Desc from '../Desc';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';
import useCurrentQuestions from '../../hooks/useCurrentQuestions';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';

const QuestionBox = () => {
  const [answer, setAnswer] = useCurrentAnswer();
  const question = useCurrentQuestions();

  return(
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons/>
    </QuestionBoxWrapper>
  )
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default QuestionBox;
