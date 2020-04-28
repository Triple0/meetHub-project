import React, { Component } from 'react';
import { Input, Menu, Segment, Image, Container, Grid, Form } from 'semantic-ui-react';
import daniel from './imag/daniel.jpg';
import meetHubLogo from '../imgLogin/meetHubLogo.png';
import NavBarSearch from '../NavBarSearch';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { addSignupToList } from '../../store/action/signupAction';
import { Signup } from '../../store/types/signupTypes';

//add interface ISignupListProps which is passing ny props
export interface ISignupListProps {
    addSignupToList: typeof addSignupToList;
    signupList: Signup[];
}

export interface IState {
    isFound: boolean;
    activeItem: string;
    tempDataStore: Signup[];
    username: string;
    email: string;
    about: string;
    justData: Signup[];


}

export class ProfileSearchPage extends Component<ISignupListProps, IState> {
    constructor(prop: ISignupListProps) {
        super(prop);
        this.state = ({
            isFound: false,
            activeItem: 'Daniel',
            tempDataStore: [],
            justData: [],
            username:'',
            email: '',
            about: ''
        })

    }

    searchPage = (event: any) => {
        event.preventDefault();

        // Handle retrieval of user's search parameter using name of members value.
        const formFieldSearch: HTMLInputElement | null = document.querySelector(
            '[name="search-input"]'
        );
        let formFieldSearchValue: string = "";
        if (formFieldSearch !== null) formFieldSearchValue = formFieldSearch.value;

        // Initaiting my variables in state to hold relevant data
        
        let myTempStore: Signup[] = [];
        this.setState({tempDataStore: myTempStore});
        this.setState({justData: this.props.signupList});
        
        //Conduct my search in my store  
        myTempStore = this.state.justData.filter((element) => element.username === formFieldSearchValue);   
        
        
        //set my variable in my state to show a match has been found
    
        if (myTempStore.length > 0) {
            this.setState({ isFound: true,
                tempDataStore: myTempStore,
                username: myTempStore.map(element => element.username)[0],
                email: myTempStore.map(element => element.email)[0],
                about: myTempStore.map(element => element.about)[0]})
        }  
        
        console.log(this.props.signupList);

    }

    render() {

        return (
            <Grid>
                <Grid.Row centered>
                    <header className="App-header">
                        <img src={meetHubLogo} className="App-logo" alt="logo" />
                    </header>
                </Grid.Row>
                <Grid.Row centered>
                    <Container>
                        <NavBarSearch />
                        <Menu attached='top' tabular>
                            <Menu.Item
                                name="Member Profile"
                                active={this.state.activeItem === 'Daniel'}
                            />

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Form onSubmit={this.searchPage}>
                                        <Input
                                            placeholder='Search users...'
                                            name="search-input"
                                        />
                                        <Input
                                            type="submit"
                                            icon={{ name: 'search', link: true }}
                                        />
                                    </Form>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </Grid.Row>
                {this.state.isFound ?
                    <Grid.Row centered>
                        <Segment attached='bottom'>
                            < Image src={daniel} size='medium' floated='left' />
                            
                                <h1>{this.state.tempDataStore.map((element) => element.username)} </h1>
                                <p>was born on October 1968 during an human spaceflight mission carried out by the United States. It was the first mission in the United States' Apollo program to carry a crew into space. It was also the first U.S. spaceflight to carry astronauts since the flight of Gemini XII in November 1966. The email is <em></em>{this.state.tempDataStore.map((element) => element.email)}<em />. The AS-204 mission, also known as "Apollo 1", was intended to be the first crewed flight of the Apollo program. It was scheduled to launch in February 1967, but a fire in the cabin during a January 1967 test killed the crew. {this.state.tempDataStore.map((element) => element.about)}. Crewed flights were then suspended for 21 months, while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights of the Saturn V rocket and Apollo Lunar Module were made. Apollo 7 fulfilled Apollo 1's mission of testing the Apollo command and service module (CSM) in low Earth orbit.
                            </p>

                            <p>
                                Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                                definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                                phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                                phaedrum, vim vivendum maiestatis in.
                            </p>
                        </Segment>
                    </Grid.Row>

                    :

                    <Grid.Row centered>
                        <Grid>
                            <Grid.Row centered>
                                <h1>
                                    No Member's Detail to Display!
                        </h1>>
                        </Grid.Row>
                        </Grid>

                    </Grid.Row>

                }
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
export default connect(mapStateToProps, { addSignupToList })(ProfileSearchPage);