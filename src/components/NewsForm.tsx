import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Grid } from 'semantic-ui-react';
import { NewsFeed } from '../store/types/NewsFeed';
import NewsDisplay from './NewsDisplay';



export interface INewsFormProps {
    newsFeed: NewsFeed[];
}

export class NewsForm extends React.Component<INewsFormProps> {

    render() {
        return (

            <Grid centered>
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

