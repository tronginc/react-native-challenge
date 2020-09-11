import { ThemeType } from '@app/theme';
import * as Action from './actionType';

export interface AppState {
  internetState: boolean;
  theme: ThemeType;
  loading: boolean;
}

export interface ActionProps {
  type: keyof typeof Action;
  payload: any;
}
