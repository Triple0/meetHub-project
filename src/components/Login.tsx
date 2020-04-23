import * as React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export interface ILoginProps {
}

export default class Login extends React.Component<ILoginProps> {
  public render() {
    return (
      <div>
        <h1>Login Page </h1>
        
        <Button as={Link} to={"/SignupForm"} contect="GoToSignupForm" color="teal" fluid size="large">
            GoToSignupForm
        </Button>
      </div>
    );
  }
}

