import { View, Text, Dimensions, TextInput, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './Styles.js'
import Header from '../../components/Header'
import { AntDesign } from '@expo/vector-icons';
import { LineChart } from 'react-native-wagmi-charts';
import { useRoute } from "@react-navigation/native";
import { getDetailedCoinData, getChartCoinData } from '../../services/requests.js'

export default function Detail() {

    const screenWidth = Dimensions.get('window').width;
    const [coin, setCoin] = useState()
    const [chart, setChart] = useState()
    const [loading, setLoading] =useState(false)
    const route = useRoute()
    const [coinState, setCoinState] = useState(1)
    const [price, setPrice] = useState("")
    const [priceConverter, setPriceConverter] = useState()
    const {
        params: {coinId},
    } = route

    const fetchCoinData = async () =>{
        setLoading(true)
        const fetchedCoinData = await getDetailedCoinData(coinId)
        const fetchedChartData = await getChartCoinData(coinId)
        setCoin(fetchedCoinData)
        setChart(fetchedChartData)
        setPrice(fetchedCoinData.market_data.current_price.usd)
        setPriceConverter(fetchedCoinData.market_data.current_price.usd)
        setLoading(false)
    }  

    const changeCoin= (value) =>{
        setCoinState(value)
        const float = parseFloat(value) || 0
        float == 0 || !float ? setPriceConverter(price) : setPriceConverter(float * price)
    }
    
    const changeUsd= (value) =>{
        setPriceConverter(value)
        const float = parseFloat(value) || 0
        setCoinState(float / price)
    }
    
    
    useEffect(() => {
        fetchCoinData()
    }, [])


    if(loading || !coin || !chart){
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size='large' color='#fff' />
            </View>
        )
    }

  return (
    <View>
        <LineChart.Provider 
            data={chart.prices.map(([timestamp, value]) => ({ timestamp, value}))
        }>
            <Header image={coin.image.small} symbol={coin.symbol} rank={coin.market_data.market_cap_rank}/>
            <View style={{marginTop:25, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.nameText}>{coin.name}</Text>
                    <Text style={styles.currentPriceText}>
                        ${coin.market_data.current_price.usd.toFixed(2)}
                    </Text>
                </View>
                <View style={coin.market_data.price_change_percentage_24h < 0 ? styles.negativeMarketPorcentageContainer : styles.positeveMarketPorcentageContainer}>
                    <AntDesign name={coin.market_data.price_change_percentage_24h < 0 ? 'caretdown': 'caretup'}
                                size={14} color="white"
                                style={{marginRight: 8, alignSelf: 'center'}}
                    />
                    <Text style={styles.textPorcetage}>
                        {coin.market_data.price_change_percentage_24h.toFixed(2)}%
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
                    <Text style={{color: 'white', alignSelf: 'center'}}>{coin.symbol.toLocaleUpperCase()} :</Text>
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
                        value={priceConverter.toString()}
                        placeholderTextColor='#fff'
                        onChangeText={changeUsd}
                    ></TextInput>
                </View>
            </View>
        </LineChart.Provider>  
    </View>
  )
}