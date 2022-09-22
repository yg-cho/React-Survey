import { useRecoilValue } from 'recoil';
import useStep from './useStep';
import surveyState from '../stores/survey/surveyState';


const useCurrentQuestions = () => {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];
  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurvey(res.data)
  //   })
  // },[setSurvey,surveyId]);


  return questions[step];
}
export default useCurrentQuestions;