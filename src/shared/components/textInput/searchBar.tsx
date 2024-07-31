import { useRef } from "react";
import { DimensionValue, TextInput, View } from "react-native";

import { palette } from "@/shared/theme/palette";
import SrfValue from "@/shared/utils/functions/SrfValue";
import { ImageIcon } from "@/shared/assets/icons/ImageIcon";
import { RFValue } from "react-native-responsive-fontsize";

type SelectInputSearchbarProps = {
  getSearchInput: (text: string) => void;
  placeholder?: string;
  searchInput?: string;
  marginTop?: DimensionValue;
  backgroundColor?: string;
  paddingHorizontal?: DimensionValue;
  height?: DimensionValue;
};

export const SearchBar: React.FC<SelectInputSearchbarProps> = ({
  getSearchInput,
  placeholder = "Search for an item",
  backgroundColor,
  paddingHorizontal,
  marginTop,
  searchInput,
  height,
}) => {
  const textInputRef = useRef(null);

  return (
    <View
      style={{
        backgroundColor: backgroundColor || "transparent",
        borderRadius: SrfValue(10),
        paddingHorizontal: paddingHorizontal || SrfValue(10),
        height: height || SrfValue(50),
        alignItems: "center",
        borderColor: palette.textColor2,
        borderWidth: 1,
        flexDirection: "row",
        marginTop: marginTop || SrfValue(10),
      }}>
      <ImageIcon name="search" size="sml" />
      <TextInput
        autoCorrect={false}
        onChangeText={getSearchInput}
        placeholder={placeholder}
        placeholderTextColor="black"
        ref={textInputRef}
        style={{
          height: "100%",
          flex: 1,
          fontFamily: "Mulish-Regular",
          color: "#000",
          textTransform: "lowercase",
          paddingHorizontal: SrfValue(10),
          fontSize: RFValue(14),
        }}
      />
    </View>
  );
};
