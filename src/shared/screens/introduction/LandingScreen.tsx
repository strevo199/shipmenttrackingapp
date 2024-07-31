import React, { useEffect } from "react";
import {

  TouchableOpacity,
} from "react-native";

import SrfValue from "@/shared/utils/functions/SrfValue";

import { Text } from "@/shared/components/Typography";
import { Box } from "@/shared/components";
import MainLoyout from "@/shared/components/Layout/MainLoyout";
import PrimaryButton from "@/shared/components/PrimaryButton";
import { RootNavigationProps } from "@/services/navigations/types";
import { useAppDispatch } from "@/shared/store";
import { registerDevice, setReferer } from "@/shared/store/slices/appSettings.slice";


export default function LandingScreen({navigation}:RootNavigationProps<"LandingScreen">) {
const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(registerDevice())
  }, []);

  useEffect(() => {
    dispatch(
      setReferer(undefined),
    );
  }, [dispatch])
  return (
    <MainLoyout screentype="mainLanding">
     <Box rowGap={"lg"} >
     <Box paddingVertical={"lg"}>
                    <Text textAlign={"center"} variant={"medium24"}>Welcome to Hitchpay</Text>
                </Box>
        <Box rowGap={"md"}>
          <PrimaryButton
            backgroundColor="transparent"
            color="darkGrey"
            onPress={()=>navigation.navigate("QuickPayLanding")}
            title={"Continue without Login"}
          />
          <PrimaryButton onPress={()=> navigation.navigate("LoginScreen")} title={"Login"} />
        </Box>
        <Box alignItems={"center"} columnGap={"md"}  flexDirection={"row"}  justifyContent={"center"}>
          <Box width={"40%"}  height={SrfValue(2)} backgroundColor={"grayLight"}/>
          <Text textAlign={"center"} variant={"regular16"} color={"textColor2"}>
           Or 
          </Text>
          <Box width={"40%"}  height={SrfValue(2)} backgroundColor={"grayLight"}/>
        
        </Box>
        <Box rowGap={"lg"} alignItems={"center"}>
          <Box columnGap={"sm"} alignItems={"center"} flexDirection={"row"}>
            <Text variant={"regular14"} color={"textColor2"}>
              Don’t have an account?
            </Text>
            <TouchableOpacity  onPress={()=>navigation.replace("RegisterScreenOne")} >
              <Text variant={"medium14"} color={"primaryColor"}>Sign Up</Text>
            </TouchableOpacity>
          </Box>
         
        </Box>
      </Box>
    </MainLoyout>
  );
}
