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
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';
import SidebarMenu from './components/SidebarMenu'
import MyProfile from './drawerScreens/myProfile/MyProfile';
import UpdateProfile from './drawerScreens/myProfile/UpdateProfile';
import Notifications from './drawerScreens/notifications/Notifications'
import Leave from './drawerScreens/leave/Leave';
import EditTimesheetScreen from './drawerScreens/home/EditTimesheetScreen'

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
                    <Text style={styles.titleStyle}>Timesheet</Text>
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
const Timesheet_StackNavigator = createStackNavigator({
    EditTimesheet: {
        screen: EditTimesheetScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <AntDesign name="arrowleft" size={25} color="#FFFFFF" onPress={() => navigation.navigate('Timesheet')} />
                    <Text style={styles.titleStyle}>Edit Timesheet</Text>
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
                    <AntDesign name="arrowleft" size={25} color="#FFFFFF" onPress={() => navigation.navigate('MyProfile')} />
                    <Text style={styles.titleStyle}>Profile</Text>
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
const NotificationsActivity_StackNavigator = createStackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <NavigationDrawerHeader navigationProps={navigation} />
                    <Text style={styles.titleStyle}>Notifications</Text>
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
const LeaveActivity_StackNavigator = createStackNavigator({
    ApplyLeave: {
        screen: Leave,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <View style={{ alignItems: 'center' }}>
                <Text style={styles.logoStyle}>AgriSmart</Text>
            </View>,
            headerLeft: () =>
                <View style={styles.iconContainer}>
                    <NavigationDrawerHeader navigationProps={navigation} />
                    <Text style={styles.titleStyle}>Leave</Text>
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
        EditTimesheet: {
            screen: Timesheet_StackNavigator
        },
        MyProfile: {
            screen: MyprofileActivity_StackNavigator,
        },
        UpdateProfile: {
            screen: UpdateProfileActivity_StackNavigator,
        },
        Notifications: {
            screen: NotificationsActivity_StackNavigator,
        },
        ApplyLeave: {
            screen: LeaveActivity_StackNavigator,
        },
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