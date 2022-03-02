import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    nameText:{
        color: '#fff', 
        fontSize: 15
    },
    currentPriceText:{
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        letterSpacing: 1.5
        
    },
    negativeMarketPorcentageContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 7,
        backgroundColor: '#FB3030',
        borderRadius: 5
    },
    positeveMarketPorcentageContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 7,
        backgroundColor: '#53B816',
        borderRadius: 5
    },
    textPorcetage:{
        color: '#fff',
        fontSize: 16.5,
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: '500'
    }
})

export default styles;