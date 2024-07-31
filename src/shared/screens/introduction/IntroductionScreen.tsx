import React, { FC, useState } from "react";
import { Image, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";


import { palette, PaletteType } from "@/shared/theme/palette";
import SrfValue from "@/shared/utils/functions/SrfValue";
import { introBgFour, introBgThree, introBgTwo, introone } from "@/shared/assets/images";
import { Text } from "@/shared/components/Typography";
import { Box } from "@/shared/components";
import { SvgIcon } from "@/shared/assets/icons/SvgIcon";
import { backgroundColor } from "@shopify/restyle";
import Animated from "react-native-reanimated";
import { RootNavigationProps } from "@/services/navigations/types";

const IntroductionScreen: FC<RootNavigationProps<"IntroductionScreen">> = ({navigation}) => {
const [currentShowCase, setcurrentShowCase] = useState <{

  id: number;
  img: number;
  backgroundColor: PaletteType;
  title: string;style:any;

}>({
  
    id: 1,
    img: introone, 
    style:{
      width: SrfValue(348), height: SrfValue(338),marginBottom:SrfValue(50)
    },
    backgroundColor: "introBgOne",
    title: "Shop globally with \n confidence",

})
  const onBoardingShowCases: {

    id: number;
    img: number;
    backgroundColor: PaletteType;
    title: string;
    style:any
  }[] = [
      {
        id: 1,
        img: introone, 
        backgroundColor: "introBgOne",
        title: "Shop globally with \n confidence",
        style:{
          width: SrfValue(348), height: SrfValue(338),marginBottom:SrfValue(50)
        },
      },
      {
        id: 2,
        img: introBgTwo,
         backgroundColor: "introBgTwo",
        title: "Manage your bill \n payments in one place",
        style:{
          width: SrfValue(306), height: SrfValue(342),marginBottom:SrfValue(50)
        },
      },
      {
        id: 3, 
        backgroundColor: "introBgThree",
        img: introBgThree,
        style:{
          width: SrfValue(323), height: SrfValue(328),marginBottom:SrfValue(50)
        },
        title: "Secure your funds \n without stress",
      },
      {
        id: 4,
        img: introBgFour,
        backgroundColor: "introBgFour",
        style:{
            width: SrfValue(404), height: SrfValue(404),marginBottom:SrfValue(-40)
          },
        title: "Send and receive money \n globally with ease",
      },
    ]



  function handleNextShowcase(c): void {
if (c.id === 4) {
  navigation.replace("LandingScreen");
  return;
}


    onBoardingShowCases.find((item,index)  => {
        if (item.id === c.id ) {
          setcurrentShowCase(onBoardingShowCases[index + 1])
        }
      })
  }

  

  return (
    // <SafeAreaView style={{flex:1,backgroundColor:palette.introBgOne}}>

    <Box alignItems={"center"} justifyContent={"flex-end"} backgroundColor={currentShowCase.backgroundColor} flex={1} >
      <StatusBar backgroundColor={palette[currentShowCase.backgroundColor]} />
      <Box justifyContent={"flex-end"} alignItems={"center"} flex={1} width={"100%"} >
        <Image
          resizeMode="cover"
          style={{...currentShowCase.style}}
          source={currentShowCase.img}
        />
      </Box>
      <Box paddingHorizontal={"md"} rowGap={"lg"} paddingVertical={"xl"} borderTopRightRadius={"lg"} borderTopLeftRadius={"lg"} backgroundColor={"whiteColor"} height={"40%"} width={"100%"}>
        <Box alignSelf={"center"}>
            <Text textAlign={"center"} variant={"medium24"}>{currentShowCase.title}</Text>
        </Box>
        <Box flexDirection={"row"} alignSelf={"center"}>
          {
            onBoardingShowCases.map(item =>(<Text key={item.title} letterSpacing={0.7} color={item.id === currentShowCase.id  ? "activeGreen" : "textColor2"} textAlign={"center"} variant={"bold22"}> &#x25cf;</Text>))
            
          }
        </Box>
        <Box alignItems={"center"} flexDirection={"row"} justifyContent={"space-between"} paddingHorizontal={"md"}>
          <TouchableOpacity
          onPress={() =>   navigation.replace("LandingScreen")}
          >
            <Text letterSpacing={0.7} textAlign={"center"} color={"textColor2"} variant={"bold16"}> Skip Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNextShowcase(currentShowCase)}
          >
            <SvgIcon name="Forward" size="xxl" />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
    // </SafeAreaView>
  );
}
export default  IntroductionScreen;