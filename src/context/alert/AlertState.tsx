import * as React from "react";
import {useReducer} from "react";
import AlertReducer, {initialAlertState} from "./alertReducer";
import {REMOVE_ALERT, SET_ALERT} from "../types";
import {AlertContextProvider, IAlertContext} from "./alertContext";

interface IProps {
    children?: React.ReactNode;
}

const AlertState = (props: IProps) => {
    const [state, dispatch] = useReducer(AlertReducer, initialAlertState);

    const setAlert = (message: string, type: string) => {
        dispatch({type: SET_ALERT, payload: {msg: message, type: type}});
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 3000);
    }

    const contextValue : IAlertContext = {
        alert: state.alert,
        setAlert
    }

    return (<AlertContextProvider value={contextValue}> {props.children}</AlertContextProvider>)
}

export default AlertState;