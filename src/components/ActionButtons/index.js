import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLength';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';

const ActionButtons = () => {
  const questions = useRecoilValue(questionsLengthState);
  const surveyId = useSurveyId();
  const step = useStep();
  const [answers, setAnswers] = useAnswers();
  const isRequired = useRequiredOption();
  const [isPosting,setIsPosting] = useState(false);

  const navigate = useNavigate();
  const isLast = questions -1 === step;

  const isBlockToNext = isRequired ? !answers[step]?.length : false;

  return (
    <ActionButtonWrapper>
      {step === 0 ||
        <Button
          type={"SECONDARY"}
          onClick={() => {
            navigate(`${step-1}`)
          }}
        >이전
        </Button>
      }
      { isLast ?
        <Button
          type={"PRIMARY"}
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswers([]);
              navigate(`/done/${surveyId}`)
            }).catch((err) => {
              alert('에러가 발생했습니다. 다시 시도해주세요.')
              setIsPosting(false)
            })
          }}
          disabled={isPosting || isBlockToNext}
        >{isPosting ? '제출 중 입니다...' : '제출'}
        </Button> :

        <Button
          type={"PRIMARY"}
          onClick={() => {
            console.log('next');
            navigate(`${step+1}`)
          }}
          disabled={isBlockToNext}
        >다음
        </Button>
      }
    </ActionButtonWrapper>
  )
};

const ActionButtonWrapper = styled.div`
  margin-top: 72px;
  text-align: center;
  display: flex;
  gap: 16px;
  justify-content: center;
`


export default ActionButtons;
