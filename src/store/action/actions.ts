import {
    ActionTypes,
    ADD_NEWSFEED,
    NewsFeed } from '../types/NewsFeed';

export function addNewsFeed ( newsFeed: NewsFeed ): ActionTypes {
    return {
        type: ADD_NEWSFEED,
        payload: newsFeed
    }
}