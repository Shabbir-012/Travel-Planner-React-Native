import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function home() {

    const navigation = useNavigation();

    const router = useRouter();
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    });


  return (
    <View
    style={{
        padding: 25,
        marginTop: 60,
        backgroundColor: "#ffff",
        paddingTop: 80,
        height: "100%",
      }}
    >
      <Text
      style={{
        fontFamily: "outfit-bold",
        fontSize: 30,
        textAlign:'center'
      }}
      >Home</Text>
      <Image 
      
      source={require('./../../../assets/images/homeimg.png')}
      style={{
        marginTop: 40,
        marginLeft:10,
        marginBottom:10,
      }}
      />
    </View>
  );
}