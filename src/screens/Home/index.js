import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CoinItem from '../../components/CoinItem'
import cryptocurrencies from '../../../assets/Data/cryptocurrencies.json'

export default function Home() {
  return (
    <View>
     <FlatList
        data={cryptocurrencies}
        renderItem={({item}) => <CoinItem  props={item}/>}
    />
    </View>
  )
}