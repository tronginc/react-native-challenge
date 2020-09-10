import React, {memo} from 'React';
import {Text} from '@app/ui';
import isEqual from 'react-fast-compare';
import {StyleSheet, View} from 'react-native';

const OnboardingComponent = () => {
  return (
    <View style={styles.flex}>
      <Text text="Text" />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Onboarding = memo(OnboardingComponent, isEqual);
