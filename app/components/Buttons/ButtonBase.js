import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';

import styled from 'styled-components'

const ButtonBase = props => (
    <View>
        <FilledShadowedButton onPress={props.onClick} >
            {
                props.children || 
                (props.text && <ColoredText color='white'>{props.text}</ColoredText>) ||
                <ColoredText color='white'>Click Me!</ColoredText>
            }
        </FilledShadowedButton>
    </View>
);

const FilledShadowedButton = styled.TouchableOpacity`
    background-color: plum;
    border-radius: 8px;
    padding: 8px 4px 8px 4px;
    
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    max-height: 40px;
`;

const ColoredText = styled.Text`
    color: ${props => props.textColor || 'grey'}
`;

export default ButtonBase;