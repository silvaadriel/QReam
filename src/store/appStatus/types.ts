export enum AppStatusTypes {
  CHANGE_APP_THEME = '@appStatus/CHANGE_APP_THEME',
}

export interface AppStatusState {
  readonly theme: 'light' | 'dark';
}
