import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react' 

const index = (props:any) => {
    const {
        onChangeText,
        text,
        placeHolder = 'พิมพ์ข้อความค้นหา'
    } = props;
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeHolder}
    />
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderRadius : 10,
      color : '#00000095',
      borderColor : '#00000040'
    },
  });
  
export default index