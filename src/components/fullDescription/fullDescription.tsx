import React, { Component } from 'react'
import { Input, Menu, Segment, Image, Container } from 'semantic-ui-react'
import daniel from './imag/daniel.jpg'
import A7 from './imag/A7.jpg'
import Meethublogo from './imag/Meethublogo.png'


export default class MenuExampleTabularOnTop extends Component {
    state = { activeItem: 'Daniel' }

    //   handleItemClick = (e: MouseEvent , { name }:aaaa) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Container>
                <Menu attached='top' tabular>
                    <Menu.Item
                        name='Meethublogo'
                        active={activeItem === 'Daniel'}
                    // onClick={this.handleItemClick}
                    />
                    {/* <Menu.Item
                        name=' '
                        active={activeItem === ' '}
                    onClick={this.handleItemClick}
                    /> */}
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input
                                icon={{ name: 'search', link: true }}
                                placeholder='Search users...'
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment attached='bottom'>
                    < Image src={Meethublogo} size='medium' floated='left' />
                    <p>
                        Apollo 7 was an October 1968 human spaceflight mission carried out by the United States. It was the first mission in the United States' Apollo program to carry a crew into space. It was also the first U.S. spaceflight to carry astronauts since the flight of Gemini XII in November 1966. The AS-204 mission, also known as "Apollo 1", was intended to be the first crewed flight of the Apollo program. It was scheduled to launch in February 1967, but a fire in the cabin during a January 1967 test killed the crew. Crewed flights were then suspended for 21 months, while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights of the Saturn V rocket and Apollo Lunar Module were made. Apollo 7 fulfilled Apollo 1's mission of testing the Apollo command and service module (CSM) in low Earth orbit.
                        </p>

                    <p>
                        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                        phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                        phaedrum, vim vivendum maiestatis in.
                        </p>
                </Segment>
                </Container>
            </div>
        )
    }
}