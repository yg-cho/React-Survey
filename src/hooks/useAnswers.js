import { useRecoilState } from 'recoil';
import answersState from '../stores/answers/atom';

const useAnswers = () => {
  return useRecoilState(answersState)
};

export default useAnswers;
