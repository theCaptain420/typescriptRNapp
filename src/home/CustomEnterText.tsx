import { View, Text, StyleSheet, TextInput } from "react-native";
import React from 'react'


export default function () {

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
