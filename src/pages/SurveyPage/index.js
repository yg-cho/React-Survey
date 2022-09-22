import { Suspense } from 'react';
import QuestionBox from '../../components/QuestionBox';
import styled from 'styled-components';
import ProgressIndicator from '../../components/ProgressIndicator';

const SurveyPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SurveyPageWrapper>
        <ProgressIndicator/>
          <QuestionBox />
        </SurveyPageWrapper>
      </Suspense>
    </>
  );
};

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`

export default SurveyPage;
