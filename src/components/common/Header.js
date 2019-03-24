// Import libraries for making a component.
import React from 'react';
import { Text, View } from 'react-native';

// Make a component.
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', // Organiza os itens da view na VERTICAL.
        alignItems: 'center', // Organiza os itens da view na HORIZONTAL.
        height: 60, // Altura da view
        paddingTop: 15, /* Distancia do elemento a cima da view
                        (usado no IOS para pular a barra da notificacao)*/

        /*                     Só funciona no IOS                     */
        /*
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Sombra com largura zero e altura 2
        shadowOpacity: 0.2, // "Peso" da sombra. O quao escura ela é.
        */

        /*Adiciona uma elevação ao componente para que se crie uma sombra*/
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the components avaible to other parts of the app.
// Retira o default pra poder usar nos outros arquivos atraves do index desta pasta.
//export default Header;
export { Header };
