import * as Action from './actionType';
import produce from 'immer';
import { UserState, ActionProps } from '@app/service/store/user/type';

const initialUserState: UserState = {
  token: null,
  isSigningIn: false,
  signingInError: undefined,
};

export default produce(
  (draftState: UserState, { type, payload }: ActionProps) => {
    switch (type) {
      case Action.SIGN_IN_START:
        draftState.isSigningIn = true;
        draftState.signingInError = undefined;
        break;
      case Action.SIGN_IN_SUCCESS:
        draftState.token = payload.token;
        draftState.isSigningIn = false;
        break;
      case Action.SIGN_IN_FAILED:
        draftState.isSigningIn = false;
        draftState.signingInError = payload;
        break;
    }
  },
  initialUserState,
);
