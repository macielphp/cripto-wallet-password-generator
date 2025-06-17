import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    img: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Styles