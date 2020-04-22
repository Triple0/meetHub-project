import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Grid
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
      email: formFieldValue2
    });
  };

  render() {
    //const { value }= this.state;
    return (
      <Grid>
      <Form onSubmit={this.addSignup}>
        <Form.Field
          control={Input}
          name="username-input"
          label="Username"
          placeholder="Username"
          error="Please enter your user name"
        />
        <Form.Field
          control={Input}
          name="password-input"
          label="Password"
          placeholder="Password"
          error="Please enter your Password"
        />
        <Form.Field
          name="email-input"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          error="Please enter a valid email address"
        />
        
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      <Grid.Row>
          <ul>
            {this.props.signupList.map((element) => (
              <li>
                {element.username}{element.password}{element.email}
                {/* <Button 
                  size="mini" color="red"
                  onClick={(event) => this.deleteTask(element.id)}
                >X</Button> */}
              </li>  
            ))}
          </ul>
        </Grid.Row>
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
