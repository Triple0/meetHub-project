/*https://www.npmjs.com/package/@types/react-paginate
* https://www.bitdegree.org/learn/javascript-setinterval
*
*/
import React from 'react';
import { Feed, Icon, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { NewsFeed } from '../store/types/NewsFeed';


export interface INewsDisplayProps {
    newsFeed: NewsFeed[];
}

export interface IState {
    interval: any;
    outputSelector: number;
    counter: number;

}

export class NewsDisplay extends React.Component<INewsDisplayProps, IState> {

    constructor(prop: INewsDisplayProps) {
        super(prop);
        // let count = 0;
        this.state = ({
            interval: 0,
            outputSelector: 1,
            counter: 0
        });
    }

    dateHandler(): string {
        let postDate = new Date();
        return postDate.getHours() + ":" + postDate.getMinutes();

    }

    // This function generates number randomly that is used to automate newsfeed selection
    timer = () => {
        this.setState({
            outputSelector: Math.floor((Math.random() * 5) + 1)
        });
    }

    //This determines how long the selected newsfeed will displayed
    componentDidMount() {
        this.setState({ interval: setInterval(() => { this.timer() }, 10000) });
    }

    //This determines how long the selected newsfeed will be displayed
    componentWillUnmount() {
        this.setState({ interval: clearInterval() });
    }

    //This outputs the newsfeed based the selection of the randomised output selector 
    displayOutput = (id: number) => {
        let content = this.props.newsFeed.filter((newsfeed) => newsfeed.userId === id);
        
        return (
            <Feed className="newsDisplay">
                {content.map((newsfeed) =>
                    <Feed.Event id={newsfeed.id}>
                        <Feed.Label image={newsfeed.thumbnailUrl} />
                        <Feed.Content>
                            <Feed.Summary>
                                <h3><a href="!#">{newsfeed.title}</a></h3> posted at
          <Feed.Date>{this.dateHandler()} Hrs</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra text>
                                {newsfeed.body}
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like'/>{newsfeed.userId + Math.floor((Math.random() * 100) + 1)} Likes
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>

                )}
            </Feed>

        );


    }
    render() {

        return (
            < Grid >
                <Grid.Row centered>
                    {this.displayOutput(this.state.outputSelector)}
                </Grid.Row>
                <Grid.Row centered>
                    {this.state.outputSelector}
                </Grid.Row>
            </Grid >
        );
    }

}

const mapStateToProps = (state: RootState) => {
    return {
        newsFeed: state.newsFeed.newsFeed
    }
}

export default connect(mapStateToProps)(NewsDisplay);