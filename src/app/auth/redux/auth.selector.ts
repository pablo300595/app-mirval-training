import { createSelector } from '@ngrx/store';

export interface FeatureState {
    userIsLoged: boolean;
}

export interface AppState {
    feature: FeatureState;  
}

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.userIsLoged
);