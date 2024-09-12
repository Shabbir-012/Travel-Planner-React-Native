import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function SignUp() {
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
        Let's Create Account
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
          Full Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />
      </View>
      

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

      
        
        {/*Create account button */}

        <TouchableOpacity
        
        onPress={()=>router.replace('auth/sign-in')}

        
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