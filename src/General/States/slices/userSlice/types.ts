import {RootState} from '../../store';

import {Payload, User} from '@requestum/general';

export type State = {
  user?: User
};

export type Actions = {
  login: (state: State, action: Payload<User>) => void;
  logout: (state: State) => void
};

export type Selectors = {
	user: (state: RootState) => User | undefined
}
