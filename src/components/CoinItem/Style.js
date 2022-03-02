import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    image:{
        width: 25,
        height: 25,
        marginRight: 10
    },
    detailText:{
        fontSize: 15,
        color: '#fff',
        marginRight: 5
    },
    rankCointainer:{
        paddingHorizontal: 5,
        backgroundColor:'#7B7B7B',
        borderRadius: 5,
        marginRight: 5
    },
    capText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 'auto',
        marginRight:5  
    },
    marketCapText:{
        justifyContent: 'space-around',
        fontSize: 15,
        color: '#fff',
        marginLeft: 'auto',
        marginRight:5  
    }
})

export default styles;