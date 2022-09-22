import mainApi from './apis/mainApi';

const getSurvey = (surveyId) => {
  return mainApi.get(
    `/surveys/${surveyId}`,
  );
};

export default getSurvey;
