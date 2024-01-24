import {Actions, Selectors, State} from './types';

import {createSlice} from '@reduxjs/toolkit';

const initialState: State = {};

const userSlice = createSlice<State, Actions, 'userSlice'>({
	name: 'userSlice',
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload;
		},
		logout(state) {
			state.user = undefined;
		},
	},
});

export const userReducer = userSlice.reducer;

type Slice = {
	actions: typeof userSlice.actions;
	selectors: Selectors
}

export const userState: Slice = {
	actions: userSlice.actions,
	selectors: {
		user(state) {
			return state.userReducer.user;
		},
	},
};
