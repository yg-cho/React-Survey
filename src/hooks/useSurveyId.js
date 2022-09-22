import { useParams } from 'react-router-dom';

const useSurveyId = () => {
  const params = useParams();
  return parseInt(params.surveyId);
};

export default useSurveyId;
