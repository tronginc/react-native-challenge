import {enhance} from '@app/common';
import {FontSizeDefault} from '@app/theme';
import {FontDefault} from '@app/theme';
import React, {memo, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as ReactNativeText,
  TextStyle,
} from 'react-native';
import isEqual from 'react-fast-compare';
import {TextProps} from './Text.props';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const TextComponent = (props: TextProps) => {
  const {
    text,
    children,
    flex,
    fontSize = 'FONT_13',
    fontWeight,
    fontFamily,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    width,
    height,
    alignItems,
    alignSelf,
    color,
    center,
    textAlignVertical,
    textTransform,
    textAlign,
    style: styleOverride = {},
    ...rest
  } = props;

  const styleComponent = useMemo(
    () =>
      enhance([
        [
          flex && styles.flex,
          margin && {margin},
          fontSize && {fontSize: FontSizeDefault[fontSize]},
          fontWeight && {fontWeight},
          fontFamily && {fontFamily: FontDefault[fontFamily]},
          marginLeft && {marginLeft},
          marginRight && {marginRight},
          marginTop && {marginTop},
          marginBottom && {marginBottom},
          padding && {padding},
          paddingHorizontal && {paddingHorizontal},
          paddingRight && {paddingRight},
          paddingBottom && {paddingBottom},
          paddingLeft && {paddingLeft},
          paddingTop && {paddingTop},
          paddingVertical && {paddingVertical},
          width && {width},
          height && {height},
          color && {color: color},
          center && {textAlign: 'center'},
          textAlign && {textAlign},
          alignItems && {alignItems},
          alignSelf && {alignSelf},
          textTransform && {textTransform},
          textAlignVertical && {textAlignVertical},
          enhance([styleOverride]),
        ] as StyleProp<TextStyle>,
      ]),
    [
      flex,
      fontSize,
      fontWeight,
      fontFamily,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      padding,
      paddingHorizontal,
      paddingVertical,
      width,
      height,
      color,
      center,
      paddingRight,
      paddingBottom,
      paddingLeft,
      alignItems,
      alignSelf,
      paddingTop,
      textAlignVertical,
      textTransform,
      textAlign,
      styleOverride,
    ],
  );
  return (
    <ReactNativeText allowFontScaling={false} {...rest} style={styleComponent}>
      {children || text || ''}
    </ReactNativeText>
  );
};
export const Text = memo(TextComponent, isEqual);
