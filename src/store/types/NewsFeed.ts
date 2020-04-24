export interface NewsFeed {
    userId: number,
    id: number,
    title: string,
    body: string,
    thumbnailUrl: string
}

export interface NewsFeedState {
    newsFeed: NewsFeed[]
}

export const ADD_NEWSFEED = 'ADD_NEWSFEED';

interface AddNewsFeedToList {
    type: typeof ADD_NEWSFEED,
    payload: NewsFeed
}

export type ActionTypes = AddNewsFeedToList;