import {
    ActionTypes,
    ADD_NEWSFEED,DELETE_NEWSFEED,
    NewsFeed } from '../types/NewsFeed';

export function addNewsFeed ( newsFeed: NewsFeed ): ActionTypes {
    return {
        type: ADD_NEWSFEED,
        payload: newsFeed
    }
}

export function deleteNewsFeed( id: number ): ActionTypes{
    return {
        type: DELETE_NEWSFEED,
        payload: id
    }
}