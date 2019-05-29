import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';

import styled from 'styled-components';

const CardBase = props => { console.log('on card base ', props.deck); return (
    <FilledShadowedView>
        {
            props.body && (
                props.isTouchable ? 
                    (
                        <TouchableOpacity 
                            style={{flex: 3, width: 300}}
                            onPress={() => {console.log('ON PRESS ', props);return(
                                props.navigation && 
                                props.bodyClickToStack &&
                                props.navigation.push(props.bodyClickToStack, {...props})
                            )}}
                        >
                            {props.body}
                        </TouchableOpacity>
                    )
                :
                    (
                        <View style={{flex: 3, width: 300}}>
                            {props.body}
                        </View>
                    )
            )
        }
        <ActionsView>
            {
                props.actions &&
                props.actions.map((action, index) => (
                    <Fragment key={`fragment-${index}`}>
                        <View 
                            key={`spacer-${index}`}
                            style={{flex: 1}}
                        />
                        <TouchableOpacity 
                            key={`${action.name}-${index}`}
                            style={{flex: index > 0 ? 10 : 3}}
                            onPress={() => (
                                props.navigation && 
                                action.toStack &&
                                props.navigation.navigate(action.toStack, {...props})
                            )}
                        >
                            <ActionText {...props}>{action.name}</ActionText>
                        </TouchableOpacity>
                    </Fragment>
                ))
            }
        </ActionsView>
    </FilledShadowedView>
)};

const FilledShadowedView = styled.View`
    background-color: white;
    border-radius: 6px;
    
    elevation: 4;
    border: 2px solid #dbdbdb;

    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    min-height: 120px;
    max-height: 120px;
    width: 300px;
`;

const ActionsView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
`

const ActionText = styled.Text`
    color: ${props => props.actionColor || 'grey'}
`;

export default CardBase;