import { useParams } from 'react-router-dom';

const useStep = () => {
  const params = useParams();
  return parseInt(params.step);
};

export default useStep;
