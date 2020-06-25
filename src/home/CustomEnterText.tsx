import { View, Text, StyleSheet, TextInput } from "react-native";
import React from 'react'

interface InputProps{
    value:string
    onChange:()=>void
}

export default function (Props:InputProps) {

    Props.value
    return(
        <View >
            <TextInput
                style={styles.inputboxStyle}
                value={"tsm"}
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
