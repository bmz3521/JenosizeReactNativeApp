import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const index = (props:any) => {
    const {
        onPress,
        title,
        color = '#007ecc'
    } = props
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button,{ backgroundColor : color }]} 
        onPress={onPress}>
            <Text style={styles.innerText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default index