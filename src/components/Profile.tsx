import * as React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export interface IProfilesProps {
}

export default class Profiles extends React.Component<IProfilesProps> {
  public render() {
    return (
      <div>
        <h1>Profiles Page </h1>
        
        <Button as={Link} to={"/NewsForm"}contact="GoToProfileForm" color="teal" fluid size="large">
            GoToProfileForm
        </Button>
      </div>
    );
  }
}