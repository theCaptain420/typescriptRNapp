import { View, Text, StyleSheet, TextInput } from "react-native";
import React from 'react'

interface InputProps{
    value:string
    onChange:(name:string)=>void
}

export default function (Props:InputProps) {

    return(
        <View >
            <TextInput
                style={styles.inputboxStyle}
                value={Props.value}
                onChangeText={Props.onChange}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    inputboxStyle: {
      alignSelf:"center",
      fontSize:15,
      color:"gray",
      borderColor:"grey",
      borderWidth:2,
      width:"90%"
    },
  })
