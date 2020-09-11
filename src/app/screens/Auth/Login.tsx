import React, { memo, useEffect } from 'react';
import { Block, Text } from '@app/ui';
import isEqual from 'react-fast-compare';
import { useDispatch } from 'react-redux';
import { onSignIn } from '@app/service/store/user/action';

const LoginComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      onSignIn({
        username: 'tronginc',
        password: 'Peyendiculilesa1',
      }),
    );
  }, [dispatch]);
  return (
    <Block flex={1} alignItems="center" justifyContent="center">
      <Text>LOGIN</Text>
    </Block>
  );
};

export const Login = memo(LoginComponent, isEqual);
