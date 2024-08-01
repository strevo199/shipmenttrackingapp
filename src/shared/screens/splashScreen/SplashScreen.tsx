import { RootNavigationProps } from "@/services/navigations/types";
import { imageIconPack } from "@/shared/assets/icons/imageIconPack";
import { Box } from "@/shared/components";
import { palette, PaletteType } from "@/shared/theme/palette";
import SrfValue from "@/shared/utils/functions/SrfValue";
import React, { useEffect, useState } from "react";
import { Animated, Image, StatusBar, StyleSheet } from "react-native";

const SplashScreen = ({
  navigation,
}: RootNavigationProps<"SplashScreen">) => {

  const scale = new Animated.Value(1);
  const scaleY = new Animated.Value(1);
  const translateY = new Animated.Value(0);
  const backgroundColor = new Animated.Value(0);

  useEffect(() => {
   StatusBar.setHidden(true);
   setTimeout(() => {
     startAnimation();
   }, 1000);
  }, [])


  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 4,
        duration: 1500,
        useNativeDriver: false,
      }),
 
      Animated.timing(scaleY, {
        toValue: -1,
        duration: 300,
        delay:500,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 500,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      StatusBar.setHidden(false);
      navigation.navigate("LoginScreen");
    });
  };

  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ffffff", "#2f50c1"]  // Replace "blue" with your primaryColor
  });

  const animateStyle = {
    transform: [
      { scale },
      { scaleY },
      { translateY },
    ],
  }

  

  return (
    <>
   <StatusBar backgroundColor={palette.primaryColor} />
   <Animated.View style={[styles.container, { backgroundColor: bgColor }]} >
      <Animated.Image source={imageIconPack.applogo} style={[styles.image,animateStyle]} />
   </Animated.View>

    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    height: SrfValue(36),
    width: SrfValue(36)
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})