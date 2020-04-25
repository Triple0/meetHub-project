import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Grid  } from 'semantic-ui-react';
import { NewsFeed } from '../store/types/NewsFeed';
import NewsDisplay  from './NewsDisplay';


export interface INewsFormProps {
    newsFeed: NewsFeed[];
}

export class NewsForm extends React.Component<INewsFormProps> {
    // generateID(): number {
    //     return this.props.newsFeed.length + 1;
    // }


   
    render() {
        return (

            <Grid centered>
                <Grid.Row centered>
                    <h1>NewsFeed</h1>
                </Grid.Row>

                <Grid.Row centered>
                    <ul className="listing">
                        <li><h3>News on the Hour</h3></li>
                        <li><h5><em>tick off (only appears when you hover at the end of each task) each task to remove from list</em></h5></li>
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

