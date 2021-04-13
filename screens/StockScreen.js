import React , {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import {Button} from "react-native-elements"
import CustomList from "../components/CustomList"
const StockScreen = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch('https://api1.binance.com/api/v3/ticker/24hr')
        .then(response => response.json())
        .then(data => setStocks(data));
    }, [])
    return (
        <SafeAreaView style={{flex:1, backgroundColor: "white", marginTop:10, marginLeft:10, flex:1}}>
            <View style={styles.header}>
            <Text style={styles.mainH}>Crptoassets</Text>
            <Text style={styles.secH}>Exchanges</Text>
            <Text style={styles.secH}>Sectors</Text>
            </View>
            <View style={{marginTop:10}} style={styles.nav}>
            <Button title="⭐" style={styles.btn} type="outline"></Button>
            <Button title="USD" style={styles.btn} type="outline"></Button>
            <Button title="Sort by Rank" style={styles.btn} type="outline"></Button>
            <Button title="Top 100" style={styles.btn} type="outline"></Button>
            </View>
            <View style={styles.list}>
            <ScrollView>
                { stocks.map((stock) => (
             <CustomList key={stock['symbol']} title={stock['symbol']} subtitle={stock['lastPrice']} percent = {stock['priceChangePercent']}/>
    )) }
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default StockScreen

const styles = StyleSheet.create({
    header: {
    alignContent:"center",
    paddingTop:10,
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    backgroundColor:"#fff",
    position: "relative"
    },

    mainH: {
        fontSize:20,
        color: "#000000"
    },
    secH: {
        padding: 5,
        fontSize:15,
        color: "gray"
    },
    btn: {
        backgroundColor: "lightgray",
        width: 20
    },
    nav: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    list: {
      marginTop:15,
    }

})
