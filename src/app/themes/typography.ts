import {FontFamily as FontType} from '@app/common';

export const FontDefault: FontType = {
  primary: 'Roboto-Medium',
  secondary: 'Roboto-Medium',
};
export type FontFamily = keyof typeof FontDefault;
