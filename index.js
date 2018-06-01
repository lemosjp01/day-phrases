//Imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Styles = {

    /*styleText: {
        fontSize: 40,
        backgroundColor: '#08509b'
        //height: 60,
        //width: 60
        //paddingTop: 15,
        //color: '#fff',
        //fontStyle: 'italic',
        //fontWeight: 'bold',
 
        //textAlign: 'center'

        //textDecorationLine: 'underline'

        //shadowColor: 'red',
        //shadowOffset: {width:-10, height:-15},
        //shadowOpacity: 22
    },
    styleText2: {
        fontSize: 40,
        backgroundColor: '#2a48fa'
        //height: 60,
        //width: 60
    },    
    styleView: {
        backgroundColor: 'skyblue',
        height: 600,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column'
    }
    */

    
   primary: {
       //paddingTop: 40
       //flex: 1, //1:1
       //backgroundColor: '#538530',
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   //image: {
       //justifyContent: 'flex-end',
       //paddingBottom: 5,
      // paddingTop: 5
   //}
   button: {
       backgroundColor: '#538530',
       paddingVertical: 10,
       paddingHorizontal: 40,
       marginTop: 20
       /*
       borderColor: '#1d8eb8',
       borderWidth: 3,
       borderRadius: 8,
       shadowColor: '#000',
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.4
       */
   },
   textButton: {
       color: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
       alignSelf: 'center'
   }/*
   header: {
        flex: 2, //2:11
        backgroundColor: 'brown'
   },
   body: {
        flex: 8, //8:11
        backgroundColor: 'yellowgreen'
   },
   footer: {
        flex: 1, //1:11
        backgroundColor: 'orangered'
   }*/
};

const generateNewSentence =  () => {

    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 5);

    //frases
    var sentences = Array();
    sentences[0] = 'Se você encontra um caminho sem obstáculos, ele provalvelmente não leva a lugar nenhum.';
    sentences[1] = 'O tempo dura bastante para aqueles que sabem como aproveitá-lo.';
    sentences[2] = 'Não existe jeito fácil de alcançar o sucesso, mas sim o jeito certo.';
    sentences[3] = 'Encontre soluções ao invés de apontar problemas.';
    sentences[4] = 'Nunca é tarde demais para ser aquilo que sempre desejou ser.';

    var chosenSentence = sentences[ randomNumber ];

    Alert.alert(chosenSentence);
}

//Criar o componente
const App = () => {

    //const { styleText, styleText2, styleView } = Styles;
    //const { primary, header, body, footer } = Styles;
    //const { primary, button, textButton } = Styles;
    const { primary, button, textButton } = Styles;

    return (
        <View style={ primary }>

            <Image source={require('./imgs/logo.png')}/>

            <TouchableOpacity 
                onPress={generateNewSentence}
                style={button}>
                <Text style={textButton}>Nova frase</Text>
            </TouchableOpacity>
        
        </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
