import { produce } from 'immer';
import { SET_USER_ACTIVITY, SET_USER_CALORIES_CONSUMED, SET_USER_WEIGHT_ENTRIES } from './constants';

export const initialState = {
  activity: null,
  consumedCalories: null,
  weightEntries: null,
};

export const storedKey = [];

const dashboardReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER_ACTIVITY:
        draft.activity = action.activity;
        break;
      case SET_USER_CALORIES_CONSUMED:
        draft.consumedCalories = action.consumedCalories;
        break;
      case SET_USER_WEIGHT_ENTRIES:
        draft.weightEntries = action.weightEntries;
        break;
    }
  });

export default dashboardReducer;
