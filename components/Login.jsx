import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {

  const router = useRouter();
  return (
    <View>
      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold',
          textAlign:"center",
          marginTop: 100,
        }}>Explor the world Enjoy your life</Text>
      </View>
     
      <Image source={require('./../assets/images/login.png')}
      style={{
        marginTop: 40,
        marginLeft:35,
        marginBottom:10,
      }}
      />
      <TouchableOpacity style ={styles.button} 
        onPress = {()=>router.push('auth/sign-in')}>
        <Text style={{
          color: '#FFFF',
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize:17,
    
        }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding:20,
    backgroundColor: '#337395',
    borderRadius: 99,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    
  }
});