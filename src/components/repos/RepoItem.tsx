import React from 'react';
import IRepo from "./IRepo";

interface IProps {
    repo: IRepo
}


const RepoItem = (props: IProps) => {
    const {html_url, name} = props.repo;
    return (
        <div className='card'>
            <h3>
                <a href={html_url}>{name}</a>
            </h3>
        </div>
    );
}

export default RepoItem;