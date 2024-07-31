import { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParameterList = {
    SplashScreen: undefined,
    IntroductionScreen: undefined,
    LoginScreen: undefined,
    Shipments: undefined,
    Scan: undefined,
    Wallet: undefined,
    MainButtonTab: undefined,
    Profile: undefined,
}

  export type RootNavigationProps<Screen extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, Screen>;
  export type NavType = keyof RootStackParameterList;