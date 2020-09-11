import { SignInDto } from '@app/service/store/user/type';
import { request } from '../../../configs/request';

export const signIn = (payload: SignInDto) => {
  return request.post('/user/login', payload);
};
