import React from 'react';
import { createSwitchNavigator } from 'react-navigation'
import * as firebase from 'firebase'
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'
import Config from './Config/config'

const config = {
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    databaseURL: Config.databaseURL,
    projectId: Config.projectId,
    storageBucket: Config.storageBucket,
    messagingSenderId: Config.messagingSenderId
};
firebase.initializeApp(config);

const App = createSwitchNavigator(
    {
        Loading,
        SignUp,
        Login,
        Main
    },
    {
        initialRouteName: 'Loading'
    }
)

export default App