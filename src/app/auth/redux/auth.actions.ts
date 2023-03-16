import { createAction, props } from "@ngrx/store";

export const setToFalse = createAction('[Auth] SetToFalse')
export const setToTrue = createAction('[Auth] SetToTrue')

export const setEmail = createAction(
    '[Auth] SetEmail',
    props<{newEmail: string}>()
);