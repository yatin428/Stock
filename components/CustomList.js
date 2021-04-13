import React, {useLayoutEffect, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar}  from "react-native-elements"
const CustomList = ({title, subtitle, percent}) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.list}>
            <Avatar  size={40} rounded source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2KkuLpAwkCVmlhqiD2qc8RMRk30uKmGciw&usqp=CAU"
            }}/>
        <View style={styles.listContent}>
                <Text>
                {title}
                </Text>
               <Text>
               {subtitle}
               </Text>
        </View>
        </View>
        <View style={styles.listContentB}>
                <Text>
                { percent > 0 ? ("⬆️ "+percent+ " %") :("⬇️ "+percent+ " %") }
                </Text>
        </View>
        </SafeAreaView>
    )
}

export default CustomList

const styles = StyleSheet.create({
    container: {
     borderBottomColor: "black",
     borderBottomWidth: 3
    },
   list: {
   padding:10,
   display:"flex",
   flexDirection: "row",
   },
   listContent: {
       flex:1,
       display:"flex",
       flexDirection: "row",
       justifyContent:'space-around'
   },
   listContentB: {
padding:5,
alignItems: "center"
}
})