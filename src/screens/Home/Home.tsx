import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Animated, Image, Pressable, TextInput } from 'react-native';
import Style from './../Home/Style'
import BitcoinLogo from '../../components/BitcoinLogo/Bitcoin'
import InputBox from '../../components/InputBox/InputBox'
import CopyButton from '../../components/CopyButton/CopyButton';
import CopySvgIcon from '../../../assets/copy-svgrepo-com.svg';
import GlobalStyles from '../../GlobalStyles';
import 'react-native-get-random-values';
import { generateBitcoinWalletPassword } from '../../utils/GeneratePassword';
import CopyPassword from '../../utils/CopyPassword'

export default function Home() {
    const borderAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(borderAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(borderAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [borderAnim]);

    const borderColor = borderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#FFD700', '#FF9900'], // gold to orange
    });

    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        const newPassword = generateBitcoinWalletPassword(16)
        setPass(newPassword);
    }
    async function handleCopyButton() {
        if(pass) {
            await CopyPassword(pass);
            console.log('Password copied')
        } else {
            console.log('No password copied')
        }
    }
    
    return (

        <View style={Style.Styles.screen}>
            <Animated.View
                style={[
                    Style.Styles.BitcoinLogoContainer,
                    { borderWidth: 3, borderColor }
                ]}
            >
                <BitcoinLogo /> 
                <Text>Hola</Text>
            </Animated.View>
            <View>
                <InputBox pass={pass}  />
                <View style={Style.Styles.buttonContainer}>
                    <Pressable onPressIn={handleGenerateButton}>
                        <Text style={GlobalStyles.FunctionalPressableButton}>Generate</Text>
                    </Pressable>
                    <CopyButton onPress={handleCopyButton}>
                        Copy
                    </CopyButton>
                    
                </View>
            </View>
            <StatusBar style='auto'/>
        </View>
    )
}
