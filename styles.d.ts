import 'styled-components/native';

declare module 'styled-components/native' {
  export type FontsValue = 'Montserrat-Bold' | 'Montserrat-Medium' | 'Montserrat-Regular' | 'Montserrat-SemiBold';
  export type FontKey = 'bold' | 'medium' | 'regular' | 'semiBold';

  export type Fonts = Record<FontKey, FontsValue>;

  export type Colors = {
  	mahenta: '#EB0057';
  	mahenta50: '#EB005750';
  	mahenta0: '#EB005700';
  	white: '#FFFFFF';
  	dark: '#262727';
  	lightGrey: '#818181'
  };

  export interface DefaultTheme {
    windowHeight: number,
    windowWidth: number,
    colors: Colors,
    fonts: Fonts
  }
}
