import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const Details = ({route}) => {
  const {id, name} =route.params;
  return (
    <View>
      <Text>Details</Text>
      <Link screen="Profile" style={{color: 'blue'}}>Go to Profile</Link>
      <Text>Id: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})