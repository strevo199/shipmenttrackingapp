import { RootNavigationProps } from "@/services/navigations/types";
import { ImageIcon } from "@/shared/assets/icons/ImageIcon";
import { imageIconPack } from "@/shared/assets/icons/imageIconPack";
import { Box } from "@/shared/components";
import AppModal from "@/shared/components/Modals/AppModal";
import PrimaryButton from "@/shared/components/PrimaryButton";
import { showToast } from "@/shared/components/Toast/showToast";
import { Text } from "@/shared/components/Typography";
import { useLogin } from "@/shared/services/api";
import { palette } from "@/shared/theme/palette";
import SrfValue from "@/shared/utils/functions/SrfValue";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Keyboard,
  Modal,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const LoginScreen = ({ navigation }: RootNavigationProps<"LoginScreen">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formvalue, setFormvalue] = useState({usr:"",pwd:"",url:"https://www.brandimic.com"});
  const { width } = Dimensions.get("window");
  const [isPasFocused, setIsPasFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!modalVisible) {
      StatusBar.setBackgroundColor(palette.primaryColor);
    }
  }, [modalVisible]);

  const isDisabled = !!formvalue.pwd.trim() && !!formvalue.pwd.trim()

  

  const handleModalLoginModal = () => {
    setModalVisible(true);
    StatusBar.setBackgroundColor(palette.primaryBlack);
  };

  async function handleLogin() {
    console.log(formvalue);
    Keyboard.dismiss()
    
    if (!formvalue.pwd.trim()) {
      showToast({message:"Please enter your password"})
      return;
    }
    if (!formvalue.usr.trim()) {
      showToast({message:"Please enter your User Name"});
      return;
    }
    setIsLoading(true);
    try {
      const response = await useLogin(formvalue.usr,formvalue.pwd);
      console.log(response);
      
      setIsLoading(false);
      navigation.replace("MainButtonTab",{screen:"Shipments",params:response});
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Login Error",error?.message)
    }}

  return (
    <Box flex={1} backgroundColor={"primaryColor"}>
      <Box alignSelf={"center"} flex={1} width={width >= 500 ? "85%" : "100%"}>
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            source={imageIconPack.shippex}
            style={{ width: SrfValue(208), height: SrfValue(36) }}
          />
        </Box>
        <Box marginHorizontal={"md"} marginBottom={"md"}>
          <PrimaryButton
            onPress={handleModalLoginModal}
            title={"Login"}
            color="primaryColor"
            backgroundColor="whiteColor"
          />
        </Box>
      </Box>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Box
          flex={1}
          justifyContent={"flex-end"}
          backgroundColor={"primaryBlack"}>
          <Box
            backgroundColor={"primaryColor"}
            height={"100%"}
            width={"93%"}
            borderTopRightRadius={"md"}
            alignSelf={"center"}
            borderTopLeftRadius={"md"}
          />
          <Box
            backgroundColor={"whiteColor"}
            position={"absolute"}
            height={"98.5%"}
            width={"100%"}
            padding={"md"}
            borderTopRightRadius={"sm"}
            borderTopLeftRadius={"sm"}
            flex={1}>
                 <Box alignSelf={"center"} flex={1} width={width >= 500 ? "85%" : "100%"}>

              <TouchableOpacity
                style={{ width: SrfValue(100) }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Box
                  marginVertical={"md"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  columnGap={"sm"}>
                  <ImageIcon name="Chevron" size="md" color="primaryColor" />
                  <Text variant={"regular16"} color={"primaryColor"}>
                    Cancel
                  </Text>
                </Box>
              </TouchableOpacity>
              <Box rowGap={"md"} marginBottom={"md"} marginHorizontal={"sm"}>
                <Box>
                  <Text fontWeight={"700"} variant={"bold32"}>
                    Login
                  </Text>
                </Box>
                <Box>
                  <Text color={"textColor2"} variant={"regular16"}>
                    Please enter your First, Last name and your phone number in
                    order to register
                  </Text>
                </Box>
              </Box>
              <Box rowGap={"md"} marginHorizontal={"sm"} marginTop={"lg"}>
                <TextInput
                  onChangeText={text => {
                    setFormvalue({...formvalue,...{url: text}})
                  }}
                  editable={false}
                  placeholder="URL"
                  value={formvalue.url}
                  placeholderTextColor={"#a7a3b3"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    height: SrfValue(56),
                    color: palette.textColor,
                    backgroundColor: "#efefef",
                    borderRadius: SrfValue(8),
                    paddingHorizontal: SrfValue(16),
                    fontSize: RFValue(16),
                    letterSpacing: 0.7,
                  }}
                />
                <TextInput
                   onChangeText={text => {
                    setFormvalue({...formvalue,...{usr: text}})
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Username / Email"
                  value={formvalue.usr}
                  placeholderTextColor={"#a7a3b3"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    height: SrfValue(56),
                    color: palette.textColor,
                    backgroundColor: "#efefef",
                    borderRadius: SrfValue(8),
                    borderWidth:isFocused ? SrfValue(1.5) : 0,
                    borderColor:isFocused ? palette.primaryColor :palette.transparent,
                    marginVertical:SrfValue(6),
                    paddingHorizontal: SrfValue(16),
                    fontSize: RFValue(16),
                    letterSpacing: 0.7,
                  }}
                />
                <TextInput
                  onChangeText={text => {
                    setFormvalue({...formvalue,...{pwd: text}})
                  }}
                  secureTextEntry
                  placeholder="Password"
                  value={formvalue.pwd}
                  onFocus={() => setIsPasFocused(true)}
                  onBlur={() => setIsPasFocused(false)}
                  placeholderTextColor={"#a7a3b3"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    height: SrfValue(56),
                    color: palette.textColor,
                    backgroundColor: "#efefef",
                    borderWidth:isPasFocused ? SrfValue(1.5) : 0,
                    borderColor:isPasFocused ? palette.primaryColor :palette.transparent,
                    borderRadius: SrfValue(8),
                    paddingHorizontal: SrfValue(16),
                    fontSize: RFValue(16),
                    letterSpacing: 0.7,
                  }}
                />
              </Box>
              <Box
                position={"absolute"}
                bottom={0}
                width={"100%"}
                alignSelf={"center"}
                marginBottom={"md"}>
                  {isLoading && <ActivityIndicator style={{position:"absolute",right:"5%", top:"25%",zIndex:10}}  size={"small"} color={palette.white} />}
                <PrimaryButton
                  onPress={handleLogin}
                  title={"Login"}
                  disabled={!isDisabled || isLoading}
                  
                  color={ isDisabled ? "whiteColor" : "darkGrey"}
                  backgroundColor={ isDisabled ? "primaryColor" : "grayLight"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginScreen;
