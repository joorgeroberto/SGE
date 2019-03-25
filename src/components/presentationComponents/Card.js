import React from 'react';
import { Image, View, Text } from 'react-native';

const Card = (props) => {
    return (/*Comentario do children abaixo*/
        <View style={styles.containerStyle}>
            {props.children}
        </View>
        /* {props.children} => Com esse comando, tudo que é passado e colocado dentro do <Card>
         pelo Album Detail é passado e renderizado usando os parametros dele.*/
    );
};

const styles = { // Estilo do container
    containerStyle: {
        borderWidth: 1,  // Distancia da borda superior.
        borderRadius: 2, // Bordas arredondadas.
        borderColor: '#ddd',
        borderBottomWidth: 0, //Distancia da borda inferior.
        shadowColor: '#000',
        shadowOffSet: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2, // Sombras arredondadas
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

// Retira o default pra poder usar nos outros arquivos atraves do index desta pasta.
//export default Card;
export { Card };
