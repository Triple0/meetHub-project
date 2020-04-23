import React from 'react';
// import { Feed, Icon } from 'semantic-ui-react';
import usePostContactService from '../store/services/usePostContactService';

// export interface Props{

// }

const Contacts: React.FunctionComponent<{}> = () => {
  const service = usePostContactService();

  // console.log(service.payload.id);

  return (
    
      <div>
        <h1>Contact List</h1>
        <p>News Feed</p>
        {/* {service.status === 'loading' && <div>Loading...</div>} */}
        {service.status === 'loaded' &&
          <div key={service.payload.id}>
            <ul>
              <li>{service.payload.title}</li>
              <li>{service.payload.body}</li>
            </ul>
           
            </div>
          }
          {/* {service.status === 'error' && (<div>Error!! Page Can't Load...</div>)}         */}
          
        {/* < Feed >
          <Feed.Event>
            <Feed.Label image='/images/avatar/small/joe.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a className='aStyle'>{title}</a> posted at <Feed.Date>{date}hrs</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {body}
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />5 Likes
          </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>          
        </Feed > 
        < Feed >
          <Feed.Event>
            <Feed.Label image='/images/avatar/small/joe.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a className='aStyle'>{title}</a> posted at <Feed.Date>{date}hrs</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {body}
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />5 Likes
          </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>          
        </Feed > 
        < Feed >
          <Feed.Event>
            <Feed.Label image='/images/avatar/small/joe.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a className='aStyle'>{title}</a> posted at <Feed.Date>{date}hrs</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {body}
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />5 Likes
          </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>          
        </Feed >  */}
      </div >
    );
  
};

export default Contacts;
