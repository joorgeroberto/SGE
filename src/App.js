import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyC-MvITraa9haquS80Tcw5jj0JSDIx4oeQ",
            authDomain: "sistemasge-67a02.firebaseapp.com",
            databaseURL: "https://sistemasge-67a02.firebaseio.com",
            projectId: "sistemasge-67a02",
            storageBucket: "sistemasge-67a02.appspot.com",
            messagingSenderId: "2123049747"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        //firebase.initializeApp(config);
    }
    render() {
        // Primeiro argumento: Indica os reducers.
        // Segundo argumento: os estados iniciais do app (se quisermos popular email e senha no começo do app passamos aqui).
        // Terceiro argumento: aprimoramentos do store que adicionarão funcionalidades ao store.
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

