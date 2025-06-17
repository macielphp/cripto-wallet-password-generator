import React from 'react';
import { Pressable, Text } from 'react-native';
import Styles from './Style';

interface CopyButtonProps {
    children: React.ReactNode;
    onPress: () => void;
}

function CopyButton({ children, onPress } : CopyButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed ? Styles.pressed : Styles.press}
        >
            <Text style={Styles.text}>{children}</Text>
        </Pressable>
    );
}

export default CopyButton;
