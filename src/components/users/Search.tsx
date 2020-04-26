import React, {ChangeEvent, FormEvent, useState} from 'react';
import {IGithubContext, withGithubContext} from "../../context/github/githubContext";
import {IAlertContext, withAlertContext} from "../../context/alert/alertContext";

interface IProps {
    githubContext: IGithubContext;
    alertContext: IAlertContext;
}

const Search : React.FC<IProps> = ({githubContext, alertContext}) => {
    const [text, setText] = useState<string>('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid(text)) {
            githubContext.searchUsers(text);
            setText('');
        } else {
            alertContext.setAlert('Please enter something', 'light');
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

    const isFormValid = (text: string): boolean => {
        return text !== '';
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block'/>
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}

        </div>
    );
}

export default withGithubContext(withAlertContext(Search));