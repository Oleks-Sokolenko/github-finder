import * as React from 'react';
import IUser from "../../components/users/IUser";
import IRepo from "../../components/repos/IRepo";

export interface IGithubContext {
    users: IUser[];
    user: IUser;
    repos: IRepo[];
    loading: boolean;
    searchUsers(username: string): void;
    clearUsers(event: React.MouseEvent<HTMLButtonElement>): void;
    getUser(username: string): void;
    getUserRepos(username: string): void;
}

interface IContextProps {
    githubContext?: IGithubContext;
}

const ctxt = React.createContext<IGithubContext | null>(null);

export const GithubContextProvider = ctxt.Provider;

export const GithubContextConsumer = ctxt.Consumer;

export const withAppContext = <P extends IContextProps>(Component: React.ComponentType<P>):
    React.FC<Omit<P, keyof IContextProps>> => (props) => (
        <GithubContextConsumer>
            {value => <Component {...props as P} githubContext={value}/>}
        </GithubContextConsumer>
);