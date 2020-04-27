import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
// import {Link} from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Meethublogo from './imgLogin/meet-team.png';
// import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: 'teal',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }

  }),
);

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);
  const user: any []   = ["user","password"];
  const user1: any []   = ["moe","password1"];
  const user2: any []   = ["soham","password2"];
  const user3: any []   = ["ryan","password3"];
  const user4: any []   = ["olalekan","password4"];
   
  const handleLogin = () => {
    if( (username === user[0] && password === user[1])||(username===user1[0]&&password===user1[1])||(username===user2[0]&&password===user2[1])||(username===user3[0]&&password===user3[1])||(username===user4[0]&&password===user4[1])) {
      setError(false);
      setHelperText('Login Successfully');

  
    } else {
      setError(true);
      setHelperText('Incorrect username or password')
    }
  };

  const handleKeyPress = (e:any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  return (

    <React.Fragment>
      
       
      <form className={classes.container} noValidate autoComplete="off">
      
        <Card className={classes.card}>
        <CardActions>
        < Image className="panyet" src={Meethublogo} size='big'  />
        </CardActions>

        
          <CardHeader className={classes.header} title=  "Members' Login Page" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e)=>setUsername(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e)=>setPassword(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
             
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={()=>handleLogin()}
              disabled={isButtonDisabled}
              href="./NewsForm"
              >
              Login
              
          </Button>
          
          </CardActions>
          <CardActions>
          <Button   
                         
              variant="contained"
              size="large"
              color="secondary"
              href="./SignupForm">
              Go to the SignUp Page
              </Button>
           
          </CardActions>
          <CardActions>
                      ["user","password"];
                      ["moe","password1"];
                      ["soham","password2"];
                      ["ryan","password3"];
                      ["olalekan","password4"];

          </CardActions>

        </Card>
   

          
          
      </form>
    </React.Fragment>
  );
}

export default Login ;


