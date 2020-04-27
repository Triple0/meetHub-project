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
export const DELETE_NEWSFEED = 'DELETE_NEWSFEED';


interface DeleteNewsFeed {
    type: typeof DELETE_NEWSFEED,
    payload: number
}

interface AddNewsFeed {
    type: typeof ADD_NEWSFEED,
    payload: NewsFeed
}

export type ActionTypes = AddNewsFeed | DeleteNewsFeed;