import * as React from 'react';

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import {IGithubContext, withAppContext} from '../../context/github/githubContext';

interface IProps {
    githubContext: IGithubContext
}

const Users: React.FC<IProps> = (props) => {
    const {loading, users} = props.githubContext;
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map((user => (
                    <UserItem key={user.id} user={user}/>
                )))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1ram'
}

export default withAppContext(Users);