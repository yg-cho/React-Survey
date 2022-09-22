import styled from 'styled-components';
import Bar from '../Bar';
import { useRecoilValue } from 'recoil';
import questionsLengthState from '../../stores/survey/questionsLength';
import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';

const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
  let status = 'pending';
  if (i === step) {
    status = 'in-progress';
  } else if (answers[i]) {
    status = 'done'
  }
    bars.push(<Bar key={i} status={status} />)
}

  return (
    <Wrapper>
      {bars}
      <PageCount><span>{step+1}</span>/{length}</PageCount>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -webkit-calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;
  
  span {
    font-weight: bold;
    color: #121111;
  }
`
export default ProgressIndicator;
