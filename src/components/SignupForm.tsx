import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Segment,
  Message,
  Header,
} from "semantic-ui-react";

import { RootState } from "../store/index";
import { addSignupToList } from "../store/action/signupAction";
import { Signup } from "../store/types/signupTypes";
import { connect } from "react-redux";

export interface ISignupListProps {
  addSignupToList: typeof addSignupToList;
  signupList: Signup[];
}

export class SignupForm extends Component<ISignupListProps> {
  //for adding new todo task into the whole Todo list
  addSignup = (event: any) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const formFieldUsername: HTMLInputElement | null = document.querySelector(
      '[name="username-input"]'
    );
    let formFieldValue: string = "";
    if (formFieldUsername !== null) formFieldValue = formFieldUsername.value;

    const formFieldPassword: HTMLInputElement | null = document.querySelector(
      '[name="password-input"]'
    );
    let formFieldValue1: string = "";
    if (formFieldPassword !== null) formFieldValue1 = formFieldPassword.value;

    const formFieldEmail: HTMLInputElement | null = document.querySelector(
      '[name="email-input"]'
    );
    let formFieldValue2: string = "";
    if (formFieldEmail !== null) formFieldValue2 = formFieldEmail.value;

    // Add new task into whole list.
    this.props.addSignupToList({
      username: formFieldValue,
      password: formFieldValue1,
      email: formFieldValue2,
    });
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
                placeholder="E-mail address"
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
              <Button color="teal" fluid size="large">
                SignUp
              </Button>
            </Segment>
            <Message
              success
              header="Form Submitted"
              content="You're all signed up for the MeetHub."
            />
          </Form>


          <ul>
            {this.props.signupList.map((element) => (
              <li>
                {element.username}
                {element.password}
                {element.email}
                {/* <Button 
                  size="mini" color="red"
                  onClick={(event) => this.deleteTask(element.id)}
                >X</Button> */}
              </li>
            ))}
          </ul>
        </Grid.Column>
      </Grid>
    );
  }
}

//Retrieve "todo list" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
  return {
    signupList: state.signup.signupList, //this is taskList fromreducer.ts
  };
};

//connect Redux and React using our values and view!!
export default connect(mapStateToProps, {
  addSignupToList,
})(SignupForm);
