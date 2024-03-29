import React, { useRef, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Text, Dimensions, TextInput, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
// Custom Component Imports
import StyledButton from "../components/StyledButton";
// SVG Imports
import TopWaves from "../assets/topWaves2.svg";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default ({ navigation, route }) => {
  const { name, birthday, phoneNumber } = route.params;
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [goal, setGoal] = useState("");
  const symbols={
    "male":"mars",
    "female":"venus",
    "other":"genderless",
    "all":"transgender",
    "friend":"user",
    "relationship":"heart",
    "hookup":"glass"
  }

  const iconStyle = {
    position:"absolute",
    top: RFValue(15,812),
    left: RFValue(240,812)
  }
  const dropdownViewStyle = {
    alignItems: "center",
    justifyContent: "center",
  };
  const dropdownStyle = {
    inputIOS: {
      width: RFValue(288, 812),
      height: RFValue(64, 812),
      paddingLeft: RFPercentage(3),
      backgroundColor: "rgba(71,59,240,0.06)",
      borderRadius: 12,
      marginBottom: RFValue(45, 812),
      fontFamily: "Lato_400Regular",
      fontSize: RFValue(18, 812),
    },
    inputAndroid: {
      width: RFValue(288, 812),
      height: RFValue(64, 812),
      paddingLeft: RFPercentage(3),
      backgroundColor: "rgba(71,59,240,0.06)",
      borderRadius: 12,
      marginBottom: RFValue(45, 812),
      fontFamily: "Lato_400Regular",
      fontSize: RFValue(18, 812),
      color: '#000000',
    },
    placeholder: {
      color: "rgba(0,0,0,.2)",
    },
  };
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TopWaves
        height={height/2}
        style={{
          bottom: height/1.4,
          position: "absolute",
        }}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: RFPercentage(5),
          fontFamily: "Lato_700Bold",
          bottom: height/1.2,
          position: "absolute",
        }}
      >
        Tell us about yourself!
      </Text>
      <View style={dropdownViewStyle}>
        <RNPickerSelect
          style={dropdownStyle}
          placeholder={{ label: "Select Gender...", value: null }}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />
      <Icon 
          style={iconStyle}
          name={symbols[gender]}
          size={RFValue(30,812)}
      />
      </View>
      <View style={dropdownViewStyle}>
        <RNPickerSelect
          style={dropdownStyle}
          placeholder={{ label: "Talk with...", value: null }}
          onValueChange={(value) => setPreference(value)}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "All", value: "all" },
          ]}
        />
      <Icon 
          style={iconStyle}
          name={symbols[preference]}
          size={RFValue(30,812)}
      />
      </View>
      <View style={dropdownViewStyle}>
        <RNPickerSelect
          style={dropdownStyle}
          placeholder={{ label: "What do you want from Hook?", value: null }}
          onValueChange={(value) => setGoal(value)}
          items={[
            { label: "Friend", value: "friend" },
            { label: "Relationship", value: "relationship" },
            { label: "Hookup", value: "hookup" },
          ]}
        />
      <Icon 
          style={iconStyle}
          name={symbols[goal]}
          size={RFValue(30,812)}
      />
      </View>
      <StyledButton
        disabled={gender && preference && goal ? false : true}
        title="Continue"
        backgroundColor="#473BF0"
        pressedColor="#3129A8"
        onPress={() => {
          navigation.push("imageSelect", {
            gender,
            preference,
            goal,
            name,
            birthday,
            phoneNumber,
          });
        }}
      />
    </View>
  );
};
