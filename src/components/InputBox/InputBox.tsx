import React from 'react';
import { TextInput } from 'react-native';

import Styles from './Style';

interface InputBoxProps {
  pass:string
}
function InputBox(props : InputBoxProps) {
  return (
    <TextInput
      placeholder='Password'
      style={Styles.textInput}
      value={props.pass}
    />
  );
}

export default InputBox;