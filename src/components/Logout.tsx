import * as React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export interface ILogoutProps {
}

export default class Logout extends React.Component<ILogoutProps> {
  public render() {
    return (
      
        <div>
    
        <Button as={Link} to={"/Login"} contect="Logout" color="teal" fluid size="large">
           Logout
          </Button>
        
      </div>
    );
  }
}
