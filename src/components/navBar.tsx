  
import React from 'react';
import { Button, Sticky, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const NavButtons = () => (
  <Container>
  <Sticky>
    <Button.Group size='huge' fluid  color= 'teal' >
      <Button>Meethub</Button>
      <Button  
      // as={Link} /import Home from 
      to={`/Home`}
      content="GoToHomPage">Home
      </Button>

      <Button>Whatever</Button>

      <Button
      // as={Link} need /import List from 
      to={`/List`}
      content="ToList">List
      </Button>

      <Button>Logout</Button>

    </Button.Group>
  </Sticky>
  </Container>
    
  )

  export default NavButtons