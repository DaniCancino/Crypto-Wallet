import axios from 'axios';

export const getAllCoins = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
      return response.data;
    } catch (e) {
      console.error(e);
    }
}

export const getDetailedCoinData = async (coinId) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }