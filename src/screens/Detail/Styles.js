import { StyleSheet} from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
    },
    textInput:{
        borderColor: 'transparent',
        borderBottomColor: '#fff',
        borderWidth: 1,
        padding: 7,
        marginLeft: 10,
        color: '#fff',
        width: '60%'
    },
    inputContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomColor: '#fff',
        width: '55%'
    }
})

export default styles;