import { useEffect, useState } from 'react'
import { ContactTypes } from '../types/ContactTypes';
import { ServiceTypes } from '../types/ServiceTypes';


export interface Contacts {
  data: ContactTypes[];
}


const usePostContactService = () => {
    const [ data, setData ] = useState<ServiceTypes<ContactTypes>>({
        status: "loading"
    });

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => setData({ status: "loaded", payload: response}))
      .catch(error => setData({ status: 'error', error }));        
    }, []);

    return data;
};
export default usePostContactService;