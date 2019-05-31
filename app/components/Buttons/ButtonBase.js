import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Platform
} from 'react-native';

import styled from 'styled-components'

const ButtonBase = props => (
    <View>
        <FilledShadowedButton onPress={props.onClick} {...props} >
            {
                props.children || 
                (props.text && <ColoredText {...props}>{props.text}</ColoredText>) ||
                <ColoredText {...props}>Click Me!</ColoredText>
            }
        </FilledShadowedButton>
    </View>
);

const FilledShadowedButton = styled.TouchableOpacity`
    border-radius: 8px;
    padding: 8px 4px 8px 4px;
    
    elevation: 2;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    max-height: 40px;
    width: 120px;
            
    background-color: ${props => props.filledColor || 'transparent'};
    border: 2px solid ${props => props.borderColor || props.filledColor || 'transparent'};
`;

const ColoredText = styled.Text`
    color: ${props => props.borderColor || props.textColor || 'grey'}
`;

export default ButtonBase;