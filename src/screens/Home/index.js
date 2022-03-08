import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import CoinItem from '../../components/CoinItem'
import {getAllCoins} from '../../services/requests.js'

export default function Home() {
  const [coins, setCoins] = useState([])
  const [load, setLoad] = useState(false)

  const fetchAllCoins = async (pageNumber) =>{
    if(load){
      return;
    }
    setLoad(true)
    const fetchedCoins = await getAllCoins(pageNumber)
    setCoins((existingCoin) => ([...existingCoin, ...fetchedCoins]))
    setLoad(false)
  }

  const refetchData = async () =>{
    setLoad(true)
    const fetchedCoins = await getAllCoins()
    setCoins(fetchedCoins)
    setLoad(false)
  }


  useEffect(()=>{
    fetchAllCoins()
  }, [])

  
  if(!coins){
    return(
      <View style={{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size='large' color='#fff' />
      </View>
    )
  }
  return (
    <View>
     <FlatList
        data={coins}
        renderItem={({item}) => <CoinItem  props={item}/>}
        onEndReached={() => fetchAllCoins((coins.length / 50) + 1)}
        refreshControl={
          <RefreshControl 
            refreshing={load}
            tintColor='#fff'
            onRefresh={refetchData}
          />
        }
    />
    </View>
  )
}