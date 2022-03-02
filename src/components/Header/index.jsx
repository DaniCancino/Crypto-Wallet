import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Styles.js'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import crypto from '../../../assets/Data/crypto.json'
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <AntDesign 
            name="left"
            size={26} 
            color="white" 
            onPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row'}}>
            <Image 
                source={{uri: crypto.image.small}} 
                style={styles.image}
            />
            <Text style={styles.text}>
                {crypto.symbol.toUpperCase()}
            </Text>
            <View style={styles.rankCointainer}>
                <Text style={styles.text}>#{crypto.market_data.market_cap_rank}</Text>
            </View>
        </View>
        <FontAwesome5 name="user-circle" size={26} color="white" />
    </View>
  )
}