import React from 'react';
import { createSwitchNavigator } from 'react-navigation'

import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import * as firebase from 'firebase'
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'


// // Initialize Firebase
// const firebaseConfig = {
//         apiKey: "<your-api-key>",
//         authDomain: "<your-auth-domain>",
//         databaseURL: "<your-database-url>",
//         storageBucket: "<your-storage-bucket>",,
//     };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default class App extends React.Component {
//     constructor(props) {
//         super(props)
//         // Set Initial States
//         this.state = {count: 0, disabled: true, timer: 3}
//     }
//
//     // Start timing user
//     startTimer = () => {
//         // Set startTime to current time of call
//         startTime = new Date();
//     }
//
//     endTimer = () => {
//         // Set endTime to current time of call
//         endTime = new Date();
//
//         // Compare endTime and startTime to calculate user speed
//         let timeDiff = endTime - startTime; //in ms
//
//         // get milliseconds rounded
//         let milliSeconds = Math.round(timeDiff);
//
//         // Update userTime and timer
//         this.setState({
//             userTime: milliSeconds,
//             timer: milliSeconds + " ms",
//         })
//         console.log(milliSeconds + " MS");
//     }
//
//     // Fire on TapTapButton Press
//     onPressTapTap = () => {
//         // Update count state
//         this.setState({
//             count: this.state.count + 1
//         })
//
//         // Test if count is 0
//         if (this.state.count >= 0) {
//             // Update disabled state
//             this.setState({
//                 disabled: true
//             })
//         }
//
//         // Fire endTimer function to stop timing user
//         this.endTimer();
//     }
//
//     componentDidMount() {
//         // Initial game countdown
//         // Start timer
//         const timerInterval = setInterval(() => {
//             // If timer is not 0 keep going
//             if (this.state.timer > 1) {
//                 this.setState({
//                     timer: this.state.timer - 1,
//                 })
//             } else {
//                 // If timer is 0 set timer state to go to tell user to go then undisable the button
//                 this.setState({
//                     timer: 'Go',
//                     disabled: false,
//                 })
//
//                 // Start game timer
//                 this.startTimer();
//
//                 // Clear countdown timer
//                 clearInterval(timerInterval);
//             }
//         }, 1000)
//     }
//
//     render() {
//         // Dynamic styles of TapTap button
//         let buttonStyles = this.state.disabled ? styles.tapButtonDisabled : styles.tapButton;
//
//         return (
//             <View style={styles.container}>
//                 <Loading/>
//                 <TouchableHighlight onPress={this.onPressTapTap} disabled={this.state.disabled} style={buttonStyles}>
//                     <Text style={styles.tapButtonText}>{this.state.timer}</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     tapButton: {
//         backgroundColor: '#ff0059',
//         height: 150,
//         width: 150,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     tapButtonDisabled: {
//         backgroundColor: '#fff',
//         height: 150,
//         width: 150,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     tapButtonText: {
//         fontSize: 50
//     },
// });

var config = {
    apiKey: "AIzaSyAsR8ryHhRcDeKqA3S2VAKl4Qx-XsSWFBk",
    authDomain: "taptap-5e974.firebaseapp.com",
    databaseURL: "https://taptap-5e974.firebaseio.com",
    projectId: "taptap-5e974",
    storageBucket: "taptap-5e974.appspot.com",
    messagingSenderId: "946294594976"
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