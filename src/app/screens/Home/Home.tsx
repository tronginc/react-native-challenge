import React, { memo } from 'react';
import { Block, Text } from '@app/ui';
import isEqual from 'react-fast-compare';

const HomeComponent = () => {
  return (
    <Block flex={1} alignItems="center" justifyContent="center">
      <Text>HOME</Text>
    </Block>
  );
};

export const Home = memo(HomeComponent, isEqual);
