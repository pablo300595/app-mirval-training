import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "./auth.actions";

export interface AuthState{
    isLoged: boolean,
    currentEmail: string
}

export const initialState = {
    isLoged: false,
    currentEmail: ''
};

const _authReducer = createReducer(initialState,
    on(actions.setToFalse, state => generateStateForIsLoged(state, false)),
    on(actions.setToTrue, state => generateStateForIsLoged(state, true)),
    on(actions.setEmail, (state, {newEmail}) => generateStateForCurrentEmail(state, newEmail) )
);

function generateStateForIsLoged(currentState: AuthState, newLogStatus: boolean): AuthState{
    return {
        isLoged: newLogStatus,
        currentEmail: currentState.currentEmail
    };
}

function generateStateForCurrentIndex(currentState: AuthState, index: number): AuthState {
    return {
        isLoged: currentState.isLoged,
        currentEmail: currentState.currentEmail
    };
}

function generateStateForCurrentEmail(currentState: AuthState, newEmail: string) {
    return {
        isLoged: currentState.isLoged,
        currentEmail: newEmail
    }
}

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}
