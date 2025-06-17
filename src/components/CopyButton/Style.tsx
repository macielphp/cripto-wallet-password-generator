import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    press: {
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        borderRadius: 10,
        width: 70,
        alignSelf: 'center',
        padding: 7,
    },
    pressed: {
        backgroundColor: 'rgba(0, 0, 0, 0.36)',
        borderRadius: 10,
        width: 70,
        alignSelf: 'center',
        padding: 7,
    },
    text: {
        color: 'black',
        fontSize: 16,
      
        textAlign: 'center',
    },
})

export default Styles;