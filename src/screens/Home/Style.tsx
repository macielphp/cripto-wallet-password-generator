import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    screen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 189, 97, 0.92)',
    },
    screenItem: {
        width: '70%'
    },
    BitcoinLogoContainer: {
        backgroundColor: 'rgb(255, 149, 0)',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'rgb(18, 18, 18)',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '90%',
    }, 
    buttonContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
    }

})


export default {
    Styles
}