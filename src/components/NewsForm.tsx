import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Grid } from 'semantic-ui-react';
import { NewsFeed } from '../store/types/NewsFeed';
import NewsDisplay from './NewsDisplay';
import NavBar from './NavBar';
import meetHubLogo from './logo/meetHubLogo.png';



export interface INewsFormProps {
    newsFeed: NewsFeed[];
}

export class NewsForm extends React.Component<INewsFormProps> {

    render() {
        return (

            <Grid centered>
                <Grid.Row centered>
                    <header className="App-header">
                        <img src={meetHubLogo} className="App-logo" alt="logo" />
                    </header>
                </Grid.Row>
                <Grid.Row centred>
                    <NavBar />
                </Grid.Row>
                <Grid.Row centered>
                    <h1>NewsFeed</h1>
                </Grid.Row>

                <Grid.Row centered>
                    <ul className="listing">
                        <li><h3>News on the Hour</h3></li>
                    </ul>
                </Grid.Row>
                <Grid.Row centered>
                    <NewsDisplay />
                </Grid.Row>
            </Grid>
        );
    }

}

const mapStateToProps = (state: RootState) => {
    return {
        newsFeed: state.newsFeed.newsFeed
    }
}

export default connect(mapStateToProps)(NewsForm);

