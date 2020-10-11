import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '@homieApp/constants/Colors';
import TabOneScreen from '@screens/TabOneScreen';
import TabTwoScreen from '@screens/TabTwoScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{activeTintColor: Colors.base.tint}}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={Colors.base.tabIconDefault}/>,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'Tab One Title'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'Tab Two Title'}}
            />
        </TabTwoStack.Navigator>
    );
}
