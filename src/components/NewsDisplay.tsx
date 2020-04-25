import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { NewsFeed } from '../store/types/NewsFeed';


export interface INewsDisplayProps {
    newsFeed: NewsFeed[];
}

export class NewsDisplay extends React.Component<INewsDisplayProps> {

    dateHandler(): string {
        let postDate = new Date();
        return postDate.getHours() + ":" + postDate.getMinutes();

    }



    render() {
        return (
            <Feed className="newsDisplay">
                {this.props.newsFeed.map((newsfeed) => (
                    <Feed.Event id={newsfeed.id}>
                        <Feed.Label image={newsfeed.thumbnailUrl} />
                        <Feed.Content>
                            <Feed.Summary>
                                <a>{newsfeed.title}</a> posted on
      <Feed.Date>{this.dateHandler()} Hrs</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra text>
                                {newsfeed.body}
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                <Icon name='like' />{newsfeed.userId+Math.floor((Math.random() * 100) + 1)} Likes
      </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                ))}
            </Feed>

        );
    }


}
const mapStateToProps = (state: RootState) => {
    return {
        newsFeed: state.newsFeed.newsFeed
    }
}

export default connect(mapStateToProps)(NewsDisplay);