import { useEffect, useState } from 'react';
import testsService from '../services/testsService/testsService';

const useSingleTest = (id: number) => {
  const [test, setTest] = useState<ITest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    testsService
      .getSingleTest(id)
      .then((data) => {
        setTest(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { test, isLoading, error };
};

export default useSingleTest;
