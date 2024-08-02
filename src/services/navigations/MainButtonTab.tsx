import React, { useEffect } from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  ImageIconPackType,
} from "@/shared/assets/icons/imageIconPack";
import { Text } from "@/shared/components/Typography";
import { Box } from "@/shared/components";
import { ImageIcon } from "@/shared/assets/icons/ImageIcon";
import SrfValue from "@/shared/utils/functions/SrfValue";
import { Dimensions, Platform, StatusBar } from "react-native";
import Shipments from "@/screens/home/Shipments";
import Scan from "@/screens/home/Scan";
import Wallet from "@/screens/home/Wallet";
import Profile from "@/screens/home/Profile";
import { palette } from "@/shared/theme/palette";

export type TabType = {
  tabText: string;
  name: string;
  iconName: ImageIconPackType;
  component: any;
  special?: boolean;
  onPress?: () => void;
};
const Tab = createBottomTabNavigator();

const MainButtonTab = () => {
  const { width, height } = Dimensions.get("window");

  const tabList: TabType[] = [
    {
      tabText: "Shipments",
      name: "Shipments",
      iconName: "shipments",
      component: Shipments,
    },
    {
      tabText: "Scan",
      name: "Scan",
      iconName: "scan",
      component: Shipments,
    },
    {
      tabText: "Wallet",
      name: "Wallet",
      iconName: "wallet",
      component: Shipments,
    },

    {
      tabText: "Profile",
      name: "Profile",
      iconName: "profile",
      component: Shipments,
    },
  ];

  useEffect(() => {
    if (Platform.OS ==="android") {
      
      StatusBar.setBackgroundColor(palette.whiteColor);
    }
    StatusBar.setBarStyle("dark-content");
  }, [])
  

  return (
    <Tab.Navigator
      // sceneAnimationEnabled={false}
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          height: SrfValue(85),
          paddingTop: SrfValue(5),
          elevation: 0,
        },
        tabBarItemStyle: { height: SrfValue(75) },
      }}
    >
      {tabList.map(tab => (
        <Tab.Screen
          component={tab.component}
          key={tab.name.toString()}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIconStyle: {
              flex: 1,
            },
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Box alignItems="center" flex={1} justifyContent="center">
                  <ImageIcon
                    color={
                        focused
                          ? "primaryColor"
                          : "textColor2"
                      }
                    name={tab.iconName}
                    size={"md"}
                  />

                <Text
                  color={focused ? "primaryColor" : "textColor2"}
                  marginTop={"ss"}
                  variant={width < 340 ? "regular10" : "regular12"}>
                  {tab.tabText}
                </Text>
              </Box>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainButtonTab;
