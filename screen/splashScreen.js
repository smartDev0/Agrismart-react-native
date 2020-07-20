/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hooks we needed
import React from 'react';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Progress from 'react-native-progress';
class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
            count: 0
        }
    }

    componentDidMount = () => {
        let timer = setInterval(() => {
            let icount = this.state.count + 0.025;
            this.setState({ count: icount });
            if (this.state.count > 1) {
                this.setState({ animating: false });
                //Check if user_id is set or not
                //If not then send for Authentication
                //else send to Home Screen
                clearInterval(timer);
                AsyncStorage.getItem('user_id').then(value =>
                    this.props.navigation.navigate(
                        value === null ? 'Auth' : 'DrawerNavigationRoutes'
                    )
                );
            }
        }, 125);
        // this.props.navigation.navigate('DrawerNavigationRoutes');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../image/Agrismart-Logo.png')}
                    style={{ width: '60%', resizeMode: 'contain' }}
                />
                <View style={styles.activityIndicator}>
                    <Progress.Bar
                        progress={this.state.count}
                        width={150}
                        height={4}
                        color="green"
                        animated={this.state.animating} />
                </View>
                {/* <ActivityIndicator
          animating={animating}
          color="#fb9a2e"
          size="large"
          style={styles.activityIndicator}
        /> */}
            </View>
        );
    }
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    activityIndicator: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 150
    },
});