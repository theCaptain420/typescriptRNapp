import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

//props, ? means not required
export interface Props{
    favoriteNumber:number
    name?:string
}

interface State{
    name:string
    favoriteNumber:number
}

export default class EnterMyName extends React.Component<Props,State>{
    //takes in props of type Props
    constructor(props:Props){
        super(props)

        this.state={
            //state is either the prop or nothing
            name:props.name ||"",
            //state here is given as must type
            favoriteNumber:props.favoriteNumber
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.header}>
                    Hello {this.state.name}
                </Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    header: {
      alignSelf:"center",
      fontSize:15,
      fontWeight:"bold"

    },
  })
