//Import React
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Image } from "react-native";
//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//Import External Screens

import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './drawerScreens/home/HomeScreen';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';
import SidebarMenu from './components/SidebarMenu'
import MyProfile from './drawerScreens/myProfile/MyProfile';
import UpdateProfile from './drawerScreens/myProfile/UpdateProfile';


const d = Dimensions.get("window");
const isX = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;

const HeaderRight = (navigation) => {
    return <View style={styles.iconContainer}>
        <View style={styles.headericon}>
            <Icon size={17} color="#FFFFFF" name="bell-o" onPress={() => navigation.navigate('Notifications')} />
        </View>
        <Badge
            status="warning"
            containerStyle={{ position: 'absolute', top: 30, right: 60, zIndex: 1000 }}
        />
        <View style={styles.headericon}>
            <Icon size={17} color="#FFFFFF" name="user-o" onPress={() => navigation.navigate('MyProfile')} />
        </View>
    </View>
}

const Home_StackNavigator = createStackNavigator({
    Timesheet: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <NavigationDrawerHeader navigationProps={navigation} />
                    <Text style={styles.titleStyle}>Timesheet Entry</Text>
                </View>,
            headerRight: () => HeaderRight(navigation),
            headerStyle: {
                backgroundColor: '#6cab3c',
                height: Platform.OS === "ios" && isX ? 120 : 100,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            cardStyle: { backgroundColor: Platform.OS === "ios" ? '#0071bc' : '#f4f5f7' }
        }),
    },
});
const MyprofileActivity_StackNavigator = createStackNavigator({
    MyProfile: {
        screen: MyProfile,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <NavigationDrawerHeader navigationProps={navigation} />
                    <Text style={styles.titleStyle}>My Profile</Text>
                </View>,
            headerRight: () => HeaderRight(navigation),
            headerStyle: {
                backgroundColor: '#6cab3c',
                height: Platform.OS === "ios" && isX ? 120 : 100,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            cardStyle: { backgroundColor: Platform.OS === "ios" ? '#0071bc' : '#f4f5f7' }
        }),
    },
});
const UpdateProfileActivity_StackNavigator = createStackNavigator({
    UpdateProfile: {
        screen: UpdateProfile,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <NavigationDrawerHeader navigationProps={navigation} />
                    <Text style={styles.titleStyle}>Update a Profile</Text>
                </View>,
            headerRight: () => HeaderRight(navigation),
            headerStyle: {
                backgroundColor: '#6cab3c',
                height: Platform.OS === "ios" && isX ? 120 : 100,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            cardStyle: { backgroundColor: Platform.OS === "ios" ? '#0071bc' : '#f4f5f7' }
        }),
    },
});
const DrawerNavigatorRoutes = createDrawerNavigator(
    {
        Timesheet: {
            screen: Home_StackNavigator,
        },
        MyProfile: {
            screen: MyprofileActivity_StackNavigator,
        },
        UpdateProfile: {
            screen: UpdateProfileActivity_StackNavigator,
        },
        // SettingsScreen: {
        //     screen: SecondActivity_StackNavigator,
        //     navigationOptions: {
        //         drawerLabel: 'Setting Screen',
        //     },
        // },
    },
    {
        contentComponent: SidebarMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);
export default DrawerNavigatorRoutes;
const styles = StyleSheet.create({
    headericon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 100,
        marginRight: 10
    },
    iconContainer: {
        paddingTop: 25,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    logoStyle: {
        marginTop: -30,
        fontSize: 20,
        fontWeight: 'normal',
        color: '#fff'
    },
    titleStyle: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#fff'
    }
});