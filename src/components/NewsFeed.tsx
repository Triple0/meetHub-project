import React from 'react';
// import { Feed, Icon } from 'semantic-ui-react';
import usePostContactService from '../services/usePostContactService';

const NewsFeed: React.FunctionComponent<{}> = () => {
    const service = usePostContactService();

    console.log(service.status);
    

    return (

        <div>
            <h1>Contact List</h1>
            <p>News Feed</p>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' && service.payload.results.map(contact => (<div key={contact.id}>
                <ul>
                    <li>{contact.title}</li>
                    <li>{contact.body}</li>
                </ul>

            </div>))}
            {service.status === 'error' && (<div>Error!! Page Can't Load...</div>)}        

        </div >
    );

};

export default NewsFeed;
