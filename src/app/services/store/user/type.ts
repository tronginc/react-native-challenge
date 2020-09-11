import * as Action from './actionType';

export type SignInDto = {
  username: string;
  password: string;
};

export type UserState = {
  token: string | null | undefined;
  isSigningIn: boolean;
  signingInError?: Error;
};

export interface ActionProps {
  type: keyof typeof Action;
  payload: any;
}
