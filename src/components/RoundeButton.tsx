import React from 'react'
import { TouchableOpacity, Text, StyleSheet}  from 'react-native'
import { MyColors } from '../theme/AppTheme';

interface Props {
    text:string;
    onPress: () =>void,
}
export const RoundeButton = ({text, onPress}: Props) => {
  return (
      <TouchableOpacity
      style={styles.RoundeButton}
      onPress={() => onPress()}>
      
    <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    RoundeButton: {
        width: '100%',
        height: 40, 
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textButton: {
        color: 'white', 
    },

});

