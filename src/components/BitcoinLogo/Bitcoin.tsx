import React, { useRef, useEffect } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import Styles from './../BitcoinLogo/Style';
import Logo from '../../../assets/bitcoin.png';

function BitcoinLogo() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Password generator</Text>
      <Animated.Image
        source={Logo}
        style={[Styles.img, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
}

export default BitcoinLogo;
