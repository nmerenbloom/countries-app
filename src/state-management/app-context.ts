import React, { Dispatch } from 'react';
import { AppState } from '../types/app-state';
import { Action } from './actions';

interface ContextObject {
    state: AppState;
    dispatch: Dispatch<any>
}

const CustomContext = React.createContext({} as ContextObject);

export function useCustomContext() {
    return React.useContext(CustomContext);
}

export default CustomContext;