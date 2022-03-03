import { View, Text, Dimensions, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from './Styles.js'
import Header from '../../components/Header'
import { AntDesign } from '@expo/vector-icons';
import crypto from '../../../assets/Data/crypto.json'
import { LineChart } from 'react-native-wagmi-charts';


export default function Detail() {
    const initialState={
        priceCoin: crypto.market_data.current_price.usd,
        coinNumber : 1
    }
    const screenWidth = Dimensions.get('window').width;
    const [coinState, setCoinState] = useState(initialState.coinNumber)
    const [price, setPrice] = useState(initialState.priceCoin)

    const changeCoin= (value) =>{
        setCoinState(value)
        const float = parseFloat(value) || 0
        setPrice(float * initialState.priceCoin)
    }

    const changeUsd= (value) =>{
        setPrice(value)
        const float = parseFloat(value) || 0
        setCoinState(float / initialState.priceCoin)
    }

  return (
    <View>
        <LineChart.Provider 
            data={crypto.prices.map(([timestamp, value]) => ({ timestamp, value}))
        }>
            <Header />
            <View style={{marginTop:25, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.nameText}>{crypto.name}</Text>
                    <Text style={styles.currentPriceText}>
                        ${crypto.market_data.current_price.usd.toFixed(2)}
                    </Text>
                </View>
                <View style={crypto.market_data.price_change_percentage_24h < 0 ? styles.negativeMarketPorcentageContainer : styles.positeveMarketPorcentageContainer}>
                    <AntDesign name={crypto.market_data.price_change_percentage_24h < 0 ? 'caretdown': 'caretup'}
                                size={14} color="white"
                                style={{marginRight: 8, alignSelf: 'center'}}
                    />
                    <Text style={styles.textPorcetage}>
                        {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                </View>
                
            </View>
            <View style={{marginVertical:40}}>
                <LineChart height={screenWidth / 2} width={screenWidth}>
                        <LineChart.Path  color='white'/>
                        <LineChart.CursorCrosshair color='red' />
                </LineChart>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between'}}>
                <View style={styles.inputContainer}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>{crypto.symbol.toLocaleUpperCase()} :</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType= 'numeric'
                        placeholderTextColor='#fff'
                        value={coinState.toString()}
                        onChangeText={changeCoin}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>USD :</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType= 'numeric'
                        value={price.toString()}
                        placeholderTextColor='#fff'
                        onChangeText={changeUsd}
                    ></TextInput>
                </View>
            </View>
        </LineChart.Provider>  
    </View>
  )
}