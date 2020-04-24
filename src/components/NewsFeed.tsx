import React, { Suspense } from 'react';
// import { Feed, Icon } from 'semantic-ui-react';
import usePostContactService from '../services/usePostContactService';

const NewsFeed: React.FunctionComponent<{}> = () => {
    const service = usePostContactService();

    // console.log(service.status);
    

    return (

        <div>
            <Suspense fallback = {<h1>Contact List</h1>}>
            <Suspense fallback = {<p>News Feed</p>} />
            <Suspense fallback = {service.status === 'loading' && <div>Loading...</div>}>
            {service.status === 'loaded' && service.payload.results.map(contact => (<div key={contact.id}>
                <ul>
                    <li>{contact.title}</li>
                    <li>{contact.body}</li>
                </ul>

            </div>))}
            <Suspense fallback = {service.status === 'error' && (<div>Error!! Page Can't Load...</div>)} >  
            </Suspense>
            </Suspense>
            </Suspense>    

        </div >
    );

};

export default NewsFeed;
