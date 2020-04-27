import React from 'react';
import { Button, Sticky, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavButtons = () => (
  <Container>
  <Sticky>
    <Button.Group size='huge' fluid  color= 'teal' >
      
      <Button as={Link} to={`/Home`} content="GoToNewsFeedPage">Home</Button>

      <Button as={Link} to={`/Profile`} content="Profile Page">Members' Profile</Button>

      <Button as={Link} to={`/Login`} content="Login Page">Logout</Button>

    </Button.Group>
  </Sticky>
  </Container>
    
  )

  export default NavButtons