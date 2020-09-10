import React, { memo } from 'react';
import { Block, Text } from '@app/ui';
import isEqual from 'react-fast-compare';

const LoginComponent = () => {
  return (
    <Block flex={1} alignItems="center" justifyContent="center">
      <Text>LOGIN</Text>
    </Block>
  );
};

export const Login = memo(LoginComponent, isEqual);
