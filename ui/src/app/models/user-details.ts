
export interface Tweet {
    id: number;
    userId: number;
    text: string;
    userName: string;
    tweetDate: Date;
    firstName: string;
    lastName: string;
    likes: number;
    user: string;
    userNameNavigation: string;
    comments: string[];
}

export interface Comment {
    id: number;
    tweetId: number;
    userName: string;
    comments: string;
    date: Date;
    tweet: Tweet;
    userNameNavigation: string;
}

export interface TweetUserNameNavigation {
    id: number;
    userId: number;
    text: string;
    userName: string;
    tweetDate: Date;
    firstName: string;
    lastName: string;
    likes: number;
    user: string;
    userNameNavigation: string;
    comments: string[];
}

export interface TweetUser {
    id: number;
    userId: number;
    text: string;
    userName: string;
    tweetDate: Date;
    firstName: string;
    lastName: string;
    likes: number;
    user: string;
    userNameNavigation: string;
    comments: string[];
}

export interface UserInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    contactNumber: number;
    userName: string;
    imageName: string;
    comments: Comment[];
    tweetUserNameNavigations: TweetUserNameNavigation[];
    tweetUsers: TweetUser[];
}

export interface UserDetails {
    userInfo: UserInfo;
}

