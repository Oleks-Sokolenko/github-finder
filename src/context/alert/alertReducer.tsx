import IAlert from "../../components/layout/IAlert";
import {REMOVE_ALERT, SET_ALERT} from "../types";

interface State {
    alert: IAlert | null;
}

export const initialAlertState: State = {
    alert: null
}

type SetAlert = { type: "SET_ALERT", payload: IAlert };
type RemoveAlert = { type: "REMOVE_ALERT" };

type Action = SetAlert | RemoveAlert;

const AlertReducer = (state: State, action: Action) : State => {
    switch (action.type) {
        case SET_ALERT:
            return {...state, alert: action.payload};
        case REMOVE_ALERT:
            return {...state, alert: null};
        default:
            return state;
    }
}

export default AlertReducer;
