import { RootNavigationProps } from "@/services/navigations/types";
import { Box } from "@/shared/components";
import React from "react";

const SplashScreen = ({
  navigation,
}: RootNavigationProps<"SplashScreen">) => {


  return (
    <Box flex={1} backgroundColor={"primaryColor"}>

    </Box>
  );
};

export default SplashScreen;
