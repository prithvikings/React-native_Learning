import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()<any>;
  return (
    <View>
      <Text>Profile</Text>
      <Pressable onPress={()=> navigation.popToTop()}><Text style={{color: 'blue'}}>Go to Home</Text></Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})