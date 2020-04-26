import * as React from "react";
import IAlert from "../../components/layout/IAlert";

export interface IAlertContext {
    alert: IAlert | null;

    setAlert(message: string, type: string): void;
}

interface IContextProps {
    alertContext?: IAlertContext;
}

const ctxt = React.createContext<IAlertContext | null>(null);

export const AlertContextProvider = ctxt.Provider;
export const AlertContextConsumer = ctxt.Consumer;

export const withAlertContext = <P extends IContextProps>(Component: React.ComponentType<P>):
    React.FC<Omit<P, keyof IContextProps>> => (props) => (
    <AlertContextConsumer>
        {value => <Component {...props as P} alertContext={value}/>}
    </AlertContextConsumer>
);


