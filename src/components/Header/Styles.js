import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent:'space-between',
        paddingHorizontal: 10
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    image:{
        width: 25,
        height: 25,
        marginRight: 8
    },
    rankCointainer:{
        paddingHorizontal: 5,
        backgroundColor:'#7B7B7B',
        borderRadius: 5,
        marginLeft: 8
    },
})

export default styles;