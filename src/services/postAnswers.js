import mainApi from './apis/mainApi';

const postAnswers = (surveyId, data) => {
  return mainApi.post('/answers', {surveyId, data});
};

export default postAnswers;
