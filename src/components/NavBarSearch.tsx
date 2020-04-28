import React from 'react';
import { Button, Sticky, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBarSearch = () => (
  <Container>
  <Sticky>
    <Button.Group size='huge' fluid  color= 'teal' >
      
      <Button as={Link} to={`/NewsForm`} content="NewsFeed Page">News</Button>

      <Button as={Link} to={`/Login`} content="Login Page">Logout</Button>

    </Button.Group>
  </Sticky>
  </Container>
    
  )

  export default NavBarSearch