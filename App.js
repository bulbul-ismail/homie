import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <AppNavigator/>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
