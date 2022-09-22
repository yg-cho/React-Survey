import useCurrentQuestions from './useCurrentQuestions';

const useRequiredOption = () => {
  const question = useCurrentQuestions();
  return question.required
}

export default useRequiredOption;