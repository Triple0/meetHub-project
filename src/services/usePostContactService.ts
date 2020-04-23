import { useEffect, useState } from 'react';
import { ServiceTypes } from '../store/types/ServiceTypes';
import { ContactTypes } from '../store/types/ContactTypes';

export interface Contacts {
  results: ContactTypes[];
}

const usePostContactService = () => {
  const [result, setResult] = useState<ServiceTypes<Contacts>>({
    status: 'loading'
  });

  useEffect(() => {

    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch('https://jsonplaceholder.typicode.com/posts', { signal: signal })
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }))
        return () => abortController.abort();
      ;
  }, []);
  
  return result;
};

export default usePostContactService;
