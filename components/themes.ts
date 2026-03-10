import { DarkTheme, DefaultTheme, useTheme as useThemeBase } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  barStyle: 'dark-content',
  scanImage: require('../img/scan.png'),
  colors: {
    ...DefaultTheme.colors,
    borderWidth: 0.5,
    brandingColor: '#ffffff',
    customHeader: '#ffffff',
    foregroundColor: '#3D2914',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    buttonBackgroundColor: '#FFF3E0',
    buttonTextColor: '#3D2914',
    secondButtonTextColor: '#50555C',
    buttonAlternativeTextColor: '#D4790E',
    buttonDisabledBackgroundColor: '#eef0f4',
    buttonDisabledTextColor: '#9aa0aa',
    inputBorderColor: '#E0C9A6',
    inputBackgroundColor: '#FFF8F0',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#D4790E',
    buttonBlueBackgroundColor: '#FFF3E0',
    buttonGrayBackgroundColor: '#EEEEEE',
    incomingBackgroundColor: '#FFF3E0',
    incomingForegroundColor: '#D4790E',
    outgoingBackgroundColor: '#f8d2d2',
    outgoingForegroundColor: '#d0021b',
    successColor: '#D4790E',
    failedColor: '#ff0000',
    placeholderTextColor: '#81868e',
    shadowColor: '#000000',
    inverseForegroundColor: '#ffffff',
    hdborderColor: '#F7931A',
    hdbackgroundColor: '#FFF8F0',
    lnborderColor: '#FFB600',
    lnbackgroundColor: '#FFFAEF',
    background: '#FFFFFF',
    lightButton: '#FFF3E0',
    ballReceive: '#FFF3E0',
    ballOutgoing: '#f8d2d2',
    lightBorder: '#F0E6D8',
    ballOutgoingExpired: '#EEF0F4',
    modal: '#ffffff',
    formBorder: '#E0C9A6',
    modalButton: '#FFF3E0',
    darkGray: '#9AA0AA',
    scanLabel: '#9AA0AA',
    feeText: '#81868e',
    feeLabel: '#FFF3E0',
    feeValue: '#D4790E',
    feeActive: '#FFF3E0',
    labelText: '#81868e',
    cta2: '#3D2914',
    outputValue: '#3D2914',
    elevated: '#ffffff',
    mainColor: '#FFF3E0',
    success: '#FFF3E0',
    successCheck: '#D4790E',
    msSuccessBG: '#D4790E',
    msSuccessCheck: '#ffffff',
    newBlue: '#F7931A',
    redBG: '#F8D2D2',
    redText: '#D0021B',
    changeBackground: '#FDF2DA',
    changeText: '#F38C47',
    receiveBackground: '#D1F9D6',
    receiveText: '#D4790E',
    navigationBarColor: '#FFFFFF',
    androidRippleColor: '#F0E6D8',
  },
};

export type Theme = typeof BlueDefaultTheme;

export const BlueDarkTheme: Theme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  barStyle: 'light-content',
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    customHeader: '#1A1207',
    brandingColor: '#1A1207',
    borderTopColor: '#9aa0aa',
    background: '#1A1207',
    foregroundColor: '#ffffff',
    buttonDisabledBackgroundColor: '#3A3A3C',
    buttonBackgroundColor: '#3D2914',
    buttonTextColor: '#ffffff',
    lightButton: 'rgba(247,147,26,.15)',
    buttonAlternativeTextColor: '#F7931A',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#F7931A',
    ballReceive: '#2A2015',
    ballOutgoing: '#2A2015',
    lightBorder: '#3D2914',
    ballOutgoingExpired: '#2A2015',
    modal: '#2A2015',
    formBorder: '#3D2914',
    inputBackgroundColor: '#2A2015',
    modalButton: '#1A1207',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#1A1207',
    feeActive: 'rgba(247,147,26,.2)',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#2A2015',
    mainColor: '#F7931A',
    success: '#2A2015',
    successCheck: '#F7931A',
    buttonBlueBackgroundColor: '#2A2015',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    msSuccessBG: '#8EFFE5',
    msSuccessCheck: '#1A1207',
    newBlue: '#F7931A',
    redBG: '#5A4E4E',
    redText: '#FC6D6D',
    changeBackground: '#5A4E4E',
    changeText: '#F38C47',
    receiveBackground: 'rgba(247,147,26,.2)',
    receiveText: '#F7931A',
    navigationBarColor: '#2A2015',
    androidRippleColor: '#3D2914',
  },
};

// Casting theme value to get autocompletion
export const useTheme = (): Theme => useThemeBase() as Theme;

export class BlueCurrentTheme {
  static colors: Theme['colors'];
  static closeImage: Theme['closeImage'];
  static scanImage: Theme['scanImage'];

  static updateColorScheme(): void {
    const isColorSchemeDark = Appearance.getColorScheme() === 'dark';
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
  }
}

BlueCurrentTheme.updateColorScheme();
