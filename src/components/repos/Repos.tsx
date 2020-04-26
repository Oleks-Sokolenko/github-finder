import * as React from 'react';

import RepoItem from './RepoItem';
import {IGithubContext, withGithubContext} from "../../context/github/githubContext";

interface IProps {
    githubContext: IGithubContext
}

const Repos: React.FC<IProps> = (props) => {
    const {repos} = props.githubContext;
    return (
        <React.Fragment>
            {repos.slice(0, 5).map(repo => <RepoItem key={repo.id} repo={repo}/>)}
        </React.Fragment>
    );
}

export default withGithubContext(Repos);