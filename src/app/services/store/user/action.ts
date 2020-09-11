import * as Action from './actionType';
import { SignInDto } from './type';

export const onSignIn = (payload: SignInDto) => ({
  type: Action.SIGN_IN_START,
  payload,
});
