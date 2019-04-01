//Aqui, ficam todos os componentes que podem ser acessados com o navigation.

import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginScreen from './components/smartComponents/LoginScreen'
import MinhasReservas from './components/smartComponents/MinhasReservas';
import TelaDeCadastro from './components/smartComponents/TelaDeCadastro';
import DrawerContent from './components/presentationComponents/DrawerContent';
import AdicionarLocal from './components/smartComponents/AdicionarLocal';
import Gallery from './components/smartComponents/Gallery';
import AdicionarRecurso from './components/smartComponents/AdicionarRecurso';
import SelecionarSala from './components/smartComponents/SelecionarSala';
import CriarEvento from './components/smartComponents/CriarEvento';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" >{/*Esta cena é usada para que o login nao seja acessado por mais ninguem q não esteja na mesma cena que ele.*/}
                    <Scene
                        hideNavBar
                        key="login"
                        component={LoginScreen}
                        title="Gestão de Eventos"
                        initial
                        //hideNavBar={true}
                    />
                    <Scene
                        key="telaDeCadastro"
                        component={TelaDeCadastro}
                        title="Tela de Cadastro"
                        hideNavBar
                    />
                </Scene>
                <Scene key="main" >
                    <Scene
                        initial
                        key="drawer"
                        drawer
                        hideNavBar
                        //contentComponent={DrawerContent}
                        contentComponent={DrawerContent}
                        //initial={isLoggedIn}
                        drawerPosition="left"
                        drawerWidth={200}
                        drawerLabel="Hi"
                    >
                        <Scene
                            key="minhasReservas"
                            component={MinhasReservas}
                            title="Minhas Reservas"
                            hideNavBar
                        />
                        <Scene
                            key="adicionarLocais"
                            component={AdicionarLocal}
                            title="Adicionar Locais"
                            hideNavBar
                        />
                        <Scene
                            key="adicionarRecurso"
                            component={AdicionarRecurso}
                            title="Adicionar Recurso"
                            hideNavBar
                        />
                        <Scene
                            key="selecionarSala"
                            component={SelecionarSala}
                            title="Selecionar Sala"
                            hideNavBar
                        />
                        <Scene
                            key="criarEvento"
                            component={CriarEvento}
                            title="Criar Evento"
                            hideNavBar
                        />
                        <Scene
                            key="gallery"
                            component={Gallery}
                            title="Galeria"
                            hideNavBar
                        />
                    </Scene>

                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;