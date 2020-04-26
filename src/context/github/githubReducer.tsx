import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from '../types';
import IUser from "../../components/users/IUser";
import IRepo from "../../components/repos/IRepo";

interface State {
    users: IUser[],
    user: IUser,
    repos: IRepo[],
    loading: boolean
}

export const initialGitState : State = {
    users: [],
    user: {},
    repos: [],
    loading: false
}

type SearchUsers = { type: "SEARCH_USERS", payload: IUser[] }
type GetUser = { type: "GET_USER", payload: IUser }
type ClearUsers = { type: "CLEAR_USERS" }
type GetRepos = {type: "GET_REPOS", payload: IRepo[]}
type SetLoading = {type: "SET_LOADING"}

type Action = SearchUsers | GetUser | ClearUsers | GetRepos | SetLoading;

const GithubReducer = (state: State, action: Action) : State =>{
    switch (action.type) {
        case SEARCH_USERS:
            return {...state, users: action.payload, loading: false};
        case CLEAR_USERS:
            return {...state, users: [], loading: false};
        case GET_USER:
            return {...state, user: action.payload, loading: false};
        case GET_REPOS:
            return {...state, repos: action.payload, loading: false};
        case SET_LOADING:
            return {...state, loading: true};
        default:
            return state;
    }
}

export default GithubReducer;