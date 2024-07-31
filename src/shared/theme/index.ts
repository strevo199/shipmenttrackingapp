import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { Dimensions } from "react-native";

import darkMode from "./darkMode";
import { palette } from "./palette";
import type { PaddingSizesObjectType } from "./types";
import SrfValue from "../utils/functions/SrfValue";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const lightTheme = createTheme({
  borderRadii: {
    lg: SrfValue(32),
    sml: SrfValue(24),
    md: SrfValue(16),
    mmd: SrfValue(14),
    none: 0,
    sm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonGradients: {
    // primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
    // secondary: [palette.gradientBlueTop, palette.gradientBlueBottom],
    // tatiary: [palette.gradientGreenTop, palette.gradientGreenBottom],
  },
  buttonSizes: {
    lg: {
      paddingHorizontal: "xl",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "lg",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "md",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xxl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "sm",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
    },
    filled: {
      backgroundColor: "primaryColor",
    },
    ghost: {
      backgroundColor: "paleGrey50",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: palette.primaryColor,
    mainBackground: palette.whiteColor,
    textColorInverted: palette.whiteColor,
    primarybackground: palette.white,
    primarythemecolor: palette.backgroundblack,
  },

  fontSizes: {
    caption: SrfValue(12),
    h1: SrfValue(32),
    h2: SrfValue(24),
    h3: SrfValue(20),
    h4: SrfValue(18),
    h5: SrfValue(16),
    h6: SrfValue(14),
    p: SrfValue(14),
    s: SrfValue(6),
  },

  iconSizes: {
    "logo-iconsize": {
      height: SrfValue(40),
      width: SrfValue(40),
    },
    lg: {
      height: SrfValue(32),
      width: SrfValue(32),
    },
    m: {
      height: SrfValue(12),
      width: SrfValue(12),
    },
    mm: {
      height: SrfValue(16),
      width: SrfValue(17),
    },
    md: {
      height: SrfValue(24),
      width: SrfValue(24),
    },
    s: {
      height: SrfValue(4),
      width: SrfValue(4),
    },
    sml: {
      height: SrfValue(20),
      width: SrfValue(20),
    },
    sm: {
      height: SrfValue(16),
      width: SrfValue(16),
    },
    xl: {
      height: SrfValue(48),
      width: SrfValue(48),
    },
    xll: {
      height: SrfValue(32),
      width: SrfValue(99),
    },
    xlll: {
      height: SrfValue(38),
      width: SrfValue(140),
    },

    xxl: {
      height: SrfValue(64),
      width: SrfValue(64),
    },
    xs: {
      height: SrfValue(8),
      width: SrfValue(8),
    },
    xsl: {
      height: SrfValue(108),
      width: SrfValue(120),
    },
    pspxl: {
      height: SrfValue(80),
      width: SrfValue(80),
    },
    xxxl: {
      height: SrfValue(138),
      width: SrfValue(180),
    },
    xxxxl: {
      height: SrfValue(183),
      width: SrfValue(177),
    },
  },

  spacing: {
    lg: SrfValue(32),
    xlg: SrfValue(48),
    md: SrfValue(16),
    mmd: SrfValue(20),
    none: 0,
    smd: SrfValue(12),
    sm: SrfValue(8),
    sml: SrfValue(24),
    ss: SrfValue(6),
    ssm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
    xxl: SrfValue(128),
    xxxl: SrfValue(228),
    xxs: SrfValue(2),
    xxxs: SrfValue(1),
    rs: SrfValue(-200),
    rlg: SrfValue(-100),
    rr: SrfValue(-30),
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: "lg",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "md",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "sm",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "xs",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: "sm",
      fontSize: SrfValue(14),
    },
    filled: {
      backgroundColor: "paleGrey50",
      color: "primaryBlack",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },
  
  textVariants: {
    body: {},
    bold8: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(8),
    },
    bold10: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(10),
    },
    bold12: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(12),
    },
    bold14: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(14),
    },
    bold16: {
      fontFamily: "Mulish-Bold",
      color: "textColor",
      fontSize: RFValue(16),
    },
    bold18: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(18),
    },
    bold20: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(20),
    },
    bold22: {
      fontFamily: "Mulish-Bold",
      color: "textColor",
      fontSize: RFValue(22),
    },
    bold24: {
      fontFamily: "Mulish-Bold",
      color: "textColor",
      fontSize: RFValue(24),
    },
    bold32: {
      fontFamily: "Mulish-Bold",
      color: "textColor",
      fontSize: RFValue(32),
    },
    bold36: {
      color: "textColor",
      fontFamily: "Mulish-Bold",
      fontSize: RFValue(36),
    },
    bold48: {
      fontFamily: "Mulish-Bold",
      color: "textColor",
      fontSize: RFValue(48),
    },
    defaults: {
      color: "primaryBlack",
      fontSize: RFValue(14),
      fontFamily: "Mulish-Regular",
    },
    medium10: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(10),
    },
    medium12: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(12),
    },
    medium14: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(14),
    },
    medium16: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(16),

      lineHeight: RFValue(30),
    },
    medium18: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(18),
    },
    medium20: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(20),

      lineHeight: RFValue(22),
    },
    medium22: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(22),
    },
    medium24: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(24),
    },
    medium8: {
      color: "textColor",
      fontFamily: "Mulish-Medium",
      fontSize: RFValue(8),
    },
    none: {},
    regular9: {
      fontFamily: "Mulish-Regular",
      color: "textColor",
      fontSize: RFValue(9),
      
    },
    regular10: {
      fontFamily: "Mulish-Regular",
      color: "textColor",
      fontSize: RFValue(10),
      
    },
    regular12: {
      fontFamily: "Mulish-Regular",
      color: "textColor",
      fontSize: RFValue(12),
    },
    regular14: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(14),
      
    },
    regular16: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(16),
      
    },
    regular18: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(18),
      
    },
    regular22: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(22),
      
    },
    regular24: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(24),
      
    },
    regular8: {
      fontFamily: "Mulish-Regular",
      color: "textColor",
      fontSize: RFValue(8),
    },
    font10: {
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(10),
      
    },
    font12: {
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(12),
    },
    font14: {
      color: "textColor",
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(14),
    },
    font8: {
      fontFamily: "Mulish-Regular",
      fontSize: RFValue(8),
    },
    title: {
      fontSize: SrfValue(32),
      fontFamily: "Mulish-Regular",
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkMode.colors,
  },
};

export default { darkTheme, lightTheme };