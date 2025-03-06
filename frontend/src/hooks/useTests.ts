import { useEffect, useState } from 'react';
import testsService from '../services/testsService/testsService';

const useTests = () => {
  const [tests, setTests] = useState<ITest[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    testsService
      .getTests()
      .then((data) => {
        setTests(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { tests, isLoading, error };
};

export default useTests;
