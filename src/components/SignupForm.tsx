import React, { Component } from "react";
import { Button, Form, Grid, Segment, Header } from "semantic-ui-react";
import { RootState } from "../store/signupIndex";
import { addSignupToList } from "../store/action/signupAction";
import { Signup } from "../store/types/signupTypes";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


//add interface ISignupListProps which is passing ny props
export interface ISignupListProps {
  addSignupToList: typeof addSignupToList;
  signupList: Signup[];
}

export class SignupForm extends Component<ISignupListProps> {

  //for adding new Signup Detail into the Signup List whichis defined in reducer
  addSignup = (event: any) => {
    event.preventDefault();

    // Handle retrieval of username form field value.
    const formFieldUsername: HTMLInputElement | null = document.querySelector(
      '[name="username-input"]'
    );
    let formFieldValue: string = "";
    if (formFieldUsername !== null) formFieldValue = formFieldUsername.value;

    // Handle retrieval of password form field value.
    const formFieldPassword: HTMLInputElement | null = document.querySelector(
      '[name="password-input"]'
    );
    let formFieldValue1: string = "";
    if (formFieldPassword !== null) formFieldValue1 = formFieldPassword.value;

    // Handle retrieval of email form field value.
    const formFieldEmail: HTMLInputElement | null = document.querySelector(
      '[name="email-input"]'
    );
    let formFieldValue2: string = "";
    if (formFieldEmail !== null) formFieldValue2 = formFieldEmail.value;


    // Handle retrieval of "About Yourself" form field value.
    const formFieldAbout: HTMLTextAreaElement | null = document.querySelector(
      '[name="about-textarea"]'
    );
    let formFieldValue3: string = "";
    if (formFieldAbout !== null) formFieldValue3 = formFieldAbout.value;


    // Add new Signup Detail into Signup list.
    this.props.addSignupToList({
      username: formFieldValue,
      password: formFieldValue1,
      email: formFieldValue2,
      about: formFieldValue3
    });

    alert("You are signed up on MeetHub..Please press Login..");
    //fetching signupList toconsole for making sure data is added or not.
    console.log(this.props.signupList);
  };

  

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            WelCome to MeetHub / Create your account
          </Header>
          <Form size="large" onSubmit={this.addSignup} success>
            <Segment stacked>
              <Form.Input
                fluid
                required
                name="username-input"
                label="Username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                required
                name="password-input"
                label="Password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                required
                name="email-input"
                label="Email"
                icon="mail"
                iconPosition="left"
                placeholder="joe@schmoe.com"
                type="email"
              />
              <Form.TextArea 
                fluid
                required
                name="about-textarea" 
                label="About Yourself" 
                placeholder='Tell us more about you...' 
                type="textarea"/>

              <Button color="teal" fluid size="large" type="submit">
                SignUp
              </Button>
            </Segment>
          </Form>
          
          {/* This is button for to go login page from signup page.. */}
          <Button as={Link} to={"/Login"} contect="GoToLoginPage" color="teal" fluid size="large">
            GoToLoginPage
          </Button>

          {/* This is just showing list of */}
          <ul>
            {this.props.signupList.map((element) => (
              <li>
                {element.username}{"    |    "}
                {element.password}{"   |     "}
                {element.email}{"    |    "}
                {element.about}
              </li>
            ))}
          </ul>
        </Grid.Column>
      </Grid>
    );
  }
}

//Retrieve "Signup List" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
  return {
    signupList: state.signup.signupList, //this is signupList here is from signupReducer.ts
  };
};

//connect Redux and React using our values and view!!
export default connect(mapStateToProps, {
  addSignupToList,
})(SignupForm);
