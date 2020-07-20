//Import React
import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/loader';

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: null,
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }
    render() {
        return (
            <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                <Loader loading={this.state.loading} />
                <View style={[styles.sectionStyle, styles.shadowStyle]}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <View>
                            <Image
                                source={require('../../../image/profile.png')}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingTop: 10, marginLeft: 20 }}>
                            <Text style={[styles.titleStyle, { marginRight: 35 }]}>zakaria Ouatab</Text>
                            <Text style={{ paddingTop: 15 }}>
                                zak@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            right: 5,
                            top: 5,
                            padding: 5,
                            backgroundColor: '#f4f5f7',
                            borderRadius: 100
                        }}
                            onPress={() => this.props.navigation.navigate('UpdateProfile')}>
                            <Icon
                                name="pencil"
                                color="#6cab3c"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.smallTextStyle}>
                                <Icon name="lock" size={15} color="#6cab3c" />&nbsp;
                                Password - lanc2468
                            </Text>
                        </View>
                        <View style={{ flex: 0.5, }}>
                            <Text style={styles.smallTextStyle}>
                                <MaterialCommunityIcons name="security" color="#6cab3c" size={15} />&nbsp;
                                PIN - 0000
                                </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default MyProfile;

const styles = StyleSheet.create({
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f4f5f7',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    sectionStyle: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: '100%'
    },
    titleStyle: {
        fontSize: 17
    },
    smallTextStyle: {
        fontSize: 13,
        textAlign: 'center',

    },
    listTextStyle: {
        color: 'grey'
    },
    schedulebuttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#333',
        height: 40,
        width: '98%',
        borderRadius: 3,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
});