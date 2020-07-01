import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      textOnPrimary: string;
      textOnSecundary: string;
    };
  }
}
