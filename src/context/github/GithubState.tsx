import React, {MouseEvent, ReactNode, useReducer} from 'react';
import axios from 'axios';
import {GithubContextProvider, IGithubContext} from './githubContext';
import GithubReducer , {initialGitState} from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types';

interface IProp {
    children?: ReactNode,
}

const GithubState = (props: IProp) => {
    const [state, dispatch] = useReducer(GithubReducer, initialGitState);

    const setLoading = () => dispatch({type: SET_LOADING});

    const searchUsers = async (text: string) => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&
            client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`
        );
        dispatch({type: SEARCH_USERS, payload: res.data.items});
    }

    const getUser = async (username: string) => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${username}?
            client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`
        );
        dispatch({type: GET_USER, payload: res.data});
    }

    const getUserRepos = async (username: string) => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?
            per_page=5&
            sort=created:desc&
            client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`
        );
        dispatch({type: GET_REPOS, payload: res.data});
    }

    const clearUsers = (event: MouseEvent<HTMLButtonElement>): void => dispatch({type: CLEAR_USERS});

    const contextValue: IGithubContext = {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
    }

    return (<GithubContextProvider value={contextValue}>{props.children}</GithubContextProvider>);
}

export default GithubState;