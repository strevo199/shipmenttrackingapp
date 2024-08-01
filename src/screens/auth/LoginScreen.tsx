import { RootNavigationProps } from "@/services/navigations/types";
import { imageIconPack } from "@/shared/assets/icons/imageIconPack";
import { Box } from "@/shared/components";
import PrimaryButton from "@/shared/components/PrimaryButton";
import { Text } from "@/shared/components/Typography";
import SrfValue from "@/shared/utils/functions/SrfValue";
import React from "react";
import { Image } from "react-native";

const LoginScreen = ({
  navigation,
}: RootNavigationProps<"LoginScreen">) => {


  return (
    <Box flex={1} backgroundColor={"primaryColor"} >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image  source={imageIconPack.shippex} style={{width:SrfValue(208),height:SrfValue(36)}} />
      </Box>
      <Box marginHorizontal={"md"} marginBottom={"md"} >
        <PrimaryButton title={"Login"} color="primaryColor" backgroundColor="whiteColor" />
      </Box>
    </Box>
  );
};

export default LoginScreen;
