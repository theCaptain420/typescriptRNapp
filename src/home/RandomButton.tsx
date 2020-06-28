import React from 'react'
import {View, Button,Alert} from 'react-native'

export function RandomButton(){

    const myOnPress=()=>{
        Alert.alert("simple Press","dont press me like that men")
    }

    return(
        <View style={{margin:"5%"}}>
            <Button
                onPress={myOnPress}
                title={"skrrt"}
                color={"#f194ff"}
            >

            </Button>

        </View>

    )
}