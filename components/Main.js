import React from 'react'
import { StyleSheet, TouchableHighlight, Button, Text, View } from 'react-native'
import firebase from 'firebase'

export default class Main extends React.Component {
    state = { currentUser: null }

    constructor(props) {
        super(props)
        // Set Initial States
        this.state = {count: 0, disabled: true, timer: 3}
    }

    // Start timing user
    startTimer = () => {
        // Set startTime to current time of call
        startTime = new Date();
    }

    endTimer = () => {
        // Set endTime to current time of call
        endTime = new Date();

        // Compare endTime and startTime to calculate user speed
        let timeDiff = endTime - startTime; //in ms

        // get milliseconds rounded
        let milliSeconds = Math.round(timeDiff);

        // Update userTime and timer
        this.setState({
            userTime: milliSeconds,
            timer: milliSeconds + " ms",
        })

        const { currentUser } = firebase.auth();
        let updates = {}
        updates[`users/${currentUser.uid}/`] =
        {
            'gameTime': milliSeconds,
        }
        firebase.database().ref().update(updates);
        console.log(milliSeconds + " MS");
    }

    // Fire on TapTapButton Press
    onPressTapTap = () => {
        // Update count state
        this.setState({
            count: this.state.count + 1
        })

        // Test if count is 0
        if (this.state.count >= 0) {
            // Update disabled state
            this.setState({
                disabled: true
            })
        }

        // Fire endTimer function to stop timing user
        this.endTimer();
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
        let updates = {};
        updates[`users/${currentUser.uid}/`] =
        {
            'gameTime': '',
        }
        firebase.database().ref().update(updates);
        // Initial game countdown
        // Start timer
        const timerInterval = setInterval(() => {
            // If timer is not 0 keep going
            if (this.state.timer > 1) {
                this.setState({
                    timer: this.state.timer - 1,
                })
            } else {
                // If timer is 0 set timer state to go to tell user to go then undisable the button
                this.setState({
                    timer: 'Go',
                    disabled: false,
                })

                // Start game timer
                this.startTimer();

                // Clear countdown timer
                clearInterval(timerInterval);
            }
        }, 1000)
    }

    logout = () => {
        firebase.auth().signOut()
            .then(function() {
                this.props.navigation.navigate('Loading')
            })
            .catch(function(error) {
                // An error happened
            });
    }

    render() {
        const { currentUser } = this.state
        const buttonStyles = this.state.disabled ? styles.tapButtonDisabled : styles.tapButton;

        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button title={"Logout"} onPress={()=>{this.logout()}}/>
                <TouchableHighlight onPress={this.onPressTapTap} disabled={this.state.disabled} style={buttonStyles}>
                    <Text style={styles.tapButtonText}>{this.state.timer}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    tapButton: {
        backgroundColor: '#ff0059',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tapButtonDisabled: {
        backgroundColor: '#fff',
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tapButtonText: {
        fontSize: 40
    },
})