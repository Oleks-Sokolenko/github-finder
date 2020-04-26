import * as React from 'react';
import {IAlertContext, withAlertContext} from "../../context/alert/alertContext";

interface IProps {
    alertContext: IAlertContext
}

const AlertComponent : React.FC<IProps> = (props) => {
    const {alert} = props.alertContext;
    return alert !== null ?
        <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle">{alert.msg}</i>
        </div>
        : <React.Fragment/>
}

export const Alert = withAlertContext(AlertComponent);
