import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import {useNavigation} from '@react-navigation/native'
import Details from './Details'

const HomeScreen = () => {
  const navigation = useNavigation()<any>;
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <Link screen="Details" style={{color: 'blue'}}>Go to Details</Link> */}
      <Pressable onPress={()=>{
        navigation.navigate("Details",{
          id:1,
          name: 'John Doe'
        })
      }}>
        <Text style={{color: 'blue'}}>Go to Details</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})