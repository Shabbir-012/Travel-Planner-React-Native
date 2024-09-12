import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function SignIn() {
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
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          marginTop: 20,
          fontSize: 30,
          color: "#999393",
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: "#999393",
          marginTop: 10,
        }}
      >
        You've been missed
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      {/*Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>

      {/* Sign in button */}

      <TouchableOpacity
        
        onPress={()=>router.replace('auth/home')}

        style={{
          padding: 15,
          backgroundColor: "#337395",
          borderRadius: 15,
          marginTop: 20,
          
        }}
      >
        <Text style={{
          color: '#fff',
          textAlign: "center"
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* <View
        style={{
          padding: 15,
          backgroundColor: "#337395",
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{
          color: '#ffff',
          textAlign: "center"
        }}>Sign In</Text>
      </View> */}
        
        {/*Create account button */}

        <TouchableOpacity
        
        onPress={()=>router.replace('auth/sign-up')}

        style={{
          padding: 15,
          backgroundColor: "#fff",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{
          color: '#337395',
          textAlign: "center"
        }}>Create Account</Text>
      </TouchableOpacity>  




    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#999393",
    fontFamily: "outfit",
  },
});
