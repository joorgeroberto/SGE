//Aqui, ficam todos os componentes que podem ser acessados com o navigation.

import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen'
import MinhasReservas from "./components/MinhasReservas";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">{/*Esta cena é usada para que o login nao seja acessado por mais ninguem q não esteja na mesma cena que ele.*/}
                    <Scene
                        hideNavBar
                        key="login"
                        component={LoginScreen}
                        title="Gestão de Eventos"
                        initial
                        //hideNavBar={true}
                    />

                </Scene>
                <Scene key="main" initial>
                    <Scene
                        key="minhasReservas"
                        component={MinhasReservas}
                        title="Minhas Reservas"
                        initial
                        hideNavBar
                    />
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;