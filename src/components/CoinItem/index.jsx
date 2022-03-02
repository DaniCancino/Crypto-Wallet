import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import stlyes from "./Style.js";
import styles from "./Style.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CoinItem({ props }) {

  const { name, 
        image, 
        symbol, 
        market_cap_rank, 
        price_change_percentage_24h,
        current_price,
        market_cap
    } = props;

    const navigation = useNavigation()

  const fixedCap = (marketCap) => {
    if (marketCap > 1000000000000) {
      marketCap = marketCap / 1000000000000;
      return `${marketCap.toFixed(2)} T`;
    }
    if (marketCap > 1000000000) {
      marketCap = marketCap / 1000000000;
      return `${marketCap.toFixed(2)} B`;
    }
    if (marketCap > 1000000) {
      marketCap = marketCap / 1000000;
      return `${marketCap.toFixed(2)} M`;
    }
    if (marketCap > 1000) {
      marketCap = marketCap / 1000;
      return `${marketCap.toFixed(2)} K`;
    }

    return marketCap;
  };

  return (
    <Pressable 
      style={styles.container}
      onPress={() => navigation.navigate('Detail')}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <Text style={stlyes.text}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankCointainer}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16.5 }}>
              {market_cap_rank}
            </Text>
          </View>
          <Text style={stlyes.detailText}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={18}
            color={price_change_percentage_24h < 0 ? "#FB3030" : "#53B816"}
            style={{ marginRight: 5 }}
          />
          <Text style={stlyes.detailText}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.capText}>${current_price}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={stlyes.marketCapText}>Mcap</Text>
          <Text style={stlyes.marketCapText}>{fixedCap(market_cap)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
