//Import React
import React from 'react';

//Import all required component
import { Dimensions, Platform, View, StyleSheet, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const d = Dimensions.get("window");
const isX = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;

class SidebarMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (index, screenToNavigate) => {
        if (screenToNavigate == 'logout') {
            this.props.navigation.toggleDrawer();
            Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            return null;
                        },
                    },
                    {
                        text: 'Confirm',
                        onPress: () => {
                            AsyncStorage.clear();
                            this.props.navigation.navigate('Auth');
                            console.log('logout');
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            this.props.navigation.toggleDrawer();
            global.currentScreenIndex = screenToNavigate;
            this.props.navigation.navigate(screenToNavigate);
        }
    };

    getIcon = (screenToNavigate) => {
        let icon = ''
        switch (screenToNavigate) {
            case 'MyHours':
                icon = 'search';
                break;
            case 'Timesheet':
                icon = 'calendar-o';
                break;
            case 'Rosters':
                icon = 'calendar';
                break;
            case 'ApplyLeave':
                icon = 'paper-plane-o';
                break;
            case 'Setting':
                icon = 'cogs';
                break;
            case 'Notifications':
                icon = 'bell-o';
                break;
            case 'logout':
                icon = 'sign-out';
                break;
            default:
                icon = '';
        }
        return icon;
    }

    render() {
        let items = [
            {
                navOptionName: 'Timesheet',
                screenToNavigate: 'Timesheet',
            },
            {
                navOptionName: 'My Hours',
                screenToNavigate: 'MyHours',
            },
            {
                navOptionName: 'Rosters',
                screenToNavigate: 'Rosters',
            },
            {
                navOptionName: 'Apply Leave',
                screenToNavigate: 'ApplyLeave',
            },
            {
                navOptionName: 'Setting',
                screenToNavigate: 'Setting',
            },
            {
                navOptionName: 'Notifications',
                screenToNavigate: 'Notifications',
            },
            {
                navOptionName: 'Logout',
                screenToNavigate: 'logout',
            },
        ];

        return (
            <ScrollView style={stylesSidebar.sideMenuContainer}>
                <View style={stylesSidebar.profileHeader}>
                    <View onStartShouldSetResponder={() => { this.props.navigation.toggleDrawer(); this.props.navigation.navigate('MyProfile') }}>
                        <Image
                            source={require('../../image/profile.png')}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                borderWidth: 2,
                                borderColor: '#FFFFFF'
                            }}
                        />
                    </View>
                    <Text style={stylesSidebar.profileHeaderText}>Sarah Anderson</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 5, top: 33, paddingHorizontal: 10 }} onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="angle-left" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <View style={stylesSidebar.profileHeaderLine} />
                <View style={{ width: '100%', flex: 1, marginBottom: 30 }}>
                    {items.map((item, key) => (
                        <TouchableOpacity onPress={() =>
                            this.handleClick(key, item.screenToNavigate)
                        }>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 20,
                                    paddingVertical: 14,
                                    color: 'white',
                                    backgroundColor:
                                        global.currentScreenIndex === item.screenToNavigate
                                            ? '#6cab3c'
                                            : '#6cab3c',
                                }}
                                key={key}
                            >
                                <View style={{ width: 20 }}>
                                    <Icon name={this.getIcon(item.screenToNavigate)} size={14} color="#FFFFFF" />
                                </View>
                                <Text style={{ fontSize: 14, color: 'white', marginLeft: 20 }}>
                                    {item.navOptionName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        );
    }
};

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6cab3c',
        paddingTop: (isX ? 40 : 20),
        color: 'white',
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#6cab3c',
        padding: 15,
        textAlign: 'center',
    },
    profileHeaderText: {
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 17
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: '#e2e2e2',
        marginTop: 15,
        marginBottom: 10,
    },
});
export default SidebarMenu;